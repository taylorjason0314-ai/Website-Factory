# Prospect Scoring Rubric V1

## Purpose
This is the **business scoring lens** for weak-website opportunities.

It is used to review and qualify prospects.

It is not the source of truth for app status semantics.

## Scoring categories
Each category scores `1–5`:
- Website Design Quality
- Mobile Experience
- CTA Strength
- Trust Signals
- Branding / Visual Quality
- Lead Opportunity

## App scoring rule
The Operator MVP converts the review scoring into a `0–100` total.

Store/display:
- `WebsiteReview.total_score = 0–100`
- `Prospect.total_score = 0–100`

## Priority rule
- `High` = total_score >= 75 and visible weak-site problems and reachable contact path
- `Medium` = total_score 50–74
- `Low` = total_score < 50
- operator can manually override

## Do not use this file for
- pipeline state rules
- outreach attempt state rules
- next action logic

For those, use:
- `docs/mvp-alignment.md`
- `README.md`
