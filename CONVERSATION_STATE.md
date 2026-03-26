# Website Factory — Conversation State

Last updated: synced after doc-structure duplicate-reduction pass

## What this file is for
Project-level handoff notes so future sessions can recover the actual current state without re-litigating decisions.

This file owns:
- current repo truth
- current implementation state
- current blockers
- immediate next implementation tasks

This file does **not** own:
- workflow semantics
- workspace payload contract
- implementation checklist sequencing

For those, use the canonical owner files listed below.

---

## Canonical owner files
- workflow semantics -> `docs/workflow-contract-2026-03-25.md`
- workspace payload contract -> `docs/workspace-contract.json`
- implementation sequence -> `docs/implementation-checklist-2026-03-25.md`
- MVP implementation rules -> `docs/mvp-alignment.md`
- business/prospecting playbook -> `docs/website-upgrade-playbook.md`

---

## Current repo truth
- Website Factory is a private internal operator app for weak-website review, mock-site concepting, and outreach tracking.
- This project is not Local Jobs Business.
- The repo is currently **docs-only**.
- No runtime frontend/backend source tree is attached yet.

---

## Current wedge
- city: San Jose
- niche: landscaping

---

## Current implementation work
In progress at contract/planning level only:
- frontend state/type alignment plan
- backend enum/validation plan
- workspace route contract
- workflow semantic cleanup
- doc alignment

Next up once runtime codebase is attached:
- Prospect Detail workspace wiring
- score/priority normalization
- QA pass for status/route consistency

---

## Immediate next implementation tasks
1. attach or create the real Website Factory frontend/backend source trees
2. implement canonical backend enums/types
3. implement storage split/migration path if overloaded `status` exists
4. implement `GET /prospects/:id/workspace`
5. apply contract to frontend types/forms/views/filters
