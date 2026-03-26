# Backend Semantics Audit — 2026-03-25

## Goal
Create canonical enums and validation for:
- `prospectStatus`
- `outreachStatus`
- `priority`

## Repo reality at audit time
The current `website-factory` repo tree contains **no backend implementation code**.

Not present:
- backend models
- schemas
- validators
- DB migrations
- route handlers
- service layer
- tests

## Canonical enum contract
### prospectStatus
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

### outreachStatus
- `draft`
- `sent`
- `replied`
- `closed`

### priority
- `High`
- `Medium`
- `Low`

## Validation rules required
1. `prospectStatus` must be one of the allowed pipeline stages only.
2. `outreachStatus` must be one of the allowed outreach-attempt states only.
3. `priority` must be one of `High | Medium | Low`.
4. `nextAction` must remain free text / task-like, not enum stage logic.
5. `nextActionDue` should be nullable and parseable as a date/datetime string.
6. reject payloads that overload one field to represent another concept.

## Endpoints that should eventually be affected
- `POST /prospects`
- `PATCH /prospects/:id`
- `GET /prospects/:id`
- `GET /prospects/:id/workspace`
- any outreach create/update endpoints
- any review/concept update endpoints that currently return prospect summary state

## Concrete movement completed this cycle
Because no backend code exists in this repo tree, I locked the backend contract in repo-backed artifacts:
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`

## Migration / compatibility risk
When real backend code appears, there is likely risk if an existing overloaded field such as `status` is already being persisted.

Potential migration paths:
- split old `status` into `prospectStatus` and `outreachStatus`
- derive `nextAction` separately
- backfill `priority` from score/override rules

## Test / verification result
- **Blocked at code level**
- reason: no backend code or test harness exists in this repo tree
- **Verified at contract level** via repo artifacts above

## Next atomic step
Implement backend model/schema enums and request validation in the actual Website Factory backend source tree.
