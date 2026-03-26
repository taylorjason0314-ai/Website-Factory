# Screen Specs

## Purpose
This file now refers to the **Website Factory Operator MVP** screen structure.

It is not a generic CRM spec.
It is not a public-facing product spec.
It is the internal operator workflow.

## Main operating rule
Prospect Detail is the main operating surface.

## Minimum MVP screens
### 1. Dashboard
Purpose:
- show what needs attention now

### 2. Prospect List
Purpose:
- manage/filter/select leads quickly

### 3. Prospect Detail / Lead Workspace
Purpose:
- primary operator surface
- must load from:
  - `GET /prospects/:id/workspace`

Required workspace sections:
- lead summary
- score summary
- next action
- Website Review panel
- Mock-Site Concept panel
- Outreach / Follow-Up panel

## Semantic rules to reflect in the UI
### Prospect status
Business pipeline only:
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
Outreach attempt only:
- `draft`
- `sent`
- `replied`
- `closed`

### Next action
One immediate visible operator task only.

## Score / priority display
- score displayed as `0–100`
- priority displayed as:
  - `High`
  - `Medium`
  - `Low`

## Current source-of-truth note
For build alignment, pair this file with:
- `docs/mvp-alignment.md`
- `README.md`
- `CONVERSATION_STATE.md`
