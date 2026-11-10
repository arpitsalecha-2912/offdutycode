# Private (admin only)

Files here are **encrypted**. They can only be read on the site after signing in as admin.

- `artifacts.json`: the admin's private list of Claude artifacts (AES-GCM, key from the admin
  password via PBKDF2, 600,000 rounds). Add or remove items from **Artifacts** in the dashboard.
