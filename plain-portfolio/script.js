// Renders the skills / hobbies / projects grids from data.js.
// Keeping this separate from data.js means the markup for a "card"
// only lives in one place, no matter how many items are in the list.

const ICONS = {
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  gamepad: '<path d="M6 12h4m-2-2v4"/><path d="M15 11h.01M18 13h.01"/><path d="M17.3 6H6.7a4 4 0 0 0-3.9 3.2l-1 5A3 3 0 0 0 4.7 18a3 3 0 0 0 2.4-1.2l1.1-1.4a2 2 0 0 1 1.6-.8h4.4a2 2 0 0 1 1.6.8l1.1 1.4a3 3 0 0 0 2.4 1.2 3 3 0 0 0 2.9-3.8l-1-5A4 4 0 0 0 17.3 6Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
};

function icon(name, size = 21) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24">${ICONS[name] || ""}</svg>`;
}

function renderCardGrid(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
      <article class="skill-card">
        <div class="skill-icon">${icon(item.icon)}</div>
        <div>
          <strong>${item.name}</strong>
          <span>${item.level || item.description}</span>
        </div>
      </article>`
    )
    .join("");
}

function renderProjects(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (project, index) => `
      <article class="project-card">
        <div class="project-top">
          <span class="project-number">0${index + 1}</span>
          ${icon("arrow", 20)}
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-row">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
}

renderCardGrid("skills-grid", skills);
renderCardGrid("hobbies-grid", hobbies);
renderProjects("projects-grid", projects);
