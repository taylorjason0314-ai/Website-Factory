# Execution Plan

## Current workflow truth
Website Factory is in the **Operator MVP alignment and build phase**.

This project now has two clean layers:

### 1. Business / offer layer
Used for:
- prospecting
- offer positioning
- scoring weak websites
- outreach angle

### 2. Operator MVP build layer
Used for:
- Prospect-rooted app structure
- workflow semantics
- workspace route design
- Prospect Detail as the main operating surface

## Current implementation priority
### In progress
- frontend state/type alignment
- backend enum/validation alignment
- workspace route implementation
- workflow semantic correction
- doc alignment

### Next up
- Prospect Detail workspace wiring
- score/priority normalization
- QA pass for status/route consistency

## Approved semantic model
### Prospect status = business pipeline only
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

### Outreach status = individual outreach attempt state only
- `draft`
- `sent`
- `replied`
- `closed`

### Next action = one immediate visible operator task only
Examples:
- `Review website`
- `Draft mock concept`
- `Send first outreach`
- `Follow up Thursday`
- `Call owner`

## Rule
Do not let these documents drift back into mixed status logic.

For current implementation truth, see:
- `README.md`
- `CONVERSATION_STATE.md`
- `docs/mvp-alignment.md`
