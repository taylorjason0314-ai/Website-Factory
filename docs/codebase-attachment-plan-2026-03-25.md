# Website Factory Codebase Attachment Plan — 2026-03-25

## 1. Repo truth

Current verified truth:
- Website Factory is currently **docs-only**.
- No runtime frontend implementation is verified.
- No runtime backend implementation is verified.
- This artifact is an **attachment-readiness plan**, not runtime progress.

Operating meaning:
- contracts are ready
- runtime code is not attached yet
- any future runtime claims must be verified against real files

---

## 2. Expected runtime structure

The structure below is **expected/proposed**, not verified.
It is the minimum clean shape the future codebase should map into.

### `frontend/`
Purpose:
- operator UI for prospect list, detail, workspace, forms, badges, and filters

Why it exists:
- Website Factory is an internal operator app and needs a clear frontend home

Depends on canonical docs:
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`
- `docs/mvp-alignment.md`

### `frontend/components/`
Purpose:
- reusable UI pieces such as badges, rows, cards, forms, panels

Why it exists:
- semantic rendering must stay consistent across views

Depends on:
- `docs/workflow-contract-2026-03-25.md`

### `frontend/views/`
Purpose:
- top-level screens such as Prospect List and Prospect Detail / Workspace

Why it exists:
- MVP scope is view-driven and Prospect Detail is the main operating surface

Depends on:
- `docs/mvp-alignment.md`
- `docs/workspace-contract.json`

### `frontend/types/`
Purpose:
- scoped frontend models for prospect, outreach, review, concept, workspace payload

Why it exists:
- prevents overloaded `status` drift and keeps UI semantics explicit

Depends on:
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`

### `frontend/api/`
Purpose:
- API client models/loaders for prospect routes and workspace route

Why it exists:
- contract-to-runtime mapping should be explicit, not scattered in views

Depends on:
- `docs/workspace-contract.json`
- `docs/implementation-checklist-2026-03-25.md`

### `backend/`
Purpose:
- API server, business logic, validation, persistence, route handlers

Why it exists:
- frontend contracts need a runtime backend to enforce semantics and serve workspace payloads

