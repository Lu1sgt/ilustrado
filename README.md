# Ilustrado — Interactive Archive & Literary Index

A static, zero-backend website for a Great Books course project on Miguel Syjuco's novel *Ilustrado*. It turns the novel's characters, nested fictional works, plot arcs, settings, and themes into a searchable, browsable archive.

**Live site:** https://lu1sgt.github.io/ilustrado/

## What the site does

- **Search** across names, works, places, themes, and notes
- **Filter** by category: Characters, Nested Works, Plot & Setting, and Themes & Values
- **Read detailed notes** for each entry in a modal, including a summary, critical/Great Books analysis, and key textual highlights
- **Navigate by keyboard** — press `Esc` to close the detail view, with focus restored to the card you opened
- Runs entirely in the browser: no server, database, or build step

## Project structure

```text
.
├── index.html   # Page structure
├── styles.css   # Layout and visual design
├── data.js      # Archive entries (edit this to add content)
├── app.js       # Search, filtering, and modal logic
└── .nojekyll    # Tells GitHub Pages to serve files directly
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Add entries

Append objects to the `ARCHIVE_ITEMS` array in `data.js`:

```js
{
  id: "unique-slug",
  title: "Entry Title",
  category: "Characters", // Characters | Nested Works | Plot & Setting | Themes & Values
  section: "Chapters 1 – 3",
  summary: "One-paragraph overview.",
  analysis: "Deeper critical / thematic commentary.",
  highlights: ["Specific textual detail", "Another detail"]
}
```

## Deployment

Hosted with **GitHub Pages** from the `main` branch root. Any push to `main` updates the live site automatically.
