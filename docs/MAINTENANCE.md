# Maintenance

## Editing

- Content, headings, project entries, contact details and SVG icons: `public/index.html`.
- Layout, colors, breakpoints and transitions: `public/assets/styles.css`.
- Navigation, reveals and widget interactions: `public/assets/main.js`.
- Changing an email requires updating all visible addresses and `mailto:` links, including the floating widget.
- Keep actual spaces between words; removed mobile line breaks must not join BTP and CAP or other words.
- The portal image shows its public sign-in page only.

## Browser checklist before release

- Review centered content on desktop and wide screens.
- At 320, 375 and 768 pixels, check overflow, headings and the contact panel bounds.
- Test anchor positions below the sticky header, mobile menu and Escape behavior.
- Open the contact widget with mouse, touch and keyboard; close with its button, Escape or outside click. Check its fixed position while scrolling.
- Mail links should compose a message to Alex Tan, not send it automatically.
- Check page-arrival and scroll effects; no content should stay invisible.
- Enable reduced motion; check keyboard focus and printing.
- Check skip link, tab order, focus, headings, image alternative text and 200% zoom.
- Inspect network/console errors and broken links. Use Lighthouse/axe and screen-reader checks when available.

Source validation does not prove accessibility compliance, cross-browser compatibility or Core Web Vitals. Comprehensive manual testing remains outstanding at the initial import.
