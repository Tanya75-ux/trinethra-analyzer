# Trinethra Analyzer

AI-powered web application to analyze supervisor feedback using a local LLM (Ollama).

## Features
- Extracts key evidence (positive/negative/neutral)
- Generates performance score (1–10)
- Maps feedback to KPIs
- Identifies gaps in evaluation
- Suggests follow-up questions

---

##  Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express)
- LLM: Ollama (phi3 model)

---

##  Setup Instructions

1. Install dependencies:
   npm install

2. Start backend:
   node backend/server.js

3. Install & run Ollama:
   - Download from https://ollama.com  
   - Run:
     ollama pull phi3

4. Open frontend:
   - Open `frontend/public/index.html` in browser
