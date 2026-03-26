import { loadWorkspace } from "./api/workspace-api.js";
import { renderWorkspace } from "./views/workspace-view.js";
import { attachMutationView } from "./views/prospect-mutation-view.js";

const root = document.getElementById("app");
const status = document.getElementById("status");
const inferredApiBase = `${window.location.protocol}//${window.location.hostname}:4020`;
const baseUrl = window.__WF_API_BASE__ || inferredApiBase;
const prospectId = "prospect_vista_landscape";

async function run() {
  try {
    status.textContent = "Loading workspace…";
    const workspace = await loadWorkspace(baseUrl, prospectId);
    renderWorkspace(root, workspace);
    attachMutationView(root, baseUrl);
    status.textContent = "Workspace loaded.";
  } catch (error) {
    status.textContent = error.message;
  }
}

run();
