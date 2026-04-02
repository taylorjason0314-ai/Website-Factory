const base = process.env.BASE || 'http://127.0.0.1:4010';

async function fetchText(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();
  return { status: response.status, text };
}

async function main() {
  const postPayload = {
    id: 'prospect_persist_test',
    businessName: 'Persist Test Landscaping',
    prospectStatus: 'New Lead',
    outreachStatus: 'draft',
    priority: 'Medium',
    nextAction: 'Review website',
    nextActionDue: '2026-03-26'
  };

  let result = await fetchText(`${base}/prospects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postPayload)
  });
  console.log('POST_STATUS', result.status);
  console.log('POST_BODY', result.text);

  result = await fetchText(`${base}/prospects/prospect_persist_test`);
  console.log('GET_BEFORE_RESTART_STATUS', result.status);
  console.log('GET_BEFORE_RESTART_BODY', result.text);

  result = await fetchText(`${base}/prospects/prospect_persist_test`, {
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
  console.log('PATCH_STATUS', result.status);
  console.log('PATCH_BODY', result.text);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
