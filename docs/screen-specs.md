# Website Factory — Screen Specs

Status: Active build guide

Purpose:
Define the first internal operating screens for Website Factory so it becomes a real working tool, not just CSVs and notes.

This is an internal operator UI first.

---

## Product / Ops Principle
Website Factory should feel like a founder/operator dashboard for:
- prospect sourcing
- website scoring
- shortlist decisions
- outreach prep
- later client delivery workflow

This is not a cluttered all-in-one page.
It should be:
- clear
- searchable
- decision-oriented
- mobile-readable enough for quick checks

---

# Screen 1 — Lead Dashboard

## Purpose
Give a top-level view of current lead pipeline health.

## Primary user questions
- how many prospects do we have?
- how many are scored?
- how many are shortlist-worthy?
- who are the best targets right now?

## Main content
- total leads
- scored leads
- shortlist count
- outreach-ready count
- top targets summary
- current niche/city focus

## Core actions
- open leads table
- open shortlist
- open outreach queue
- filter by city/niche later

## UI sections
### Summary cards
- total prospects
- scored prospects
- shortlist count
- outreach-ready count

### Top targets panel
- top 5 or 10 targets
- score
- likely offer fit
- quick reason why

### Focus summary
- current niche
- current city
- current offer stack reference

---

# Screen 2 — Leads Table

## Purpose
Manage the raw prospect database cleanly.

## Primary user questions
- what leads do we have?
- which ones are strongest?
- which ones still need scoring or enrichment?

## Main content
- searchable table of prospects
- filters
- score
- offer fit
- issues
- status

## Core actions
- search
- filter
- sort by score
- click into prospect detail
- update status

## Table fields
- business name
- niche
- city
- website
- phone
- email
- total score
- likely offer fit
- top issues
- outreach status
- follow-up status

## Filters
- city
- niche
- score band
- likely offer fit
- outreach status

## MVP notes
- this can be built directly from CSV-backed data first
- no need to overcomplicate the first version

---

# Screen 3 — Prospect Detail View

## Purpose
Let one lead be reviewed with full context.

## Primary user questions
- why is this lead good or bad?
- what is the website problem?
- what should we sell them?
- are they outreach ready?

## Main content
- business info
- website link
- score breakdown
- top issues
- offer fit
- contact data
- notes

## Core actions
- open website
- adjust score later
- update notes
- mark as shortlisted
- mark outreach-ready

## UI sections
### Header
- business name
- city/niche
- total score
- likely offer fit

### Website diagnosis
- design quality
- mobile
- CTA
- trust
- branding
- opportunity

### Evidence notes
- top 3 issues
- proof snippets or observations

### Contact block
- phone
- email
- website
- contact method

### Operator actions
- add to shortlist
- mark ready for outreach
- update follow-up state

---

# Screen 4 — Shortlist Board

## Purpose
Surface the best prospects for action.

## Primary user questions
- who are the best targets?
- why are they high priority?
- what offer fits each one?

## Main content
- shortlist cards or table
- key pain points
- likely offer angle
- readiness for outreach

## Core actions
- rank targets
- remove weak shortlist entries
- promote to outreach queue

## UI sections
### Priority groups
- top outreach now
- strong but later
- hold

### Each shortlist card should show
- business name
- score
- likely offer fit
- 2-3 strongest reasons
- contact method
- outreach-ready status

## Product rule
This screen should feel like a decision board, not a raw database dump.

---

# Screen 5 — Outreach Queue

## Purpose
Turn selected targets into action.

## Primary user questions
- who gets contacted next?
- by what method?
- what angle should we use?
- what follow-up is due?

## Main content
- outreach-ready businesses
- contact method
- message angle
- status
- follow-up timing

## Core actions
- queue outreach
- mark sent
- mark replied
- schedule follow-up

## UI sections
### Batch summary
- ready now
- sent
- replied
- follow-up due

### Outreach rows
- business name
- contact method
- likely offer fit
- outreach angle
- status
- next action date

### Message support later
- template suggestions
- personalized angle suggestions
- outreach history

---

# Near-Term Build Order
1. Lead Dashboard
2. Leads Table
3. Prospect Detail View
4. Shortlist Board
5. Outreach Queue

---

# Design Notes
- this is an internal operator tool first
- optimize for speed and decision clarity
- use React + Vite + Tailwind
- start from current CSV + shortlist docs if needed
- keep the interface uncluttered
- do not dump every raw note on one screen
- make it easy to move from raw lead -> shortlist -> outreach
