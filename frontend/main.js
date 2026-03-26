import { loadWorkspace } from "./api/workspace-api.js";
import { renderWorkspace } from "./views/workspace-view.js";

const root = document.getElementById("app");
const status = document.getElementById("status");
const baseUrl = window.__WF_API_BASE__ || "http://127.0.0.1:4010";
const prospectId = "prospect_vista_landscape";

async function run() {
  try {
    status.textContent = "Loading workspace…";
    const workspace = await loadWorkspace(baseUrl, prospectId);
    renderWorkspace(root, workspace);
    status.textContent = "Workspace loaded.";
  } catch (error) {
    status.textContent = error.message;
  }
}

run();
