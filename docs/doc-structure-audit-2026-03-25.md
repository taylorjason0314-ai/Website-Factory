# Website Factory Doc Structure Audit — 2026-03-25

## Goal
Reduce Website Factory doc drift and reorganize the repo into 3 clean buckets only:
1. source of truth
2. implementation artifacts
3. business / prospecting artifacts

This audit identifies canonical owners, overlapping files, and what should be trimmed or treated as reference-only.

---

## A. Current document inventory

### Source of truth
- `README.md` — canonical project identity, MVP scope, current implementation lane, top-level rules
- `CONVERSATION_STATE.md` — canonical current project state / handoff truth
- `docs/mvp-alignment.md` — canonical implementation rules for MVP semantics, scoring, priority, route strategy
- `docs/workflow-contract-2026-03-25.md` — canonical workflow semantics contract
- `docs/workspace-contract.json` — canonical workspace payload contract
- `DEPLOYMENT.md` — deployment/reference owner if runtime codebase is attached later

### Implementation artifacts
- `docs/implementation-checklist-2026-03-25.md` — canonical implementation sequence
- `docs/frontend-semantics-audit-2026-03-25.md` — audit/reference artifact
- `docs/backend-semantics-audit-2026-03-25.md` — audit/reference artifact
- `docs/workspace-route-spec-2026-03-25.md` — route-specific reference artifact
- `docs/implementation-audit-2026-03-25.md` — audit/reference artifact
- `docs/execution-plan.md` — implementation summary/reference artifact
- `docs/screen-specs.md` — UI/reference artifact

### Business / prospecting artifacts
- `docs/website-upgrade-playbook.md` — business playbook
- `docs/offer-stack-v1.md` — offer packaging
- `docs/outreach-templates.md` — outreach messaging
- `docs/prospect-scoring-rubric-v1.md` — scoring lens
- `docs/san-jose-landscaping-plan.md` — wedge/market-entry plan
- `docs/prospects-san-jose-landscaping.csv` — raw prospect data
- `docs/shortlist-san-jose-landscaping-v1.md` — curated shortlist

### Redundant / overlapping
- `docs/execution-plan.md` — overlaps with README + CONVERSATION_STATE + implementation checklist
- `docs/screen-specs.md` — overlaps partially with mvp-alignment + workspace contract
- `docs/workspace-route-spec-2026-03-25.md` — overlaps with workspace-contract.json
- `docs/implementation-audit-2026-03-25.md` — overlaps with checklist and audits
- `docs/frontend-semantics-audit-2026-03-25.md` — overlaps with workflow contract/checklist
- `docs/backend-semantics-audit-2026-03-25.md` — overlaps with workflow contract/checklist

---

## B. Canonical ownership

### Workflow semantics
Owner:
- `docs/workflow-contract-2026-03-25.md`

### Workspace payload contract
Owner:
- `docs/workspace-contract.json`

### Implementation sequence
Owner:
- `docs/implementation-checklist-2026-03-25.md`

### MVP scope
Owner:
- `README.md`
- implementation rule detail in `docs/mvp-alignment.md`

### Current project state
Owner:
- `CONVERSATION_STATE.md`

### Business context
Owner:
- `README.md` for top-level context
- `docs/website-upgrade-playbook.md` for business/prospecting playbook

---

## C. Redundancy map

### 1. Workflow semantics duplicated
Files involved:
- `README.md`
- `CONVERSATION_STATE.md`
- `docs/mvp-alignment.md`
- `docs/workflow-contract-2026-03-25.md`
- `docs/execution-plan.md`
- `docs/screen-specs.md`

Winner:
- `docs/workflow-contract-2026-03-25.md`

Losing files should become:
- `README.md` -> brief reference only
- `CONVERSATION_STATE.md` -> brief reference only
- `docs/mvp-alignment.md` -> implementation-rule reference only
- `docs/execution-plan.md` -> reference only
- `docs/screen-specs.md` -> UI reference only

### 2. Workspace payload contract duplicated
Files involved:
- `docs/workspace-contract.json`
- `docs/workspace-route-spec-2026-03-25.md`
- `docs/mvp-alignment.md`
- `README.md`

Winner:
- `docs/workspace-contract.json`

Losing files should become:
- `docs/workspace-route-spec-2026-03-25.md` -> explanatory reference
- `docs/mvp-alignment.md` -> reference note only
- `README.md` -> reference note only

### 3. Implementation sequence duplicated
Files involved:
- `README.md`
- `CONVERSATION_STATE.md`
- `docs/execution-plan.md`
- `docs/implementation-audit-2026-03-25.md`
- `docs/implementation-checklist-2026-03-25.md`

Winner:
- `docs/implementation-checklist-2026-03-25.md`

Losing files should become:
- `README.md` -> current high-level note only
- `CONVERSATION_STATE.md` -> current state note only
- `docs/execution-plan.md` -> reference summary
- `docs/implementation-audit-2026-03-25.md` -> audit/history reference

### 4. MVP scope duplicated
Files involved:
- `README.md`
- `docs/mvp-alignment.md`
- `docs/screen-specs.md`

Winner:
- `README.md` for scope statement
- `docs/mvp-alignment.md` for rule detail

Losing file should become:
- `docs/screen-specs.md` -> UI reference only

---

## D. Recommended clean structure

### 1. Source of truth
- `README.md`
- `CONVERSATION_STATE.md`
- `docs/mvp-alignment.md`
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`

### 2. Implementation artifacts
- `docs/implementation-checklist-2026-03-25.md`
- `docs/execution-plan.md`
- `docs/screen-specs.md`
- `docs/workspace-route-spec-2026-03-25.md`
- `docs/frontend-semantics-audit-2026-03-25.md`
- `docs/backend-semantics-audit-2026-03-25.md`
- `docs/implementation-audit-2026-03-25.md`

### 3. Business / prospecting artifacts
- `docs/website-upgrade-playbook.md`
- `docs/offer-stack-v1.md`
- `docs/outreach-templates.md`
- `docs/prospect-scoring-rubric-v1.md`
- `docs/san-jose-landscaping-plan.md`
- `docs/prospects-san-jose-landscaping.csv`
- `docs/shortlist-san-jose-landscaping-v1.md`

Durable rule:
- source-of-truth docs define meaning
- implementation artifacts explain execution against that meaning
- business/prospecting artifacts define market/offer/sourcing context

---

## E. Changes made now

### README.md
- clarified canonical owner links instead of repeating all semantics inline
- positioned workflow contract, workspace contract, and implementation checklist as the owning docs for their concepts

### CONVERSATION_STATE.md
- clarified what this file owns: current state and handoff truth only
- pointed semantics/contracts/implementation sequence to their canonical files

### docs/mvp-alignment.md
- clarified that it owns MVP implementation rules, not every repeated narrative explanation
- pointed workflow semantics and workspace payload to their canonical owner files

### docs/workflow-contract-2026-03-25.md
- clarified canonical ownership for workflow semantics

### docs/workspace-contract.json
- kept as the single workspace payload contract owner

### docs/implementation-checklist-2026-03-25.md
- clarified canonical ownership for implementation sequence

### files intentionally not deleted
No files were deleted in this pass.
Reason:
- current repo is still docs-only
- keeping audit/reference artifacts is safer until the real runtime codebase is attached
- overlap was reduced by ownership clarification and reference-only positioning instead of destructive cleanup
