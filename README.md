# OffDutyCode

> Clocked out. Still shipping.

**[offdutycode.com](https://offdutycode.com)** is a home for small websites built after hours: little tools, quick experiments and weekend ideas.

## How the site works

1. **Login.** Visitors choose **Guest** (no password) or **Admin** (username and password).
2. **Dashboard.** A sidebar lists every page. It collapses to icons on desktop and slides in on phones.
   The overview shows each page as a card with a live preview.
3. **Admins** see every page in `pages/` and a **Public** switch on each one.
4. **Guests** only see pages that are switched on.
5. **Dark and light mode.** Use the switch at the bottom of the sidebar. Pages follow the same theme.

## Add a new page

1. Copy the `pages/_template/` folder and rename it, for example `pages/weather-app/`.
   Use lowercase letters, numbers and dashes. Folders starting with `_` are ignored.
2. Put your page in `index.html` inside that folder (plus any images, CSS or JS it needs).
   The template already uses the shared look from `pages/_shared/` (theme, cards, buttons, inputs).
3. Edit `info.json` in the same folder:

   ```json
   {
     "name": "Weather App",
     "description": "One or two sentences about what this page does.",
     "icon": "🌦️"
   }
   ```

4. Commit to `main`. The page shows up on the admin dashboard automatically, hidden from guests.
5. On the dashboard, flip **Show to guests** to make it public.

## Guest visibility

Which pages guests can see is stored in `pages/settings.json`:

```json
{
  "pages": {
    "focus-timer": { "guest": true },
    "lunch-splitter": { "guest": false }
  }
}
```

The dashboard switch updates this file for you. The first time, it asks for a GitHub key (a fine-grained token with **Contents: Read and write** on this repo only). The key is saved only in that browser. You can also edit `settings.json` by hand on GitHub.

## Good to know

- The admin password check runs in the browser, so it keeps casual visitors out but isn't real security.
- "Hidden" pages are hidden from the guest gallery, but anyone who knows the exact link can still open them. Don't put private information in this repo.

## Run it locally

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Hosting

Served by GitHub Pages at `offdutycode.com` (set by the `CNAME` file).

---

Built after hours · powered by ☕
