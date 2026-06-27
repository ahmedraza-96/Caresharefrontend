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
  Production (behind Caddy, same-origin): `/api`.
- `REACT_APP_GEMINI_API_KEY`, `REACT_APP_PERPLEXITY_API_KEY` — optional chatbot keys.

The API base URL is centralized in [`src/config.js`](./src/config.js); never hardcode
backend URLs in components.

## Build
```bash
npm run build           # outputs to build/
```

## Deployment
Deployed to a single EC2 host behind Caddy (auto-HTTPS) via GitHub Actions on push to
`main`. The backend repo's `DEPLOY.md` documents the full setup.

## License
MIT — see [LICENSE](./LICENSE).
