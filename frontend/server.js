import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = Number(process.env.PORT || 4011);

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
};

http.createServer((req, res) => {
  const reqPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(__dirname, reqPath);
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "text/plain" });
    res.end(data);
  });
}).listen(port, () => {
  console.log(`Website Factory frontend running on http://127.0.0.1:${port}`);
});
