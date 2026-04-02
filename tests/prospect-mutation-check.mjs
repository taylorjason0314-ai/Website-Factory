const base = process.env.BASE || 'http://127.0.0.1:4010';

async function asText(response) {
  return await response.text();
}

function assertStatus(label, actual, allowed) {
  if (!allowed.includes(actual)) {
    throw new Error(`${label} expected status ${allowed.join(" or ")}, got ${actual}`);
  }
}

async function main() {
  const validPayload = {
    id: 'prospect_mutation_test',
    businessName: 'Mutation Test Landscaping',
    prospectStatus: 'New Lead',
    outreachStatus: 'draft',
    priority: 'Medium',
    nextAction: 'Review website',
    nextActionDue: '2026-03-26'
  };

  const postRes = await fetch(`${base}/prospects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validPayload)
  });
  console.log('POST_STATUS', postRes.status);
  console.log('POST_BODY', await asText(postRes));
  // Allow replay-safe runs where fixture ID already exists.
  assertStatus('POST_STATUS', postRes.status, [201, 409]);

  const invalidRes = await fetch(`${base}/prospects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 'prospect_invalid_status',
      businessName: 'Invalid Status Co',
      status: 'Qualified',
      priority: 'High'
    })
  });
  console.log('INVALID_STATUS', invalidRes.status);
  console.log('INVALID_BODY', await asText(invalidRes));
  assertStatus('INVALID_STATUS', invalidRes.status, [400]);

  const patchRes = await fetch(`${base}/prospects/prospect_mutation_test`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prospectStatus: 'Qualified',
      outreachStatus: 'sent',
      priority: 'High',
      nextAction: 'Follow up Thursday',
      nextActionDue: '2026-03-27'
    })
  });
  console.log('PATCH_STATUS', patchRes.status);
  console.log('PATCH_BODY', await asText(patchRes));
  assertStatus('PATCH_STATUS', patchRes.status, [200]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
