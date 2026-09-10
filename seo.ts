export function setSeo(title: string, description: string, path = "") {
  document.title = title;
  const set = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
    el.content = content;
  };
  set("description", description);
  set("robots", "index,follow,max-image-preview:large");
  for (const [property, content] of [["og:title", title], ["og:description", description], ["og:type", "website"], ["og:url", `${window.location.origin}${path}`]] as const) {
    let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
    el.content = content;
  }
}
