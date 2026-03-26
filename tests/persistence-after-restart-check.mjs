const base = process.env.BASE || 'http://127.0.0.1:4030';

async function main() {
  let response = await fetch(`${base}/prospects/prospect_persist_test`);
  console.log('GET_AFTER_RESTART_STATUS', response.status);
  console.log('GET_AFTER_RESTART_BODY', await response.text());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
