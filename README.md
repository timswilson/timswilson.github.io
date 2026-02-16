# timswilson.com

Personal site built with Jekyll + GitHub Pages.

**Live at:** https://timswilson.github.io/

---

## Quick Start (Local Dev)

```bash
bundle install
bundle exec jekyll serve
```

Visit http://localhost:4000/

---

## File Guide — What to Edit

### Content Updates (Most Common)

| Want to update? | Edit this file |
|-----------------|----------------|
| **Main content** (about, experience, skills, personal info) | `index.html` |
| **Site title / subtitle** | `index.html` (top header section) |
| **Profile photo** | Replace `assets/img/Tim Wilson's Headshot.jpg` |
| **Contact links** | `index.html` (footer contact section) |

### Appearance

| Want to update? | Edit this file |
|-----------------|----------------|
| **Colors / fonts / spacing** | `_sass/_variables.scss` |
| **Custom CSS** | `assets/css/style.scss` |
| **Favicon** | Replace `favicon.ico` |
| **Site title in browser tab** | `index.html` → `<title>` tag |

### Config

| Want to update? | Edit this file |
|-----------------|----------------|
| **Site-wide settings** | `_config.yml` |

> ⚠️ Changes to `_config.yml` require restarting the server: `bundle exec jekyll serve`

---

## Files You Should NOT Touch

- ❌ `_site/` — Auto-generated output (gitignored, don't commit)
- ❌ `_includes/` — Jekyll layout includes (unless you know what you're doing)
- ❌ `_layouts/` — Page layouts (defaults work fine)
- ❌ `_sass/` — Unless changing colors/fonts

---

## Deploying Changes

1. Make your edits in `index.html` (or other files)
2. Commit:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin master
   ```
3. GitHub Pages auto-deploys in ~1-2 minutes

---

## Tips

- **Use the local server** — Edit locally, check `localhost:4000`, then push
- **Keep `Gemfile.lock` committed** — Ensures consistent Jekyll versions
- **Images** — Put in `assets/img/` and reference as `/assets/img/filename.jpg`
- **Dark mode is baked in** — The current site uses custom CSS, not Bootstrap. Edit `index.html` or `assets/css/style.scss` to change colors

---

## Troubleshooting

**Site not updating after push?**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check GitHub repo → Actions tab for build errors

**Local server won't start?**
- Run `bundle install` first
- Check Ruby version: `ruby -v`

---

Built with Jekyll. Hosted on GitHub Pages.
