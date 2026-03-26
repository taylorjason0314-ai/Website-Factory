export function handleHealth(_req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true, service: "website-factory-backend" }));
}
