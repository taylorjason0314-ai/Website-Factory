import { getProspectById } from "../models/prospect-model.js";
import { getWorkspaceByProspectId } from "../services/workspace-service.js";
import { assertProspect, assertWorkspace } from "../validation/workspace-validation.js";

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

export function handleGetProspect(id, res) {
  const prospect = getProspectById(id);
  if (!prospect) return json(res, 404, { error: "Prospect not found" });
  assertProspect(prospect);
  return json(res, 200, prospect);
}

export function handleGetWorkspace(id, res) {
  const workspace = getWorkspaceByProspectId(id);
  if (!workspace) return json(res, 404, { error: "Workspace not found" });
  assertWorkspace(workspace);
  return json(res, 200, workspace);
}
