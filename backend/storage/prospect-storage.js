import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.join(__dirname, "prospects.json");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function ensureFile() {
  if (!fs.existsSync(storagePath)) {
    fs.writeFileSync(storagePath, "[]", "utf8");
  }
}

export function readProspects() {
  ensureFile();
  const raw = fs.readFileSync(storagePath, "utf8");
  const parsed = JSON.parse(raw || "[]");
  return Array.isArray(parsed) ? parsed.map(clone) : [];
}

export function writeProspects(items) {
  ensureFile();
  fs.writeFileSync(storagePath, JSON.stringify(items, null, 2) + "\n", "utf8");
}

export function getStoragePath() {
  return storagePath;
}
