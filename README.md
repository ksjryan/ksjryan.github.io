# Seongjun (Ryan) Kang Website

This is the source for the GitHub Pages site at <https://ksjryan.github.io>.

## Safe Backup

Before the cleanup work, the original site was preserved locally in three ways:

- Git branch: `backup/original-20260727`
- Git tag: `backup-original-20260727`
- Zip archive: `.site-backups/original-20260727-eafaaa4.zip`

To restore the original version with Git:

```powershell
git checkout backup/original-20260727
```

## Where To Edit

Most homepage content now lives in `_data`, so routine updates do not require
copying large HTML blocks.

- `_data/profile.yml`: name, profile image, intro, vision, and biography
- `_data/publications.yml`: publication sections, images, authors, venues, awards, and links
- `_data/fun_projects.yml`: fun project cards and links
- `_config.yml`: site title, sidebar description, and sidebar navigation
- `_sass/site/_home.scss`: homepage layout and responsive styling
- `assets/css/main.scss`: stylesheet entry point that imports the theme and custom styles

The homepage itself is intentionally small:

- `index.html`: assembles the homepage sections
- `_includes/home-about.html`: profile section template
- `profile-carousel.js`: profile photo previous/next interaction
- `_includes/home-publications.html`: publication section template
- `_includes/publication-card.html`: one publication card template
- `_includes/home-projects.html`: project grid template
- `_layouts/publication.html`: publication summary/video page layout
- `pages/publications/`: one lightweight page file per publication detail page
- `smooth-scroll.js`: smooth same-page section navigation

## Publishing

After editing, publish to GitHub Pages with:

```powershell
git add .
git commit -m "Update website"
.\_tools\publish_to_github.ps1
```

GitHub Pages will rebuild the public site after the push.
