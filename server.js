import http from "http";
import server from "./dist-static/server/server.js";

const PORT = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  try {
    const request = new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body:
        req.method !== "GET" && req.method !== "HEAD"
          ? req
          : undefined,
    });

    const response = await server.fetch(request);

    res.writeHead(response.status, Object.fromEntries(response.headers));

    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (err) {
    console.error("Server error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}).listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});