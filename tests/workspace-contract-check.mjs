import { sampleWorkspace } from "../shared/sample-data.js";
import { validateWorkspacePayload } from "../shared/contracts.js";

const errors = validateWorkspacePayload(sampleWorkspace);
if (errors.length) {
  console.error("WORKSPACE_CONTRACT_INVALID");
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("WORKSPACE_CONTRACT_OK");
