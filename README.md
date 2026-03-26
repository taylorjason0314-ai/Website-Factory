# Website Factory Operator MVP

Website Factory is a private internal operator app for finding weak local business websites, reviewing conversion issues, creating stronger mock-site concepts, and tracking outreach through follow-up.

## Project identity
This is:
- a private operator workflow
- optimized for one operator
- built to help win clients faster

This is **not**:
- a generic CRM
- a multi-user SaaS platform
- Local Jobs Business

## Current wedge
- city: San Jose
- niche: landscaping

## Core business principle
Do not sell generic websites.
Sell:
- more leads
- stronger mobile experience
- cleaner quote/contact flow
- better trust signals
- a site that helps book more jobs

## MVP scope
The operator MVP should support:
1. Lead workspace
2. Website review
3. Mock-site concept
4. Outreach + follow-up

## Lane ownership rule
Businesses/prospects worked in this repo belong to the **Website Factory** lane unless explicitly marked as intentional cross-lane duplicates with Local Jobs Business.

## Canonical source-of-truth docs
### Project identity / scope
- `README.md`

### Current project state / handoff truth
- `CONVERSATION_STATE.md`

### MVP implementation rules
- `docs/mvp-alignment.md`

### Workflow semantics
- `docs/workflow-contract-2026-03-25.md`

### Workspace payload contract
- `docs/workspace-contract.json`

### Implementation sequence
- `docs/implementation-checklist-2026-03-25.md`

## Current repo truth
- this repo now has a **runtime scaffold plus docs foundation**
- it is not full product implementation yet
- runtime execution has begun, but coverage is still partial

## Current implementation lane
Implemented now:
- shared canonical contract/types
- backend scaffold
- workspace route scaffold
- prospect POST/PATCH mutation flow
- file-backed JSON persistence for prospects
- minimal frontend workspace/mutation scaffold

Next up:
- prospect list view on persisted data
- persisted outreach/review/concept/task layers
- QA pass for status/route/workspace consistency
