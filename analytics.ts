export function initAnalytics() {
  const domain = import.meta.env.VITE_ANALYTICS_DOMAIN as string | undefined;
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
  if (!domain || !endpoint || document.querySelector('script[data-aistack-analytics]')) return;
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;
  script.dataset.api = endpoint;
  script.dataset.aistackAnalytics = "true";
  script.src = endpoint.replace(/\/api\/event\/?$/, "/js/script.js");
  script.onerror = () => script.remove();
  document.head.appendChild(script);
}
