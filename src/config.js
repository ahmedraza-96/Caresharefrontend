// Central API base URL for the whole frontend.
//
// - Local dev: defaults to the backend dev server on http://localhost:4000.
// - Production (Vercel): set REACT_APP_API_URL to the EC2 backend's public HTTPS URL,
//   e.g. https://api.your-domain.com. The backend must allow this app's origin via CORS.
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default API_URL;
