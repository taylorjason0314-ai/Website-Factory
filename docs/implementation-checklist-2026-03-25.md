# Website Factory Implementation Checklist — 2026-03-25

## Purpose
This is the **canonical owner** for the Website Factory implementation sequence.

It converts the written contracts into an execution order for the real app codebase.

It is implementation-ready, but not executable inside the current docs-only repo without the actual frontend/backend source trees.

---

## A. Required implementation surfaces

### Frontend runtime surfaces
- frontend type layer
- frontend form models and validation layer
- frontend list views
- frontend detail/workspace views
- frontend badges
- frontend filters
- frontend API client models
- frontend workspace data mapping

### Backend runtime surfaces
- backend enum definitions
- backend request/response schemas
- backend validators
- backend create handlers
- backend update handlers
- `GET /prospects/:id` contract alignment
- `GET /prospects/:id/workspace` route
- workspace aggregation/service layer

### Persistence/runtime mapping surfaces
- DB/storage field mapping for:
  - `prospectStatus`
  - `outreachStatus`
  - `priority`
  - `nextAction`
  - `nextActionDue`
- migration/backfill path if overloaded `status` already exists
- storage compatibility notes for existing prospect records

---

## B. Ordered implementation plan

### 1. Canonical backend enums/types
Implement canonical backend enum/types for:
- `prospectStatus`
- `outreachStatus`
- `priority`

Output proof:
- enum/type definitions checked into backend source

### 2. DB/storage split or migration path
If an overloaded `status` field exists:
- split into scoped fields
- define backfill rules
- preserve old data safely

Output proof:
- migration/backfill script or explicit storage mapping artifact

### 3. Create/update validation
Update backend validation so:
- invalid enum values are rejected
- `nextAction` remains task-like
- `nextActionDue` is nullable and typed
- overloaded field payloads are rejected or flagged

Output proof:
- validator code
- route schema updates
- test/manual verification output

### 4. `GET /prospects/:id` contract alignment
Ensure the base prospect contract returns distinct fields:
- `prospectStatus`
- `outreachStatus`
- `priority`
- `nextAction`
- `nextActionDue`

Output proof:
- endpoint contract example
- verified response sample

### 5. `GET /prospects/:id/workspace` implementation
Implement the aggregated workspace route using the locked contract in `docs/workspace-contract.json`.

Output proof:
- route handler
- service aggregation layer
- sample JSON response
- test/manual verification

### 6. Frontend type updates
Split frontend types/models so no plain overloaded `status` drives the UI.

Output proof:
- changed type files
- changed API client types
- changed form/list/detail model wiring

### 7. Form/view/badge/filter updates
Update runtime views so each field renders from the correct source:
- forms
- list rows
- detail/workspace panels
- badges
- filters

Output proof:
- changed component files
- screenshots or verified render output

### 8. End-to-end verification
Verify backend + frontend alignment using one sample workspace/prospect.

Output proof:
- build success
- sample response
- sample rendered UI state
- no conflated field behavior

---

## C. Definition of done by layer

### Backend enums/types
Done condition:
- scoped enum/types exist and are used by handlers/schemas

Proof required:
- backend source file changes

Blocker condition:
- backend source tree unavailable

### DB/storage mapping
Done condition:
- storage has separate fields or explicit safe mapping rules

Proof required:
- migration file, schema change, or mapping doc used by runtime code

Blocker condition:
- persistence layer unknown or inaccessible

### Validation layer
Done condition:
- invalid enum values rejected
- overloaded payloads rejected or flagged

Proof required:
- validator code and test/manual verification

Blocker condition:
- no backend validation layer exists yet

### Workspace route
Done condition:
- `GET /prospects/:id/workspace` returns distinct scoped fields

Proof required:
- route code + verified sample response

Blocker condition:
- service/data layer not present

### Frontend type layer
Done condition:
- no overloaded `status` drives core workflow state

Proof required:
- updated types/models/API client files

Blocker condition:
- frontend source tree unavailable

### Frontend views/forms/badges/filters
Done condition:
- UI renders each field separately and filters/badges map correctly

Proof required:
- changed component files + verified build/render

Blocker condition:
- no runtime UI code exists

### End-to-end verification
Done condition:
- one prospect/workspace record displays all five fields separately across API + UI

Proof required:
- passing build + sample response + sample UI evidence

Blocker condition:
- missing real app codebase

---

## D. Runtime acceptance checks

Required checks:
- `prospectStatus`, `outreachStatus`, `priority`, `nextAction`, and `nextActionDue` all exist separately
- invalid `prospectStatus` values are rejected
- invalid `outreachStatus` values are rejected
- invalid `priority` values are rejected
- workspace payload returns distinct fields, not overloaded `status`
- UI renders separate badges/labels for pipeline, outreach, and priority
- UI shows next action separately from status badges
- filters use the correct source field
- no field named plain `status` remains unless explicitly scoped (for example `prospectStatus`)
- no code path treats `nextAction` as progression
- no code path treats `priority` as stage

---

## E. Repo truth note

Current repo truth:
- this checklist is implementation-ready
- the current `projects/website-factory` repo is still docs-only
- real execution is blocked until the actual frontend/backend source trees are attached or created

That means this artifact can drive implementation, but cannot complete runtime changes inside the current repo snapshot by itself.
