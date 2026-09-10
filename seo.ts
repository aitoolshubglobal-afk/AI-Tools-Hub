const SITE_URL = "https://aitoolshub.global";

function upsertMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function upsertProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
  el.content = content;
}

function upsertCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) { el = document.createElement("link"); el.rel = "canonical"; document.head.appendChild(el); }
  el.href = url;
}

export function setSeo(title: string, description: string, path = "", options?: { noindex?: boolean; image?: string }) {
  const canonical = `${SITE_URL}${path || "/"}`.replace(/([^:]\/)\/+/g, "$1");
  document.title = title;
  upsertMeta("description", description);
  upsertMeta("robots", options?.noindex ? "noindex,follow" : "index,follow,max-image-preview:large");
  upsertProperty("og:title", title);
  upsertProperty("og:description", description);
  upsertProperty("og:type", "website");
  upsertProperty("og:url", canonical);
  upsertProperty("og:site_name", "AI Tools Hub");
  if (options?.image) upsertProperty("og:image", options.image);
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:title", title);
  upsertMeta("twitter:description", description);
  upsertCanonical(canonical);
}

export function setJsonLd(id: string, data: Record<string, unknown> | Array<Record<string, unknown>>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) { el = document.createElement("script"); el.id = id; el.type = "application/ld+json"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}
