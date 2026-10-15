"""Dependency-free static website source validation."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"


class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs = [], []
        self.h1 = 0
        self.viewport = self.language = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "h1":
            self.h1 += 1
        if tag == "html":
            self.language = bool(attrs.get("lang"))
        if tag == "meta" and attrs.get("name") == "viewport":
            self.viewport = True
        for key in ("src", "href"):
            if attrs.get(key):
                self.refs.append(attrs[key])
        if tag == "img":
            assert attrs.get("alt"), "Image alternative text missing"
            assert attrs.get("width") and attrs.get("height"), "Image dimensions missing"


def main():
    html = (PUBLIC / "index.html").read_text(encoding="utf-8")
    parser = Parser()
    parser.feed(html)
    assert parser.h1 == 1, "Use one h1"
    assert parser.language and parser.viewport, "Language/viewport missing"
    assert len(parser.ids) == len(set(parser.ids)), "Duplicate IDs"
    for ref in parser.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        if not url.path and url.fragment:
            assert unquote(url.fragment) in parser.ids, f"Missing anchor: {ref}"
        if url.path:
            target = (PUBLIC / unquote(url.path).lstrip("/")).resolve()
            assert target.is_relative_to(PUBLIC.resolve()), f"Unsafe path: {ref}"
            assert target.is_file(), f"Missing asset: {ref}"
    assert "prefers-reduced-motion" in (PUBLIC / "assets/styles.css").read_text()
    assert "<style>" not in html and "<script>" not in html, "Use external assets"
    assert "alex.tan@hezed-it.com" in html
    print("PASS: headings, metadata, anchors, assets and motion preferences")


if __name__ == "__main__":
    main()
