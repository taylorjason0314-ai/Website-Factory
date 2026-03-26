function card(label, value) {
  return `
    <div class="metric">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value ?? "—"}</div>
    </div>
  `;
}

function listBlock(title, items) {
  if (!items || !items.length) {
    return `
      <div class="list-card">
        <div class="list-label">${title}</div>
        <div>No entries yet.</div>
      </div>
    `;
  }
  return `
    <div class="list-card">
      <div class="list-label">${title}</div>
      <div class="stack">
        ${items.map((item) => `<div>${item}</div>`).join("")}
      </div>
    </div>
  `;
}

export function renderWorkspace(root, workspace) {
  const { prospect, review, concept, outreachRecords, tasks, timelineSummary = [] } = workspace;

  root.innerHTML = `
    <div class="grid two">
      <section class="panel">
        <h2>${prospect.businessName}</h2>
        <p class="section-copy">Current workspace scaffold for one lead. This page is intentionally focused on the separated decision fields instead of pretending to be a full CRM.</p>
        <div class="pill-row">
          <div class="pill"><strong>Pipeline</strong> ${prospect.prospectStatus}</div>
          <div class="pill"><strong>Outreach</strong> ${prospect.outreachStatus ?? "—"}</div>
          <div class="pill"><strong>Priority</strong> ${prospect.priority ?? "—"}</div>
        </div>
        <div class="kpi-grid">
          ${card("Next action", prospect.nextAction)}
          ${card("Action due", prospect.nextActionDue)}
          ${card("Total score", prospect.totalScore ?? "—")}
          ${card("Workspace record", prospect.id)}
        </div>
      </section>

      <section class="panel">
        <h2>Review summary</h2>
        <p class="section-copy">A compact mobile summary of the active review instead of raw debug overflow.</p>
        <div class="stack">
          ${listBlock("Top issues", review?.topIssues || [])}
          ${listBlock("Concept sections", concept?.sections || [])}
          ${listBlock("Timeline", timelineSummary || [])}
        </div>
      </section>
    </div>

    <section class="panel">
      <h2>Outreach + task snapshot</h2>
      <div class="grid two">
        <div class="stack">
          ${listBlock("Outreach records", (outreachRecords || []).map((record) => `${record.channel ?? "channel"} · ${record.status} · ${record.angle ?? "no angle yet"}`))}
        </div>
        <div class="stack">
          ${listBlock("Tasks", (tasks || []).map((task) => `${task.done ? "Done" : "Open"} · ${task.title}`))}
        </div>
      </div>
      <details>
        <summary>Show raw workspace JSON</summary>
        <pre>${JSON.stringify(workspace, null, 2)}</pre>
      </details>
    </section>
  `;
}
