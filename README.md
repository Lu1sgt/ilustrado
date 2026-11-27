# ilustrado

An interactive, zero-backend archive and literary index for Miguel Syjuco's *Ilustrado*, built as a Great Books course project.

## Features

- Searchable index of characters, nested works, plot/setting, and themes
- Category filters with live result counts
- Detail modal with summaries, critical analysis, and key highlights
- Accessible keyboard support (Esc to close, focus restoration)

## Files

```text
.
├── index.html   # Page structure
├── styles.css   # Layout and visual design
├── data.js      # Archive entries (edit this to add content)
└── app.js       # Search, filtering, and modal logic
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

## Deploy

- **Netlify:** drag the project folder into the Netlify deploy area.
- **GitHub Pages:** push to a public repo, then enable Pages from the main branch root.
