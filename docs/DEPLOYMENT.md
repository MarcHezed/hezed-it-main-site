# Deployment and domain operations

## Current production

- Domain: https://hezed-it.com
- Host: ChatGPT Sites, public static site.
- Deployable directory: `public/`.
- Build command and runtime environment variables: none.

GitHub is not configured to deploy automatically. Hosting source and GitHub are separate repositories. A merge does not change production. Do not change DNS or switch hosting for ordinary content updates.

## Release to the existing host

1. Merge and record the approved GitHub commit. Validate and preview its exact source.
2. Open the existing HezedIT Sites project and source checkout through the supported Sites workflow. Preserve its project identity, custom domain and public audience.
3. Copy the contents of `public/` into the static directory declared in that checkout's `.openai/hosting.json` (currently `dist/`). Replace old static files deliberately and do not copy Git metadata.
4. Verify asset paths and copy completeness. Use the supported Sites source helper to commit/push the hosting checkout and package that same pushed commit.
5. Save and deploy the version using the public/shared deployment operation. Do not use owner-private deployment for this public site.
6. Confirm deployment success and test the domain, navigation, scroll reveals and contact widget.
7. Record the GitHub SHA, hosting SHA, saved version/deployment ID, date and verification results in the release record. SHAs can differ because repository layouts differ.

Obtain short-lived hosting credentials through the supported integration. Never commit them.

## Rollback

Redeploy a known-good saved Sites version while retaining its public audience and domain. Alternatively revert the GitHub change, validate and publish a new hosting version. Do not rewrite shared history or change DNS for a content rollback.

## DNS

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `162.159.143.30` |
| A | `@` | `172.66.3.26` |

Domain verification and HTTPS were activated on 15 October 2026. Read current verification TXT records from the hosting provider before troubleshooting; retain records the host requires.

Preserve email/MX, SPF, DKIM, DMARC and `support.gufc` records. The support portal is independently hosted. `www.hezed-it.com` is not configured by this repository and must be added separately if requested.

## Alternative hosting

Azure Static Web Apps, Azure Storage static website hosting and similar services can serve `public/`. Migration requires a hosting decision, provider setup, HTTPS validation and DNS plan. No provider credentials or migration workflow are included.
