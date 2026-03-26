import { validateProspect, validateWorkspacePayload } from "../../shared/contracts.js";

export function assertProspect(prospect) {
  const errors = validateProspect(prospect);
  if (errors.length) {
    const error = new Error(`Prospect validation failed: ${errors.join('; ')}`);
    error.statusCode = 400;
    throw error;
  }
  return prospect;
}

export function assertWorkspace(payload) {
  const errors = validateWorkspacePayload(payload);
  if (errors.length) {
    const error = new Error(`Workspace validation failed: ${errors.join('; ')}`);
    error.statusCode = 400;
    throw error;
  }
  return payload;
}
