import { createProspect, getProspectById, getWorkspaceByProspectId, updateProspect } from "../models/prospect-store.js";
import { assertProspect, assertWorkspace } from "../validation/workspace-validation.js";
import { parseJsonBody, validateProspectPayload } from "../validation/prospect-payload-validation.js";

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
}

export function handleGetProspect(id, res) {
  const prospect = getProspectById(id);
  if (!prospect) return json(res, 404, { error: "Prospect not found" });
  assertProspect(prospect);
  return json(res, 200, prospect);
}

export async function handleCreateProspect(req, res) {
  const payload = validateProspectPayload(await parseJsonBody(req));
  const created = createProspect(payload);
  assertProspect(created);
  return json(res, 201, created);
}

export async function handlePatchProspect(id, req, res) {
  const payload = validateProspectPayload(await parseJsonBody(req), { partial: true });
  const updated = updateProspect(id, payload);
  if (!updated) return json(res, 404, { error: "Prospect not found" });
  assertProspect(updated);
  return json(res, 200, updated);
}

export function handleGetWorkspace(id, res) {
  const workspace = getWorkspaceByProspectId(id);
  if (!workspace) return json(res, 404, { error: "Workspace not found" });
  assertWorkspace(workspace);
  return json(res, 200, workspace);
}
