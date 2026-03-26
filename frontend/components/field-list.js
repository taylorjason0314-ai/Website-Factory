import { formatField } from "../types/workspace.js";

export function renderFieldList(prospect) {
  return [
    formatField("Prospect Status", prospect.prospectStatus),
    formatField("Outreach Status", prospect.outreachStatus),
    formatField("Priority", prospect.priority),
    formatField("Next Action", prospect.nextAction),
    formatField("Next Action Due", prospect.nextActionDue),
  ];
}
