# Workspace Route Spec — 2026-03-25

## Route
`GET /prospects/:id/workspace`

## Purpose
Return the aggregated operator payload for one prospect workspace view.

## Response contract
```json
{
  "prospect": {
    "id": "prospect_123",
    "businessName": "Vista Landscape",
    "prospectStatus": "Qualified",
    "outreachStatus": "draft",
    "priority": "High",
    "nextAction": "Send first outreach",
    "nextActionDue": "2026-03-27",
    "totalScore": 83
  },
  "review": {
    "totalScore": 83,
    "design": 5,
    "mobile": 4,
    "cta": 5,
    "trust": 4,
    "branding": 4,
    "opportunity": 5,
    "topIssues": [
      "Weak mobile quote path",
      "Thin trust proof",
      "Homepage still signals unfinished site"
    ]
  },
  "concept": {
    "headline": "Turn more visitors into quote requests",
    "offerAngle": "Lead Gen Website Rebuild",
    "sections": [
      "Hero",
      "Trust block",
      "Service area block",
      "Quote CTA"
    ],
    "notes": "Lead with unfinished-site credibility gap."
  },
  "outreachRecords": [
    {
      "id": "outreach_1",
      "channel": "email",
      "status": "draft",
      "angle": "unfinished site hurting trust",
      "sentAt": null,
      "followUpAt": null
    }
  ],
  "tasks": [
    {
      "id": "task_1",
      "title": "Send first outreach",
      "done": false
    }
  ],
  "timelineSummary": [
    "Website reviewed",
    "Score normalized to 83",
    "Mock concept drafted"
  ]
}
```

## Data sources to aggregate
- prospect core record
- website review record
- mock-site concept record
- outreach attempt records
- operator task records
- optional timeline/activity summary

## Repo reality
Actual backend/service implementation is currently **blocked in this repo** because no backend source files are present.

## Verification result
- response contract defined
- ready for frontend integration **at contract level only**
- not yet runtime-ready because route code does not exist in this repo tree

## Next atomic step
Implement the route in the actual backend source tree using this contract as the response target.
