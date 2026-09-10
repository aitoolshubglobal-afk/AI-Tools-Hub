export function trackAffiliateClick(toolId: string, destination: string) {
  try {
    const event = { toolId, destination, timestamp: new Date().toISOString(), path: window.location.pathname };
    window.dispatchEvent(new CustomEvent("aistack:affiliate-click", { detail: event }));
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) gtag("event", "affiliate_click", { tool_id: toolId, destination });
    const plausible = (window as Window & { plausible?: (name: string, options?: unknown) => void }).plausible;
    if (plausible) plausible("Affiliate Click", { props: { tool: toolId } });
  } catch { /* analytics must never block navigation */ }
}
