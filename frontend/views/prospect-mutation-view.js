import { createProspect, patchProspect } from "../api/workspace-api.js";

export function attachMutationView(root, baseUrl) {
  root.insertAdjacentHTML(
    "beforeend",
    `
      <section class="panel">
        <h2>Create or patch a prospect</h2>
        <p class="section-copy">This is the smallest useful mutation surface: enough to prove the canonical fields can be saved without collapsing back into one overloaded status.</p>
        <div class="field-grid">
          <label>Prospect id<input id="wf-id" placeholder="id" value="prospect_new_demo" /></label>
          <label>Business name<input id="wf-name" placeholder="businessName" value="Demo Landscape Co" /></label>
          <label>Prospect status<input id="wf-prospect-status" placeholder="prospectStatus" value="New Lead" /></label>
          <label>Outreach status<input id="wf-outreach-status" placeholder="outreachStatus" value="draft" /></label>
          <label>Priority<input id="wf-priority" placeholder="priority" value="Medium" /></label>
          <label>Next action<input id="wf-next-action" placeholder="nextAction" value="Review website" /></label>
          <label>Next action due<input id="wf-next-action-due" placeholder="nextActionDue" value="2026-03-26" /></label>
        </div>
        <div class="actions" style="margin-top:14px;">
          <button id="wf-create" class="primary">Create prospect</button>
          <button id="wf-patch" class="secondary">Patch prospect</button>
        </div>
        <div id="wf-mutation-result" class="result">Waiting for action…</div>
      </section>
    `
  );

  const result = document.getElementById("wf-mutation-result");
  const getPayload = () => ({
    id: document.getElementById("wf-id").value,
    businessName: document.getElementById("wf-name").value,
    prospectStatus: document.getElementById("wf-prospect-status").value,
    outreachStatus: document.getElementById("wf-outreach-status").value || null,
    priority: document.getElementById("wf-priority").value,
    nextAction: document.getElementById("wf-next-action").value,
    nextActionDue: document.getElementById("wf-next-action-due").value || null,
  });

  document.getElementById("wf-create").onclick = async () => {
    try {
      const saved = await createProspect(baseUrl, getPayload());
      result.textContent = JSON.stringify(saved, null, 2);
    } catch (error) {
      result.textContent = error.message;
    }
  };

  document.getElementById("wf-patch").onclick = async () => {
    try {
      const payload = {
        prospectStatus: document.getElementById("wf-prospect-status").value,
        outreachStatus: document.getElementById("wf-outreach-status").value || null,
        priority: document.getElementById("wf-priority").value,
        nextAction: document.getElementById("wf-next-action").value,
        nextActionDue: document.getElementById("wf-next-action-due").value || null,
      };
      const saved = await patchProspect(baseUrl, document.getElementById("wf-id").value, payload);
      result.textContent = JSON.stringify(saved, null, 2);
    } catch (error) {
      result.textContent = error.message;
    }
  };
}
