# Seongjun Kang Website

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
- `_data/background.yml`: education and research experience, including research visit dates
- `_data/publications.yml`: publication sections, images, authors, venues, awards, and links
- `_data/fun_projects.yml`: fun project cards and links
- `_data/activities.yml`: conference selector, badge image viewports, and photo albums
- `_config.yml`: site title, sidebar description, and sidebar navigation
- `_sass/site/_home.scss`: homepage layout and responsive styling
- `assets/css/site.scss`: active stylesheet entry point; `main.scss` mirrors its imports

The homepage itself is intentionally small:

- `index.html`: assembles the homepage sections
- `_includes/home-about.html`: profile section template
- `_includes/home-background.html`: responsive Education and Research Experience section
- `profile-carousel.js`: profile photo previous/next interaction
- `_includes/home-publications.html`: publication section template
- `_includes/publication-card.html`: one publication card template
- `_includes/home-projects.html`: project grid template
- `_includes/home-activities.html`: shared conference badge and photo gallery
- `_sass/site/_activities.scss`: responsive conference gallery styles
- `activity-gallery.js`: conference selection and photo carousel
- `publication-details.js`: first-author teaser/video panels that expand below each card
- `smooth-scroll.js`: smooth same-page section navigation

## Publishing

After editing, publish to GitHub Pages with:

```powershell
git add .
git commit -m "Update website"
.\_tools\publish_to_github.ps1
```

GitHub Pages will rebuild the public site after the push.

## Conference Photos

Each event in `_data/activities.yml` has a `photos` list. An empty list intentionally
shows blank photo slots. To add photos, use records such as:

```yaml
photos:
  - src: "/images/activities/chi-2026/photo-01.jpg"
    alt: "A description of the conference photo"
    caption: "Optional short caption"
```

Set `photo_aspect_ratio` and, where needed, `photo_fit: "contain"` on an event to
preserve group photos within the gallery. The `location` field appears beside the
year. Photos are view-only; the arrows browse the album without opening an enlarged
image. Events without a supplied badge leave that column empty.

The badge viewports crop the displayed image without changing its printed text
or ribbons. Coordinates use the upright source dimensions recorded in
`badge_crop`; `badge_width` and `badge_height` describe the visible crop.
