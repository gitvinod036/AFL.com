# AFL Cognitive Systems — Enterprise Website

Premium enterprise website for **AFL Cognitive Systems Private Limited**, featuring Explainable AI, Agentic AI, RAG, and Autonomous AI solutions for Banking and Healthcare.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion |
| Backend    | Django 5.2, Django REST Framework   |
| Database   | PostgreSQL 16                       |

## Project Structure

```
├── frontend/          # React SPA
├── backend/           # Django REST API
├── docker-compose.yml # PostgreSQL container
└── venv/              # Python virtual environment
```

## Quick Start

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 2. Backend (SQLite — no Docker)

```bash
# From project root
copy backend\.env.example backend\.env

.\venv\Scripts\python backend\manage.py migrate
.\venv\Scripts\python backend\manage.py runserver
```

API available at [http://localhost:8000/api/](http://localhost:8000/api/)

### 3. Backend (PostgreSQL — with Docker)

```bash
docker compose up -d

# Update backend/.env: set USE_SQLITE=false
.\venv\Scripts\python backend\manage.py migrate
.\venv\Scripts\python backend\manage.py runserver
```

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/health/`    | Health check             |
| POST   | `/api/inquiries/` | Submit contact/demo form |

### Example inquiry payload

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company_name": "Acme Corp",
  "phone": "+91 98765 43210",
  "message": "Interested in the Banking platform demo.",
  "inquiry_type": "demo"
}
```

## Pages

- **Home** — Hero, solutions preview, AI capabilities, stats, publication teaser
- **About** — Mission, vision, values, company timeline
- **Solutions / Healthcare** — Explainable Claims Copilot
- **Solutions / Banking** — The Autonomous Financial Layer (AFL)
- **AI Capabilities** — Technology stack overview
- **Why AFL** — Differentiators and comparison
- **Publication** — Featured book showcase (Coming Soon)
- **Contact** — Demo booking & contact form

## Features

- Dark / Light theme toggle
- Glassmorphism UI with smooth animations
- Fully responsive design
- Accessibility optimized (ARIA labels, focus states, semantic HTML)
- SEO meta tags
- Animated statistics
- Interactive solution cards
- Timeline sections

## Production Build

```bash
cd frontend
npm run build
```

Serve the `frontend/dist` folder via your preferred static host, with API proxy to Django.

## License

© AFL Cognitive Systems Private Limited. All rights reserved.
