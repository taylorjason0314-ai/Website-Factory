import { renderFieldList } from "../components/field-list.js";

export function renderWorkspace(root, workspace) {
  const lines = renderFieldList(workspace.prospect);
  root.innerHTML = `
    <h1>Website Factory Workspace</h1>
    <p>Minimal workspace-first MVP scaffold.</p>
    <ul>
      ${lines.map((line) => `<li>${line}</li>`).join("")}
    </ul>
    <pre>${JSON.stringify(workspace, null, 2)}</pre>
  `;
}
