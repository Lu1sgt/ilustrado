const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.getElementById("filterButtons");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");

const modal = document.getElementById("detailModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalSummary = document.getElementById("modalSummary");
const modalAnalysis = document.getElementById("modalAnalysis");
const modalHighlights = document.getElementById("modalHighlights");

const categories = ["All", ...new Set(ARCHIVE_ITEMS.map((item) => item.category))];
let activeCategory = "All";
let searchQuery = "";
let lastFocusedElement = null;

function formatMarkdownItalics(text) {
  return text.replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function renderFilterButtons() {
  filterButtons.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn${category === activeCategory ? " active" : ""}`;
    btn.textContent = category;
    btn.setAttribute("aria-pressed", category === activeCategory ? "true" : "false");
    btn.addEventListener("click", () => {
      activeCategory = category;
      renderFilterButtons();
      renderCards();
    });
    filterButtons.appendChild(btn);
  });
}

function getFilteredItems() {
  const query = searchQuery.trim().toLowerCase();
  return ARCHIVE_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    if (!matchesCategory) return false;
    if (!query) return true;

    const haystack = [
      item.title,
      item.category,
      item.section,
      item.summary,
      item.analysis,
      ...item.highlights
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

function renderCards() {
  const filtered = getFilteredItems();
  resultsCount.textContent = `Showing ${filtered.length} of ${ARCHIVE_ITEMS.length} entries`;
  cardsGrid.innerHTML = "";

  if (filtered.length === 0) {
    cardsGrid.innerHTML = "<p>No entries match your current filter or search.</p>";
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div>
        <p class="badge">${item.category}</p>
        <h2>${formatMarkdownItalics(item.title)}</h2>
        <p class="card-meta">${item.section}</p>
        <p class="card-summary">${formatMarkdownItalics(item.summary)}</p>
      </div>
      <button type="button" class="open-btn" data-id="${item.id}">Read Notes</button>
    `;

    card.querySelector(".open-btn").addEventListener("click", (event) => openModal(item, event.currentTarget));
    cardsGrid.appendChild(card);
  });
}

function openModal(item, trigger) {
  lastFocusedElement = trigger || document.activeElement;
  modalCategory.textContent = item.category;
  modalTitle.innerHTML = formatMarkdownItalics(item.title);
  modalMeta.textContent = item.section;
  modalSummary.innerHTML = formatMarkdownItalics(item.summary);
  modalAnalysis.innerHTML = formatMarkdownItalics(item.analysis);
  modalHighlights.innerHTML = "";

  item.highlights.forEach((point) => {
    const li = document.createElement("li");
    li.innerHTML = formatMarkdownItalics(point);
    modalHighlights.appendChild(li);
  });

  modal.hidden = false;
  closeModalBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderCards();
});

closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

renderFilterButtons();
renderCards();
