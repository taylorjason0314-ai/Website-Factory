import { readProspects, writeProspects } from "../storage/prospect-storage.js";
import { sampleWorkspace } from "../../shared/sample-data.js";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function listProspects() {
  return readProspects().map(clone);
}

export function getProspectById(id) {
  const items = readProspects();
  const found = items.find((item) => item.id === id);
  return found ? clone(found) : null;
}

export function createProspect(prospect) {
  const items = readProspects();
  if (items.some((item) => item.id === prospect.id)) {
    const error = new Error("Prospect with that id already exists");
    error.statusCode = 409;
    throw error;
  }
  items.push(clone(prospect));
  writeProspects(items);
  return clone(prospect);
}

export function updateProspect(id, patch) {
  const items = readProspects();
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const updated = { ...items[index], ...patch, id: items[index].id };
  items[index] = clone(updated);
  writeProspects(items);
  return clone(updated);
}

export function getWorkspaceByProspectId(id) {
  const prospect = getProspectById(id);
  if (!prospect) return null;
  if (id === sampleWorkspace.prospect.id) {
    const workspace = clone(sampleWorkspace);
    workspace.prospect = prospect;
    return workspace;
  }
  return {
    prospect,
    review: null,
    concept: null,
    outreachRecords: [],
    tasks: [],
    timelineSummary: ["Prospect persisted in scaffold storage"],
  };
}
