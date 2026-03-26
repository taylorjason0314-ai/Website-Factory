# Website Factory Implementation Audit — 2026-03-25

## Scope
Audit the active implementation cards and make one concrete forward move.

## Current repo reality
This repo currently holds docs and data artifacts only.
No frontend/backend source files were present in the checked project tree during this audit pass.

## Concrete step executed
Created:
- `docs/workspace-contract.json`

Purpose:
- lock the aggregated `GET /prospects/:id/workspace` payload shape
- lock the separate enums for:
  - prospect status
  - outreach status
  - priority
- lock score storage/display as `0–100`

## Schema decisions locked
### Prospect status
- `New Lead`
- `Website Reviewed`
- `Qualified`
- `Mock Ready`
- `Outreach Ready`
- `Contacted`
- `Follow-Up`
- `Interested`
- `Won`
- `Lost`

### Outreach status
- `draft`
- `sent`
- `replied`
- `closed`

### Priority
- `High`
- `Medium`
- `Low`

### Workspace payload sections
- `prospect`
- `review`
- `concept`
- `outreachRecords`
- `tasks`

## Card-by-card audit outcome
### wf-task-10 — Frontend state/type alignment
- movement: state contract is now explicit in `docs/workspace-contract.json`
- note: no actual frontend code was present in the repo tree to edit during this pass

### wf-task-11 — Backend enums/validation alignment
- movement: enum decisions are now concretely locked in `docs/workspace-contract.json`
- note: no backend code was present in the repo tree to edit during this pass

### wf-task-12 — Aggregated workspace route implementation
- movement: route response contract is now concretely defined in `docs/workspace-contract.json`
- note: implementation is still pending because the app source was not present in this repo tree

### wf-task-13 — Workflow semantic correction
- movement: semantics were hardened in the contract and kept separate by type

## Honest blockers
- active repo tree does not currently include implementation source for frontend/backend route wiring
- that means today’s movement is contract-level, not runtime-level
