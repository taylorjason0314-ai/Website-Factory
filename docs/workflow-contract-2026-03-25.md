# Workflow Contract — 2026-03-25

## Purpose
This is the **canonical owner** for Website Factory workflow semantics.

It exists so `prospectStatus`, `outreachStatus`, `priority`, and `nextAction` remain separate concepts across the system.

If another file mentions these concepts, that file should reference this one instead of redefining them.

## Field definitions
### prospectStatus
What it means:
- the business pipeline stage for the prospect as a whole

What it does not mean:
- not the state of one outreach attempt
- not the urgency/importance score
- not the next task to do

Examples:
- `New Lead`
- `Qualified`
- `Contacted`
- `Won`

### outreachStatus
What it means:
- the state of a single outreach attempt or current outreach lane

What it does not mean:
- not the total prospect lifecycle stage
- not a replacement for `prospectStatus`

Examples:
- `draft`
- `sent`
- `replied`
- `closed`

### nextAction
What it means:
- the one immediate operator task that should happen next

What it does not mean:
- not a status
- not a priority label
- not a pipeline stage

Examples:
- `Review website`
- `Draft mock concept`
- `Send first outreach`
- `Follow up Thursday`

### nextActionDue
What it means:
- when the next action should happen

What it does not mean:
- not a stage transition date
- not general project due date

### priority
What it means:
- importance/ordering signal for operator attention

What it does not mean:
- not progression
- not proof a prospect has moved stages
- not an outreach attempt result

## Forbidden conflations
- outreach status used as pipeline stage
- prospect status used as outreach attempt state
- next action treated as status
- priority treated as progression
- score treated as stage

## Canonical allowed values
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

## Required follow-up code changes
1. frontend types must split any overloaded `status` field
2. backend validation must reject invalid enum values
3. workspace route must return fields separately
4. badges/filters/forms must map to the correct field
5. list/detail views must render all fields separately

## Alignment status
- frontend aligned to contract yet: **No runtime evidence in repo**
- backend aligned to contract yet: **No runtime evidence in repo**
- docs aligned to contract: **Yes**
