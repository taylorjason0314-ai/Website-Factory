# Website Factory MVP Alignment

## Purpose
This file owns the **MVP implementation rules** for Website Factory.

It does not own every repeated explanation.
Use the canonical owner files below when you need exact semantics, payload shape, or implementation sequencing.

## Canonical owner files
- workflow semantics -> `docs/workflow-contract-2026-03-25.md`
- workspace payload contract -> `docs/workspace-contract.json`
- implementation sequence -> `docs/implementation-checklist-2026-03-25.md`
- current project state -> `../CONVERSATION_STATE.md`

## Approved implementation rules

### Scoring rule
- each review category scores `1–5`
- weighted total converts to `0–100`
- `WebsiteReview.total_score` stores `0–100`
- `Prospect.total_score` stores `0–100`

### Priority rule
- `High` = total_score >= 75 and visible weak-site problems and reachable contact path
- `Medium` = total_score 50–74
- `Low` = total_score < 50
- operator can manually override

### Route strategy
#### Main operating surface
- Prospect Detail

#### Aggregated route required
- `GET /prospects/:id/workspace`

#### CRUD routes remain underneath
- Prospect CRUD
- review upsert/load
- concept upsert/load
- outreach create/update/list
- task create/update/list

## Apply-now implementation areas
### Frontend
- separate `prospectStatus` vs `outreachStatus` vs `nextAction`
- normalize score display to `0–100`
- normalize priority display to `High / Medium / Low`
- load Prospect Detail through the workspace route

### Backend
- lock enums/validation
- implement the workspace aggregate route
- normalize total score storage to `0–100`

### Workflow logic
- correct status semantics
- remove mixed pipeline/outreach/task logic

## Repo truth note
Current repo is still docs-only.
These rules are implementation-ready, but runtime changes require the actual attached codebase.
