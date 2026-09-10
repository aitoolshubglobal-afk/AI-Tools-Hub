import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function clientKey(req: express.Request) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = typeof forwarded === "string" ? forwarded.split(",")[0].trim() : req.ip;
  return ip || "unknown";
}

function newsletterRateLimit(req: express.Request, res: express.Response, next: express.NextFunction) {
  const now = Date.now();
  const key = clientKey(req);
  const bucket = rateBuckets.get(key);
  if (!bucket || now >= bucket.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return next();
  }
  if (bucket.count >= RATE_LIMIT) {
    res.setHeader("Retry-After", Math.ceil((bucket.resetAt - now) / 1000));
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }
  bucket.count += 1;
  return next();
}

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && email.length <= 254;
}

async function subscribeToBrevo(email: string) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) return { configured: false as const };

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": apiKey, accept: "application/json" },
    body: JSON.stringify({ email, updateEnabled: true, listIds: [listId] }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Brevo subscription failed: ${response.status} ${body.slice(0, 300)}`);
  }
  return { configured: true as const };
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.disable("x-powered-by");
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    next();
  });
  app.use(express.json({ limit: "16kb" }));

  app.get("/health", (_req, res) => res.json({ ok: true, service: "ai-tools-hub" }));

  app.post("/api/subscribe", newsletterRateLimit, async (req, res) => {
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    if (typeof req.body?.website === "string" && req.body.website.trim()) return res.status(400).json({ ok: false, error: "spam" });
    if (req.body?.consent !== true) return res.status(400).json({ ok: false, error: "consent_required" });
    if (!isValidEmail(email)) return res.status(400).json({ ok: false, error: "invalid_email" });
    try {
      const result = await subscribeToBrevo(email);
      if (!result.configured) return res.status(503).json({ ok: false, error: "newsletter_not_configured" });
      return res.json({ ok: true });
    } catch (error) {
      console.error(error);
      return res.status(502).json({ ok: false, error: "newsletter_provider_error" });
    }
  });

  const staticPath = process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, { extensions: ["html"] }));
  app.get("*", (_req, res) => res.sendFile(path.join(staticPath, "index.html")));

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
}

startServer().catch((error) => { console.error(error); process.exit(1); });
