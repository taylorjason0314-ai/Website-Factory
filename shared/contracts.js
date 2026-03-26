export const prospectStatusValues = [
  "New Lead",
  "Website Reviewed",
  "Qualified",
  "Mock Ready",
  "Outreach Ready",
  "Contacted",
  "Follow-Up",
  "Interested",
  "Won",
  "Lost",
];

export const outreachStatusValues = ["draft", "sent", "replied", "closed"];

export const priorityValues = ["High", "Medium", "Low"];

export function isValidIsoDateLike(value) {
  if (value === null || value === undefined || value === "") return true;
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}(?:[T ][^\s]+)?$/.test(value);
}

export function validateProspect(prospect) {
  const errors = [];
  if (!prospect || typeof prospect !== "object") {
    return ["prospect must be an object"];
  }
  if (!("prospectStatus" in prospect)) {
    errors.push("prospect.prospectStatus is required");
  }
  if ("status" in prospect) {
    errors.push("plain overloaded status is not allowed on prospect; use prospectStatus and outreachStatus");
  }
  if (prospect.prospectStatus && !prospectStatusValues.includes(prospect.prospectStatus)) {
    errors.push("prospect.prospectStatus must be a valid pipeline stage");
  }
  if (prospect.outreachStatus != null && !outreachStatusValues.includes(prospect.outreachStatus)) {
    errors.push("prospect.outreachStatus must be a valid outreach state");
  }
  if (prospect.priority != null && !priorityValues.includes(prospect.priority)) {
    errors.push("prospect.priority must be High, Medium, or Low");
  }
  if (prospect.nextAction != null && typeof prospect.nextAction !== "string") {
    errors.push("prospect.nextAction must remain task-like text");
  }
  if (!isValidIsoDateLike(prospect.nextActionDue)) {
    errors.push("prospect.nextActionDue must be null or a date/datetime string");
  }
  return errors;
}

export function validateWorkspacePayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== "object") {
    return ["payload must be an object"];
  }
  for (const key of ["prospect", "review", "concept", "outreachRecords", "tasks"]) {
    if (!(key in payload)) {
      errors.push(`workspace payload missing ${key}`);
    }
  }
  errors.push(...validateProspect(payload.prospect || {}));
  if (payload.outreachRecords && Array.isArray(payload.outreachRecords)) {
    payload.outreachRecords.forEach((record, index) => {
      if (record.status && !outreachStatusValues.includes(record.status)) {
        errors.push(`outreachRecords[${index}].status must be valid`);
      }
    });
  }
  return errors;
}
