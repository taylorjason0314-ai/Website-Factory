# Frontend Semantics Audit — 2026-03-25

## Goal
Separate frontend state and types so these fields are distinct everywhere:
- `prospectStatus`
- `outreachStatus`
- `nextAction`
- `nextActionDue`
- `priority`

## Repo reality at audit time
The current `website-factory` repo tree contains **docs only**.

Checked tree:
- `README.md`
- `CONVERSATION_STATE.md`
- `DEPLOYMENT.md`
- `docs/*`

Not present:
- `src/`
- `frontend/`
- `components/`
- `types/`
- `api client`
- form components
- table/detail React code
- build tooling (`package.json`, Vite, TypeScript config)

## Audit result
Because no frontend source files exist in this repo tree, the following requested runtime/frontend actions are **blocked** in this repo right now:
- audit current frontend types, forms, tables, badges, filters, detail views
- split TypeScript models in code
- update UI rendering logic
- verify compile/build success

## Semantic mistakes already visible at the contract/doc level
The drift that needed to be prevented is:
1. outreach status used like a pipeline stage
2. next action treated like status
3. priority treated like progression

## Concrete movement completed this cycle
Created/locked repo-backed frontend-facing contract assumptions in:
- `docs/workflow-contract-2026-03-25.md`
- `docs/workspace-contract.json`

These now define the separate fields the eventual frontend must render independently.

## Canonical frontend object shape
### Before (bad / conflated)
```json
{
  "status": "Follow-Up",
  "priority": "High",
  "nextAction": "Send first outreach"
}
```

Problems:
- `status` is overloaded and ambiguous
- `Follow-Up` could mean pipeline stage or outreach state
- `nextAction` is present but not separated from workflow semantics

### After (required)
```json
{
  "prospectStatus": "Qualified",
  "outreachStatus": "draft",
  "nextAction": "Send first outreach",
  "nextActionDue": "2026-03-27",
  "priority": "High"
}
```

## Remaining frontend drift
- no frontend implementation exists yet in repo to verify actual drift inside components
- compile/build verification is impossible until frontend source is present

## Build result
- **Blocked**
- reason: no frontend source tree or build system exists in this repo

## Next atomic step
Create the actual Website Factory frontend codebase or attach this repo to the existing frontend source tree, then apply the contract to real types/components.
