// Simple analytics initializer: injects gtag script when VITE_GTAG_ID is provided
export function initAnalytics() {
  try {
    const GTAG_ID = import.meta.env.VITE_GTAG_ID;
    if (!GTAG_ID) return;

    // Inject gtag script
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
    document.head.appendChild(s);

    // Inject inline configuration
    const inline = document.createElement('script');
    inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GTAG_ID}');`;
    document.head.appendChild(inline);
  } catch (e) {
    // Fail silently in environments where import.meta is not available
    // (e.g., during some static analyses)
    // eslint-disable-next-line no-console
    console.warn('Analytics init failed:', e);
  }
}
