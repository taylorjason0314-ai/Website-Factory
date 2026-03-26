import http from "http";
import { handleHealth } from "./routes/health.js";
import { handleCreateProspect, handleGetProspect, handleGetWorkspace, handlePatchProspect } from "./routes/prospects.js";

const port = Number(process.env.PORT || 4010);

function jsonError(res, error) {
  res.writeHead(error.statusCode || 500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: error.message || "Server error" }));
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

const server = http.createServer((req, res) => {
  const run = async () => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
      return res.end();
    }
    if (req.method === "GET" && url.pathname === "/health") {
      return handleHealth(req, res);
    }
    if (req.method === "POST" && url.pathname === "/prospects") {
      return handleCreateProspect(req, res);
    }

    const workspaceMatch = url.pathname.match(/^\/prospects\/([^/]+)\/workspace$/);
    if (req.method === "GET" && workspaceMatch) {
      return handleGetWorkspace(workspaceMatch[1], res);
    }

    const prospectMatch = url.pathname.match(/^\/prospects\/([^/]+)$/);
    if (req.method === "GET" && prospectMatch) {
      return handleGetProspect(prospectMatch[1], res);
    }
    if (req.method === "PATCH" && prospectMatch) {
      return handlePatchProspect(prospectMatch[1], req, res);
    }

    return notFound(res);
  };

  run().catch((error) => jsonError(res, error));
});

server.listen(port, () => {
  console.log(`Website Factory backend running on http://127.0.0.1:${port}`);
});
