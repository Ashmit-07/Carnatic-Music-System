# Sruthi Website Run Guide

This guide explains how to start the React frontend and Flask backend locally on Windows.

## 1) Start the backend

Open PowerShell and run:

```powershell
cd C:\Users\ashmi\OneDrive\Desktop\Programming\Capstone\Carnatic Music System\backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

The backend runs at:
- http://127.0.0.1:5000

To check it is working:

```powershell
curl http://127.0.0.1:5000/api/status
```

Expected response:

```json
{"status":"ok"}
```

## 2) Start the frontend

Open a second PowerShell window and run:

```powershell
cd C:\Users\ashmi\OneDrive\Desktop\Programming\Capstone\Carnatic Music System\frontend
npm install
npm run dev
```

The frontend runs at:
- http://localhost:5173

## 3) Open the website

Open this URL in a browser:

- http://localhost:5173

## 4) How frontend and backend communicate

The React app uses the Flask API directly with the full URL in development.

Examples used in the app:

```js
const API_BASE = 'http://127.0.0.1:5000'
fetch(`${API_BASE}/api/compositions`)
fetch(`${API_BASE}/api/compositions`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Demo', content: 'S R G M' })
})
```

This is the Option A setup: simple and enough for local development.

## 5) Save behavior

When you click Save on the Compose page, the frontend sends a POST request to:
- http://127.0.0.1:5000/api/compositions

The Flask server stores the composition in SQLite at:
- backend/sruthi.db

## 6) Troubleshooting

If the frontend cannot reach the backend:
- Make sure the backend is still running.
- Make sure you are calling http://127.0.0.1:5000, not localhost.
- Make sure the browser is not blocking cross-origin requests.
- The backend includes CORS headers for local development so the browser can accept requests from http://localhost:5173.

If npm install fails:
- Check that Node.js is installed.
- Try:

```powershell
node -v
npm -v
```

If Python fails:
- Check that Python is installed:

```powershell
python --version
```
