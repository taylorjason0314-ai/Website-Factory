import http from "http";
import { handleHealth } from "./routes/health.js";
import { handleGetProspect, handleGetWorkspace } from "./routes/prospects.js";

const port = Number(process.env.PORT || 4010);

function notFound(res) {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "GET" && url.pathname === "/health") {
      return handleHealth(req, res);
    }

    const workspaceMatch = url.pathname.match(/^\/prospects\/([^/]+)\/workspace$/);
    if (req.method === "GET" && workspaceMatch) {
      return handleGetWorkspace(workspaceMatch[1], res);
    }

    const prospectMatch = url.pathname.match(/^\/prospects\/([^/]+)$/);
    if (req.method === "GET" && prospectMatch) {
      return handleGetProspect(prospectMatch[1], res);
    }

    return notFound(res);
  } catch (error) {
    res.writeHead(error.statusCode || 500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message || "Server error" }));
  }
});

server.listen(port, () => {
  console.log(`Website Factory backend running on http://127.0.0.1:${port}`);
});
