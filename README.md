# KeyTrap 🎹

A deceptive keyboard-training web app that secretly tracks user key patterns and triggers a hidden surprise when a specific sequence is played.

Built as my first shipped project of 2026 to demonstrate real MERN fundamentals: event-driven UI logic, media control, pattern detection, and backend API integration.

---

## What the user thinks it is

A simple browser game to practice finger coordination by pressing keys and hearing sound feedback.

## What it actually is

A hidden interaction system that:

- Listens to every keyboard key press
- Tracks the last **N** keys using a sliding-window algorithm
- Detects a secret key pattern
- Freezes the UI and plays a surprise media moment
- Sends an event to the backend to increment a global counter

No hints. No visible clues.

---

## Tech Stack

**Frontend**
- React (Vite)
- Hooks: `useRef`, `useEffect`
- Audio playback using `.wav` / `.mp3`
- Global keyboard event handling

**Backend**
- Node.js
- Express
- CORS-enabled REST API
- In-memory event counter (MongoDB planned)

## Project Structure

```text
01Keytrap/
├─ client/        # Vite + React
├─ server/        # Node + Express API
├─ README.md
└─ deploy.md
```


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/rickroll/count` | Returns how many users have triggered the trap |
| POST | `/api/rickroll` | Increments the counter when the trap activates |

---

## Run Locally

### Frontend

```bash
cd client
npm install
npm run dev
```

Runs at: http://localhost:5173

### Backend
```bash
cd server
npm install
node index.js
```

Runs at: http://localhost:5000

### Test API:

http://localhost:5000/api/rickroll/count

## Why this project matters

KeyTrap is not a meme project.

It proves my ability to design:

- Event-driven React applications  
- Sliding-window pattern detection logic  
- Media control with DOM refs  
- Backend API integration using Express  
- Product-thinking beyond CRUD interfaces  

## Roadmap

- [ ] Connect frontend trap trigger to backend counter  
- [ ] Persist the counter using MongoDB  
- [ ] Support multiple hidden key patterns  
- [ ] Add a public leaderboard page  
- [ ] Deploy frontend and backend as separate services  
