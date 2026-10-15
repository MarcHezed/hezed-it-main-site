# Contributing

1. Create a focused branch from `main`: `feat/<topic>`, `fix/<topic>` or `docs/<topic>`.
2. Keep changes focused; preserve business claims and contacts unless the owner supplies changes.
3. Run `python3 scripts/check_site.py` and `node --check public/assets/main.js`.
4. Preview desktop/mobile behavior and follow `docs/MAINTENANCE.md`.
5. Open a pull request explaining the resulting behavior, validation and any limitations. Add screenshots for layout changes.
6. Review the diff and merge after checks pass. Use clear commits such as `fix: preserve spaces in service headings`.
7. Deploy separately following `docs/DEPLOYMENT.md` and record the deployed commit.

Recommended settings (not automatically enabled): protect `main`, require pull requests and the `validate` check, and prevent force pushes. Choose review requirements suitable for the number of maintainers.

Never commit credentials, temporary exports, generated output or private client information. Document licenses and external dependencies when adding media or third-party code.
