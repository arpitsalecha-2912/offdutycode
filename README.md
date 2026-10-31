# OffDutyCode

> Clocked out. Still shipping.

**[offdutycode.com](https://offdutycode.com)** is a home for small websites built after hours: little tools, quick experiments and weekend ideas.

## How the site works

1. **Login screen.** Visitors choose **Guest** (no password) or **Admin** (username and password).
2. **Admin dashboard.** Admins see a card for every page in the `pages/` folder. Each card has:
   - an **Open** button to use the page
   - a **Show to guests** switch that decides whether guests can see it
3. **Guest gallery.** Guests only see the pages that are switched on.

## Add a new page

1. Copy the `pages/_template/` folder and rename it, for example `pages/weather-app/`.
   Use lowercase letters, numbers and dashes. Folders starting with `_` are ignored.
2. Put your page in `index.html` inside that folder (plus any images, CSS or JS it needs).
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
    "pomodoro": { "guest": true },
    "tip-splitter": { "guest": false }
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
