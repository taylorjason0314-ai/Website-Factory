import { prospectStatusValues, outreachStatusValues, priorityValues, isValidIsoDateLike } from "../../shared/contracts.js";

function fail(message, statusCode = 400) {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}

export function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(Object.assign(new Error("Invalid JSON body"), { statusCode: 400 }));
      }
    });
    req.on("error", reject);
  });
}

export function validateProspectPayload(payload, { partial = false } = {}) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    fail("Payload must be an object");
  }
  if ("status" in payload) {
    fail("plain overloaded status is not allowed; use prospectStatus and outreachStatus");
  }

  const allowedKeys = [
    "id",
    "businessName",
    "prospectStatus",
    "outreachStatus",
    "totalScore",
    "priority",
    "nextAction",
    "nextActionDue",
  ];

  for (const key of Object.keys(payload)) {
    if (!allowedKeys.includes(key)) {
      fail(`Unknown field: ${key}`);
    }
  }

  if (!partial) {
    for (const key of ["id", "businessName", "prospectStatus", "priority"]) {
      if (!(key in payload)) fail(`${key} is required`);
    }
  }

  if ("id" in payload && (typeof payload.id !== "string" || !payload.id.trim())) {
    fail("id must be non-empty text");
  }
  if ("businessName" in payload && (typeof payload.businessName !== "string" || !payload.businessName.trim())) {
    fail("businessName must be non-empty text");
  }
  if ("prospectStatus" in payload && !prospectStatusValues.includes(payload.prospectStatus)) {
    fail("prospectStatus must be a valid pipeline stage");
  }
  if ("outreachStatus" in payload && payload.outreachStatus != null && !outreachStatusValues.includes(payload.outreachStatus)) {
    fail("outreachStatus must be a valid outreach state");
  }
  if ("priority" in payload && payload.priority != null && !priorityValues.includes(payload.priority)) {
    fail("priority must be High, Medium, or Low");
  }
  if ("nextAction" in payload && payload.nextAction != null && typeof payload.nextAction !== "string") {
    fail("nextAction must remain task-like text");
  }
  if ("nextActionDue" in payload && !isValidIsoDateLike(payload.nextActionDue)) {
    fail("nextActionDue must be null or a date/datetime string");
  }
  if ("totalScore" in payload && payload.totalScore != null) {
    if (!Number.isInteger(payload.totalScore) || payload.totalScore < 0 || payload.totalScore > 100) {
      fail("totalScore must be an integer between 0 and 100");
    }
  }

  return payload;
}
