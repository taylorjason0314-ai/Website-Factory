const base = process.env.BASE || 'http://127.0.0.1:4010';

function assertStatus(label, actual, allowed) {
  if (!allowed.includes(actual)) {
    throw new Error(`${label} expected status ${allowed.join(" or ")}, got ${actual}`);
  }
}

async function main() {
  let response = await fetch(`${base}/prospects/prospect_persist_test`);
  console.log('GET_AFTER_RESTART_STATUS', response.status);
  console.log('GET_AFTER_RESTART_BODY', await response.text());
  assertStatus('GET_AFTER_RESTART_STATUS', response.status, [200]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
