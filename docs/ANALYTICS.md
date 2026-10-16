# Analytics operations

## Current analytics source

The production site at https://hezed-it.com is hosted on ChatGPT Sites. ChatGPT Sites records aggregate traffic for the deployed Site automatically, so the website source does not need a JavaScript analytics SDK.

## How to check traffic

1. Open the published HezedIT Site in ChatGPT.
2. Open **More actions** for the Site.
3. Select **Analytics**.
4. Review the available traffic metrics for the required date range.

Use **unique visitors** when answering “how many people visited?” and **page views** when answering “how many pages were viewed?”. These numbers are different because one visitor can generate multiple page views.

## Daily reporting

For a daily check, use the Site analytics date range for the current day and record at minimum:

- Unique visitors
- Page views
- Reporting date and timezone

For trend reporting, compare the same metric across day, week and month windows rather than mixing visitors and page views.

## Source-of-truth rules

- ChatGPT Sites analytics are the source of truth for traffic to the ChatGPT Sites-hosted production website.
- GitHub repository traffic is not website traffic and must not be used as the production visitor count.
- DNS query volume, CDN requests and server/network logs should not be presented as visitor counts unless explicitly analyzed for that purpose.
- Do not add third-party analytics only to duplicate the built-in visitor/page-view counts.

## When third-party analytics may be appropriate

A separate analytics product may be considered if the business needs capabilities beyond the built-in Site analytics, such as campaign attribution, custom conversion events, funnels or cross-domain tracking. Any such change should include a privacy/cookie assessment before deployment and should be documented here and in `README.md`.

## Privacy and maintenance

Do not collect unnecessary personal information. Never commit analytics credentials, tokens or private exports to this repository. Keep analytics configuration separate from public source unless a public client identifier is explicitly designed to be exposed.
