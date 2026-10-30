# OffDutyCode

> Clocked out. Still shipping.

**[offdutycode.com](https://offdutycode.com)** is a home for small projects built after hours: little tools, quick experiments and weekend ideas that start as "wouldn't it be cool if…".

The day job pays the bills. The nights are for building whatever seems fun.

## What you'll find here

- 🛠️ **Small projects**: tiny tools and apps, each one focused on doing one thing well.
- 🧪 **Experiments**: new languages, odd frameworks and ideas tried out with no deadlines.
- 📓 **Notes & write-ups**: what worked, what broke and what was learned along the way.

## The website

The site is a single static page (`index.html`) with no build step and no dependencies. It includes:

- A login screen: enter as a **guest** (no password) or as an **admin**
- An admin panel for adding and removing projects (saved in the admin's browser)
- An animated starfield background
- A typing hero headline
- A shift tracker that shows whether you're "on duty" (weekdays 9 to 6, your local time)
- An interactive terminal you can type commands into (try `help`)

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Hosting

The site is served at `offdutycode.com`, set by the `CNAME` file (for GitHub Pages).

---

Built after hours · powered by ☕