Depends on:
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`
- `docs/mvp-alignment.md`

### `backend/routes/`
Purpose:
- HTTP route layer, including prospect routes and workspace route

Why it exists:
- route ownership should be explicit and inspectable

Depends on:
- `docs/workspace-contract.json`
- `docs/mvp-alignment.md`

### `backend/services/`
Purpose:
- aggregation/business logic, especially for `GET /prospects/:id/workspace`

Why it exists:
- workspace payload should be assembled in one clear service layer, not ad hoc in route handlers

Depends on:
- `docs/workspace-contract.json`
- `docs/implementation-checklist-2026-03-25.md`

### `backend/validation/`
Purpose:
- validators for create/update requests and enum enforcement

Why it exists:
- semantics drift usually starts in weak validation

Depends on:
- `docs/workflow-contract-2026-03-25.md`

### `backend/models/` or `backend/db/`
Purpose:
- persistence models and storage mappings for prospect, outreach, review, concept, tasks

Why it exists:
- semantic separation must be real in storage, not just in API responses

Depends on:
- `docs/workflow-contract-2026-03-25.md`
- `docs/mvp-alignment.md`

### `backend/migrations/`
Purpose:
- schema changes and backfills if overloaded `status` already exists

Why it exists:
- storage repair is likely needed if a prior codebase conflated semantics

Depends on:
- `docs/implementation-checklist-2026-03-25.md`
- `docs/workflow-contract-2026-03-25.md`

### `shared/`
Purpose:
- optional shared contracts/types/enums if the stack supports it safely

Why it exists:
- reduces duplicate contract definitions across frontend and backend

Depends on:
- `docs/workspace-contract.json`
- `docs/workflow-contract-2026-03-25.md`

### `tests/`
Purpose:
- contract, route, validation, and UI behavior verification

Why it exists:
- attachment without drift checks will decay quickly

Depends on:
- all canonical docs, especially:
  - `docs/workflow-contract-2026-03-25.md`
  - `docs/workspace-contract.json`
  - `docs/implementation-checklist-2026-03-25.md`

### `seed/` or `sample-data/`
Purpose:
- sample prospect/workspace payloads for local verification and testing

Why it exists:
- one known-good workspace example accelerates attachment validation

Depends on:
- `docs/workspace-contract.json`

---

## 3. Canonical doc → runtime mapping

### `docs/workflow-contract-2026-03-25.md`
Runtime surfaces affected:
- frontend types
- frontend badges/filters/forms/views
- backend enums
- backend validators
- backend models/storage fields
- backend serializers

What must stay in sync:
- `prospectStatus`
- `outreachStatus`
- `priority`
- `nextAction`
- `nextActionDue`
- forbidden conflations

What counts as drift:
- plain overloaded `status`
- `outreachStatus` used as pipeline stage
- `nextAction` treated like status
- `priority` treated like stage

### `docs/workspace-contract.json`
Runtime surfaces affected:
- backend response schemas
- backend workspace route
- backend workspace aggregation service
- frontend API client types
- frontend workspace loader/state
- shared contract definitions if present

What must stay in sync:
- workspace payload shape
- required sections
- nested field names

What counts as drift:
- route returns plain `status` instead of scoped fields
- frontend expects different payload shape than backend returns
- duplicate hand-written payload contracts diverge

### `docs/implementation-checklist-2026-03-25.md`
Runtime surfaces affected:
- implementation order across backend, storage, validation, routes, frontend, and tests

What must stay in sync:
- execution order
- definition of done by layer
- acceptance checks

What counts as drift:
- frontend work begins before backend/storage semantics are clarified
- route work skips validation/storage cleanup
- code changes happen without the listed proof

### `docs/mvp-alignment.md`
Runtime surfaces affected:
- feature scope
- score normalization logic
- priority display/logic
- Prospect Detail / Workspace view
- route strategy

What must stay in sync:
- MVP scope
- score range `0–100`
- priority model `High / Medium / Low`
- Prospect Detail as main operating surface

What counts as drift:
- feature sprawl beyond MVP
- score models that don’t normalize to `0–100`
- routing/view structure that bypasses workspace-first operation

### `CONVERSATION_STATE.md`
Runtime surfaces affected:
- none directly as executable code
- handoff and implementation-state recovery only

What must stay in sync:
- actual current state
- actual blockers
- actual next tasks

What counts as drift:
- reporting runtime implementation that is not attached/verified
- turning handoff state into a second source of contract truth

---

## 4. Codebase attachment checklist

Run this immediately when code is attached.

### Structure checks
- confirm actual frontend tree exists
- confirm actual backend tree exists
- confirm whether shared contract/type layer exists
- confirm whether tests exist
- confirm whether migrations exist

### Runtime identification
- identify frontend framework/language/runtime
- identify backend framework/language/runtime
- identify package manager/build system
- identify start/build/test commands

### Code location checks
- identify route files
- identify schema/type definitions
- identify model/storage definitions
- identify API client definitions
- identify badge/filter/form/view wiring files

### Drift search checks
- search for plain `status`
- search for overloaded status semantics
- search for enum duplication
- search for duplicate payload contracts
- search for score field definitions
- search for priority field definitions

### Workspace route checks
- locate likely home for `GET /prospects/:id/workspace`
- identify whether a partial workspace response already exists
- identify where aggregation logic should live

### Migration checks
- determine whether migration/backfill is required
- determine whether overloaded `status` already exists in storage
- determine whether historical records need split mapping

---

## 5. First audit commands/questions

Write this as the first operator pass once code exists.

### Files and structure
- list top-level folders in attached codebase
- list frontend entry files
- list backend route files
- list schema/model/type files

### Search targets
- search for `status`
- search for `prospectStatus`
- search for `outreachStatus`
- search for `nextAction`
- search for `nextActionDue`
- search for `priority`
- search for `workspace`

### Questions to answer immediately
- where are prospect records typed?
- where are outreach records typed?
- where does create/update validation live?
- where are badges/filters/forms wired?
- does a workspace response already exist partially?
- are frontend and backend enums already different?
- is there more than one payload contract definition?

### First audit output required
- plain `status` exists or not
- semantics split exists or not
- validation exists or not
- workspace route exists or not
- docs vs code mismatch list
- first implementation target selected from checklist

---

## 6. Success criteria

### Ready for codebase attachment means:
- contracts still have clear ownership
- docs are mapped to expected code surfaces
- first implementation order is obvious
- drift checks are defined
- no one can confuse docs work with runtime work

### Successfully attached means:
- repo contains verified runtime code
- actual frontend/backend surfaces are known
- canonical docs map cleanly to those surfaces
- workspace route implementation location is known
- semantics/code mismatch list is produced
- first execution sequence can begin without ambiguity

---

## 7. Remaining risks

Exact risks:
- codebase lands with its own conflicting semantics
- plain `status` already exists everywhere
- payload contract is duplicated in code
- frontend and backend use different enum names
- docs and runtime drift after attachment
- shared types may not exist, forcing duplicate contract maintenance unless normalized quickly

---

## Verified vs expected note

### Verified now
- Website Factory is docs-only
- canonical doc ownership is clear
- no runtime code is attached yet

### Expected later
- runtime structure above or equivalent
- actual code surfaces that can be audited against the contracts

If the attached codebase uses different folder names, map the concepts to the real structure instead of forcing this exact layout.