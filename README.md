# CareShare — Frontend

React (Create React App) frontend for the CareShare medicine-donation platform:
public site (donate, request medicine, contact, chatbot) and an admin panel.

## Tech
- React 18 (CRA), React Router, MUI + Ant Design
- Axios, Zustand, Leaflet maps
- LLM chatbots (Gemini / Perplexity)

## Local setup
```bash
npm install
cp .env.example .env    # set REACT_APP_API_URL=http://localhost:4000
npm start               # http://localhost:3000
```

### Environment variables
- `REACT_APP_API_URL` — backend base URL. Local: `http://localhost:4000`.
  Production: the EC2 backend's public HTTPS URL, e.g. `https://api.your-domain.com`.
- `REACT_APP_GEMINI_API_KEY`, `REACT_APP_PERPLEXITY_API_KEY` — optional chatbot keys.

The API base URL is centralized in [`src/config.js`](./src/config.js); never hardcode
backend URLs in components.

## Build
```bash
npm run build           # outputs to build/
```

## Deployment (Vercel)
Hosted on **Vercel**, which auto-builds and deploys on every push to `main` (no CI
workflow file needed — Vercel detects the Create React App preset).

1. Import this repo in Vercel (Framework preset: *Create React App*).
2. Set Environment Variables in Project Settings: `REACT_APP_API_URL` (the backend's
   public URL), and optionally the LLM keys.
3. Ensure the backend's `CORS_ORIGIN` includes this app's Vercel URL (and any custom
   domain). SPA routing is handled by [`vercel.json`](./vercel.json).

## License
MIT — see [LICENSE](./LICENSE).
