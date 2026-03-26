import { sampleWorkspace } from "../../shared/sample-data.js";

export function getWorkspaceByProspectId(id) {
  if (id === sampleWorkspace.prospect.id) return sampleWorkspace;
  return null;
}
