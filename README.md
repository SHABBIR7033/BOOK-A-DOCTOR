Book a Doctor — Run instructions

This workspace contains a React + Vite frontend (`Client/`) and an Express + MongoDB backend (`Server/`).

Quick steps to run locally (Windows PowerShell):

1) Ensure MongoDB is running locally or update `Server/.env` with a reachable MONGO_URI.

2) From a PowerShell window, start the server and client using the provided helper script (recommended):

```powershell
# from the project root (where this README.md is)
./run-dev.ps1
```

This will open two new PowerShell windows: one running the server (nodemon) and one running the client (Vite). Check their consoles for the printed URLs.

3) Manual start (if you prefer separate terminals):

Server:
```powershell
Set-Location -Path "C:\Users\mdsho\Desktop\Internships\Skill Wallet\BOOK A DOCTOR\Server"
# copy .env.example -> .env and set values
$env:MONGO_URI='mongodb://127.0.0.1:27017/book-a-doctor'
$env:PORT='5001'
npm run dev
```

Client:
```powershell
Set-Location -Path "C:\Users\mdsho\Desktop\Internships\Skill Wallet\BOOK A DOCTOR\Client"
npm run dev
```

4) Smoke checks:
- Server health: http://localhost:5001/api/health
- Client: http://localhost:5173/ (Vite may pick next available port if 5173 is in use)

Notes & troubleshooting:
- If ports are in use, change `$env:PORT` before starting the server. Vite will choose the next available port automatically.
- If the server cannot connect to MongoDB, ensure mongod is running or use a Docker container:
```powershell
docker run -d -p 27017:27017 --name book-a-doctor-mongo mongo:6
```
- The Server already includes `.env.example` in `Server/.env.example`.

If you'd like, I can add a top-level `package.json` that uses `concurrently` to run both, or add a one-command npm script. Tell me which you'd prefer.