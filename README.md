# HezedIT website

Company website for SAP integration and development, commercial web development, IT support, digital design, projects and contact information.

**Production:** https://hezed-it.com  
**Hosting:** ChatGPT Sites, public static hosting  
**Commercial contact:** Alex Tan — Managing Partner & Commercial Contact, Philippines  
**Email:** alex.tan@hezed-it.com

## Technology

Semantic HTML, responsive CSS, vanilla JavaScript and an optimized WebP image. No framework, package installation, build step, database, analytics or runtime secrets. Email links open the visitor's mail application; the website does not send or store messages.

## Local preview

Requires Python 3. Node.js is needed only for JavaScript syntax checking.

```sh
python3 -m http.server 8000 --directory public
```

Open http://localhost:8000. Stop with Ctrl+C.

## Validation

```sh
python3 scripts/check_site.py
node --check public/assets/main.js
```

GitHub Actions runs these checks on pushes and pull requests. These are structural checks, not full browser testing or WCAG certification.

## Layout

| Path | Purpose |
| --- | --- |
| `public/index.html` | Page structure and business content |
| `public/assets/styles.css` | Layout, responsive styles and motion |
| `public/assets/main.js` | Navigation, scroll reveals and contact widget |
| `public/assets/support-portal.webp` | Public service desk sign-in screenshot |
| `scripts/check_site.py` | Dependency-free source checks |
| `.github/workflows/validate.yml` | Continuous integration |
| `docs/DEPLOYMENT.md` | Hosting, DNS, releases and rollback |
| `docs/MAINTENANCE.md` | Editing and manual verification |
| `CONTRIBUTING.md` | Branch and pull request conventions |
| `SECURITY.md` | Secret handling and private reporting |
| `CHANGELOG.md` | Release history |

## Deployment

Serve **`public/`** as the static website root. See [deployment instructions](docs/DEPLOYMENT.md).

This repository does not enable GitHub Pages or automatically synchronize with ChatGPT Sites. The current hosting repository remains separate. Future releases must explicitly synchronize approved GitHub source with the existing hosting checkout.

## Accessibility and behavior

Centered responsive sections, SAP/commercial service groups, keyboard navigation, skip link, visible focus, reduced-motion support, scroll reveals and a fixed email-only contact disclosure. Content remains readable without scroll-animation JavaScript. Comprehensive browser, screen-reader and performance testing has not been recorded.

## Ownership

No open-source license is granted. Ask the owner before redistribution. Third-party names identify platforms and project context; they do not imply endorsement or partner certification. Do not publish client data or authenticated application screenshots without authorization.
