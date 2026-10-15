# Security

Report suspected security issues privately to `alex.tan@hezed-it.com`. Do not publish credentials, client records or personal information in issues.

This static marketing site has no authentication, database or form-submission backend. Email links use the visitor's mail application. The support portal is a separate system with its own access controls.

Never place secrets in browser code or Git. If exposed, revoke/rotate them immediately and coordinate history cleanup with the owner. Deleting a current file does not remove previous commits.

Before adding forms, tracking, external scripts or a backend, assess privacy, data collection, access controls, abuse prevention and secure deployment configuration.
