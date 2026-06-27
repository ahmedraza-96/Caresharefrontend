// Central API base URL for the whole frontend.
//
// - Local dev: defaults to the backend dev server on http://localhost:4000.
// - Production: set REACT_APP_API_URL=/api at build time; Caddy proxies /api/* to
//   the backend (stripping the /api prefix), so the app and API are same-origin.
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default API_URL;
