import server from "../dist/server/server.js";

export default async function handler(req, res) {
  try {
    let request;
    if (typeof req === "object" && req !== null && "url" in req && typeof req.url === "string" && req.url.startsWith("http")) {
      request = req;
    } else {
      const protocol = (req.headers && req.headers["x-forwarded-proto"]) || "https";
      const host = (req.headers && (req.headers["x-forwarded-host"] || req.headers.host)) || "localhost";
      const rawUrl = (req && typeof req.url === "string" && req.url) ? req.url : "/";
      const fullUrl = `${protocol}://${host}${rawUrl}`;

      const headers = new Headers();
      if (req.headers) {
        for (const [key, value] of Object.entries(req.headers)) {
          if (value) {
            if (Array.isArray(value)) {
              for (const v of value) headers.append(key, v);
            } else {
              headers.set(key, value);
            }
          }
        }
      }

      request = new Request(fullUrl, {
        method: req.method || "GET",
        headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
        duplex: req.method !== "GET" && req.method !== "HEAD" ? "half" : undefined,
      });
    }

    const response = await server.fetch(request);

    if (res && typeof res.status === "function") {
      res.status(response.status);
      response.headers.forEach((val, key) => {
        const lowerKey = key.toLowerCase();
        if (lowerKey !== "transfer-encoding") {
          res.setHeader(key, val);
        }
      });
      const body = await response.arrayBuffer();
      res.send(Buffer.from(body));
    } else {
      return response;
    }
  } catch (err) {
    console.error(err);
    if (res && typeof res.status === "function") {
      res.status(500).send("Internal Server Error");
    } else {
      return new Response("Internal Server Error", { status: 500 });
    }
  }
}

