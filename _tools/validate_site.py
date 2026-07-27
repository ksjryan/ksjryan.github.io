"""Lightweight checks for the Jekyll site source.

This does not replace a full Jekyll build, but it catches the common mistakes
that happen when editing the data-driven homepage: missing images, missing
project pages, missing includes, and stale navigation anchors.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "_data"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def check_image_paths(errors: list[str]) -> None:
    for data_file in DATA_DIR.glob("*.yml"):
        for match in re.finditer(r'(?:image|src):\s*"([^"]+)"', read(data_file)):
            image_url = match.group(1)
            if not image_url.startswith("/images/"):
                continue

            image_path = ROOT / image_url.lstrip("/")
            if not image_path.exists():
                errors.append(f"Missing image in {data_file.name}: {image_url}")


def check_project_pages(errors: list[str]) -> None:
    projects = DATA_DIR / "fun_projects.yml"
    for match in re.finditer(r'url:\s*"([^"]+)"', read(projects)):
        url = match.group(1)
        if not url.startswith("/pages/"):
            continue

        page_path = ROOT / url.lstrip("/")
        candidates = [page_path, page_path.with_suffix(".md"), page_path.with_suffix(".html")]
        if not any(candidate.exists() for candidate in candidates):
            errors.append(f"Missing project page for {url}")


def check_publication_pages(errors: list[str]) -> None:
    publications = DATA_DIR / "publications.yml"
    for match in re.finditer(r'detail_url:\s*"([^"]+)"', read(publications)):
        url = match.group(1).rstrip("/")
        page_path = ROOT / url.lstrip("/")
        candidates = [page_path, page_path.with_suffix(".md"), page_path.with_suffix(".html")]
        if not any(candidate.exists() for candidate in candidates):
            errors.append(f"Missing publication detail page for {url}")


def check_includes(errors: list[str]) -> None:
    index = read(ROOT / "index.html")
    for match in re.finditer(r"{%\s*include\s+([^\s%]+)", index):
        include_path = ROOT / "_includes" / match.group(1)
        if not include_path.exists():
            errors.append(f"Missing include: {match.group(1)}")


def check_nav_anchors(errors: list[str]) -> None:
    config = read(ROOT / "_config.yml")
    publication_data = read(DATA_DIR / "publications.yml")
    available_ids = {"home", "fun-project"}
    available_ids.update(re.findall(r'^\s+- id:\s*"([^"]+)"', publication_data, re.MULTILINE))

    for anchor in re.findall(r"url:\s*/#([A-Za-z0-9_-]+)", config):
        if anchor not in available_ids:
            errors.append(f"Navigation anchor has no homepage section: #{anchor}")


def check_responsive_cleanup(errors: list[str]) -> None:
    css = "\n".join(
        read(path)
        for path in [
            ROOT / "assets" / "css" / "main.scss",
            ROOT / "_sass" / "site" / "_home.scss",
        ]
    )
    forbidden_patterns = [
        "width: 150%",
        "width: 125%",
        "main.container p",
    ]
    for pattern in forbidden_patterns:
        if pattern in css:
            errors.append(f"Responsive cleanup regression in CSS: {pattern}")


def main() -> int:
    errors: list[str] = []
    check_image_paths(errors)
    check_project_pages(errors)
    check_publication_pages(errors)
    check_includes(errors)
    check_nav_anchors(errors)
    check_responsive_cleanup(errors)

    if errors:
        for error in errors:
            print(error)
        return 1

    print("Site source checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
