import { sampleProspect } from "../../shared/sample-data.js";

export function getProspectById(id) {
  if (id === sampleProspect.id) return sampleProspect;
  return null;
}
