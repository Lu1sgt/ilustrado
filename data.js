const ARCHIVE_ITEMS = [
  {
    id: "crispin-salvador",
    title: "Crispin Salvador",
    category: "Characters",
    section: "Prologue – Epilogue",
    summary:
      "Acclaimed yet polarizing expatriate Filipino writer whose supposed drowning in the Hudson River and missing manuscript *The Bridges Ablaze* drive the novel's central mystery—until the Epilogue reverses who wrote whose story.",
    analysis:
      "Crispin embodies the tension between satirical rage and personal regret. Though feared as a ruthless chronicler of Philippine elites and hypocrisy, his final act—burning *The Bridges Ablaze* and writing a redemptive narrative centered on Miguel—shifts his arc from bitterness to compassion.",
    highlights: [
      "Former sugar-baron son from Negros and Columbia University mentor to Miguel",
      "1960s activist and NPA mountain fighter after the murder of Petra Chingson",
      "Revealed in the Epilogue as the author crafting Miguel's story after Miguel's drowning"
    ]
  },
  {
    id: "miguel-syjuco",
    title: "Miguel Syjuco",
    category: "Characters",
    section: "Prologue – Chapter 10 (and Epilogue)",
    summary:
      "Crispin's Columbia research assistant who travels to Manila in late 2002 to research Crispin's biography, track down the mysterious 'Dulcinea,' and confront his own past failures.",
    analysis:
      "Raised in exile by his political grandparents ('Grapes' and 'Granma') after losing his parents in a plane crash, Miguel struggles with detachment and guilt over abandoning his young daughter. His rescue of two children during the Pasig flood marks a turning point toward responsibility.",
    highlights: [
      "Navigates Manila's political unrest, blackouts, and elite circles in 2002",
      "Rescues two children from a floating ice cream cart during the flood and munitions blast",
      "Reconciles with his grandparents in Forbes Park before traveling toward La Isla Dulcinea"
    ]
  },
  {
    id: "sadie-gonzales",
    title: "Sadie Gonzales",
    category: "Characters",
    section: "Chapters 5 – 9",
    summary:
      "A sharp-tongued Ateneo student writing her thesis on Crispin Salvador who becomes Miguel's guide into Manila's upper-class social circle and late-night party scene.",
    analysis:
      "Sadie bridges academic interest in Crispin with the contradictions of wealthy Manila youth—witty and observant yet restless and entangled in family expectations.",
    highlights: [
      "Hosts Miguel at her family's dinner table in Dasmariñas Village",
      "Connects Miguel's search for Dulcinea to her mother's former teacher, Miss Florentina",
      "Drives Miguel through the storm and floodwaters during the Edsa 5 unrest"
    ]
  },
  {
    id: "miss-florentina",
    title: "Miss Florentina",
    category: "Characters",
    section: "Chapters 6 – 7",
    summary:
      "An eccentric, ninety-five-year-old former photography teacher at Assumption who mentored a young Crispin and gives Miguel a crucial clue about Dulcinea.",
    analysis:
      "Speaking in fragments of poetry, memory, and sharp insight, Miss Florentina acts as a living bridge between past generations and Miguel's quest.",
    highlights: [
      "Points Miguel toward the Lingayen Gulf and a hooded figure in Juan Luna's *Spoliarium*",
      "Warns that clinging to anger and distance prevents genuine change"
    ]
  },
  {
    id: "lena-salvador",
    title: "Lena Salvador",
    category: "Characters",
    section: "Recurring across Crispin's biography",
    summary:
      "Crispin's estranged wife, whose long shadow shapes his private life and complicates the public legend of the great writer.",
    analysis:
      "Lena's presence in the novel exposes the gap between Crispin's public brilliance and his failures as a husband. The marriage becomes another 'nested story'—part memoir, part accusation—showing how those closest to a celebrated figure rarely control how they are remembered.",
    highlights: [
      "Represents the domestic cost of Crispin's obsession with art and nation",
      "Her absence haunts Crispin's later writing and Miguel's reconstruction of his life"
    ]
  },
  {
    id: "grapes-and-granma",
    title: "Grandpa \"Grapes\" & Granma",
    category: "Characters",
    section: "Chapters 1, 10",
    summary:
      "Miguel's grandparents, veteran political exiles who raised him in the United States and now live in Forbes Park, embodying both old-money privilege and stubborn idealism.",
    analysis:
      "Grapes and Granma anchor Miguel's sense of family and national identity. Their bickering, nostalgia, and gradual frailty ground the novel's political satire in intimate, generational grief.",
    highlights: [
      "Raised Miguel after his parents died in a plane crash",
      "Their Forbes Park household becomes a stage for reconciliation and memory",
      "Their stories connect the Marcos-era exile generation to Miguel's rootless present"
    ]
  },
  {
    id: "nuredin-bansamoro",
    title: "Nuredin Bansamoro",
    category: "Characters",
    section: "Recurring — Manila political circles",
    summary:
      "A Muslim separatist figure and former comrade of Crispin's activist years, drawn into the novel's web of political compromise and unfinished revolution.",
    analysis:
      "Nuredin dramatizes the fate of revolutionary ideals after decades of corruption and violence. His relationship with Crispin shows how former allies can become reminders of betrayed causes rather than sources of solidarity.",
    highlights: [
      "One of Crispin's old political contacts from his NPA period",
      "His presence pressures the novel's characters to confront the cost of compromise"
    ]
  },
  {
    id: "president-estregan",
    title: "President Fernando V. Estregan",
    category: "Characters",
    section: "Political backdrop, Chapters 8 – 10",
    summary:
      "The novel's fictional Philippine president, a scandal-plagued populist whose misrule fuels the Edsa 5 protests and the chaos engulfing Manila.",
    analysis:
      "Estregan is a satirical composite of post-Marcos Philippine leaders. Through him, Syjuco mocks the performative morality of politics, where religious language and patronage coexist with corruption and violence.",
    highlights: [
      "His government presides over blackouts, unrest, and the munitions-factory disaster",
      "Serves as the target of Crispin's satirical novel *The Enlightened*'s political critique"
    ]
  },
  {
    id: "boy-bastos",
    title: "Boy Bastos",
    category: "Characters",
    section: "Recurring — Manila media and blog culture",
    summary:
      "A provocatively named blogger and media figure whose gossip and commentary blur the line between journalism, entertainment, and political spin.",
    analysis:
      "Boy Bastos represents the novel's interest in rumor as a form of history. In a world of competing front pages and online chatter, truth becomes something assembled from fragments rather than delivered by authority.",
    highlights: [
      "Illustrates the novel's critique of sensational media culture",
      "Connects the private scandal of writers to the public appetite for gossip"
    ]
  },
  {
    id: "dulcinea",
    title: "Dulcinea",
    category: "Characters",
    section: "Dulcinea's Trail — Chapters 7 – 10",
    summary:
      "The elusive figure Miguel pursues across Manila and toward the Lingayen Gulf, whose identity keeps shifting between a real woman, a literary invention, and a personal obsession.",
    analysis:
      "Dulcinea functions as both quest object and mirror. Miguel's search for her exposes his habit of chasing idealized women instead of facing the people he has already hurt—especially his daughter and his grandparents.",
    highlights: [
      "Her trail links Crispin's biography with Miguel's own family history",
      "The name echoes Quixote's imagined lady, underscoring the novel's theme of self-made fictions",
      "Leads Miguel to La Isla Dulcinea and the three empty manuscript boxes"
    ]
  },
  {
    id: "the-enlightened",
    title: "*The Enlightened*",
    category: "Nested Works",
    section: "Fictional Novel by Crispin Salvador",
    summary:
      "A historical novel by Crispin following his grandfather Cristo across the Philippine-American War and the post-war shift toward Americanization.",
    analysis:
      "Through Cristo's reflections after defeat, the excerpt examines how historical trauma, shifting alliances, and colonial aspirations shape family legacy.",
    highlights: [
      "Set around the 1896–post-war transition in Negros and the Philippines",
      "Explores themes of defeat, survival, and generational ambition"
    ]
  },
  {
    id: "manila-noir-and-kaputol",
    title: "*Manila Noir* & *Ay Naku!* (*Kaputol* Trilogy)",
    category: "Nested Works",
    section: "Fictional Works by Crispin Salvador",
    summary:
      "Excerpts from Crispin's crime/noir fiction and his folklore-inspired *Kaputol* trilogy, featuring young Dulcé and the kapre figure Kap.",
    analysis:
      "These embedded stories echo the novel's outer plot—contrasting vengeance and cynical power with imagination, belief, and the desire to write 'a book of possibilities.'",
    highlights: [
      "Dulcé's lessons with Kap center on belief, letting go of fear, and imagining possibilities",
      "Mirrors the novel's metafictional structure of stories nested inside stories"
    ]
  },
  {
    id: "the-bridges-ablaze",
    title: "*The Bridges Ablaze*",
    category: "Nested Works",
    section: "Crispin's Missing Masterpiece",
    summary:
      "Crispin's long-rumored final manuscript, believed to be a tell-all exposé of Philippine politics and the source of his posthumous fame—until the Epilogue reveals he destroyed it.",
    analysis:
      "The manuscript is the novel's ultimate MacGuffin: the promise of a scandalous truth that never arrives. By burning it, Crispin chooses people over reputation, and Syjuco refuses the neat satisfaction of a political reveal.",
    highlights: [
      "Drives the mystery of Crispin's death and Miguel's investigation",
      "Its three black boxes on La Isla Dulcinea are found empty",
      "Its destruction redirects the novel from exposé toward elegy"
    ]
  },
  {
    id: "edsa-5-and-burning-river",
    title: "Edsa 5, Floods & The Burning Pasig",
    category: "Plot & Setting",
    section: "Chapters 8 – 10",
    summary:
      "During a severe typhoon, blackout, and mass protests ('Edsa 5'), the Philippines First munitions factory explodes, igniting fireworks and setting parts of the Pasig River ablaze.",
    analysis:
      "The political chaos and literal fire and flood serve as a crucible where satire gives way to urgent moral choice and competing newspaper versions of history.",
    highlights: [
      "Contradictory front pages in Chapter 10 highlight unreliable media and political spin",
      "Miguel leaves the stalled car to pull two stranded children from the rising flood"
    ]
  },
  {
    id: "la-isla-dulcinea-and-empty-boxes",
    title: "La Isla Dulcinea & The Three Empty Boxes",
    category: "Plot & Setting",
    section: "Chapter 10 & Epilogue",
    summary:
      "Miguel's journey to the comma-shaped seventh island in the Lingayen Gulf ends at a quiet house containing three black manuscript boxes—all empty.",
    analysis:
      "Instead of delivering a sensational political exposé, the empty boxes strip away obsession with secret manuscripts and force attention back to human connection and memory.",
    highlights: [
      "Culminates in a reflection on everyday moments, memory, and mortality",
      "Prepares the reader for the Epilogue's revelation about Crispin burning the manuscript"
    ]
  },
  {
    id: "accountability-forgiveness-and-hope",
    title: "Accountability, Forgiveness & Hope",
    category: "Themes & Values",
    section: "Whole Novel",
    summary:
      "Beneath its sharp satire of corruption, hypocrisy, and diaspora exile, *Ilustrado* argues for owning personal failings, reconciling with family, and choosing hope over bitterness.",
    analysis:
      "Both Miguel's choice to step into the flood and return to his grandparents and Crispin's choice to burn his vengeful book affirm that healing requires letting go of grievance.",
    highlights: [
      "Critiques political compromise and self-righteousness across social classes",
      "Values active empathy, familial repair, and creative renewal"
    ]
  },
  {
    id: "metafiction-and-nested-narratives",
    title: "Metafiction & Stories Within Stories",
    category: "Themes & Values",
    section: "Whole Novel",
    summary:
      "Syjuco layers memoir, biography, excerpts, blog posts, and invented criticism so that no single voice fully owns the truth of Crispin Salvador's life.",
    analysis:
      "The novel's form enacts its argument: history and identity are assembled from competing narratives. Readers must weigh Crispin's fiction, Miguel's grief, and the media's spin without a reliable narrator to settle the account.",
    highlights: [
      "Crispin's novels mirror and comment on the frame narrative",
      "The Epilogue re-frames everything readers thought they knew about authorship",
      "Reflects the Great Books theme of how stories shape memory and nationhood"
    ]
  },
  {
    id: "exile-and-diaspora",
    title: "Exile, Diaspora & Homecoming",
    category: "Themes & Values",
    section: "Whole Novel",
    summary:
      "Miguel's return to Manila after years abroad exposes the double estrangement of the diaspora—too foreign for the homeland, too Filipino to feel at home elsewhere.",
    analysis:
      "Exile in *Ilustrado* is both political and emotional. Miguel can critique the Philippines precisely because he left it, but that distance also makes genuine belonging difficult until he chooses to act.",
    highlights: [
      "Contrasts Manhattan academic life with Manila's heat, noise, and inequality",
      "Grapes and Granma's exile generation passes its unresolved longing to Miguel",
      "Homecoming becomes an ethical test rather than a sentimental reunion"
    ]
  }
];
