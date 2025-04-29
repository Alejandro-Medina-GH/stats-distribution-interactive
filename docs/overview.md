Here’s the bird’s-eye view of our mini-project—what we’ll build, the major phases, and the tech stack we’ll lean on:

---

### 🏗️ What We’ll Build

- **Interactive Distribution Explorer**  
  A PWA where you pick a statistical distribution, tweak its parameters, and instantly see:

  - A live histogram (or density curve) of sampled data
  - Key summary statistics (mean, variance, etc.)
  - (Later) A “Law of Large Numbers” demo showing convergence of sample means

- **Why It Matters**
  - Shows React proficiency (Hooks, state, Material UI/PWA)
  - Shows Python chops (FastAPI, NumPy/SciPy, Pydantic)
  - Demonstrates modern DevOps (Docker → Compose → Kubernetes)
  - Speaks directly to data-science workflows: fast sampling, summary stats, interactive viz

---

### 🛠️ Tech Stack

| Layer                | Technology                                  | Purpose                                      |
| -------------------- | ------------------------------------------- | -------------------------------------------- |
| **Frontend**         | React (with Hooks + Context)                | UI framework                                 |
|                      | Vite or Create-React-App                    | Dev/build tooling                            |
|                      | Material UI (MUI)                           | Prebuilt components & theming                |
|                      | Chart.js or Recharts                        | Easy React-friendly plotting                 |
|                      | React Query (optional)                      | Data fetching & caching                      |
|                      | TypeScript (optional)                       | Static types for safety                      |
| **Backend**          | FastAPI + Uvicorn                           | High-performance Python API                  |
|                      | NumPy / SciPy                               | Sampling & distribution functions            |
|                      | Pydantic                                    | Request validation & auto docs               |
|                      | (Optional) SQLite / PostgreSQL + SQLAlchemy | If we want to persist parameter sets or logs |
| **Containerization** | Docker + Docker Compose                     | Dev environment orchestration                |
|                      | Minikube / k3d                              | Local Kubernetes cluster                     |
|                      | Kubernetes Manifests                        | Deployment, Services, Healthchecks           |
| **CI/CD & Hosting**  | GitHub Actions (optional)                   | Build/test/publish pipelines                 |
|                      | Docker Hub / GitHub Container Registry      | Image hosting                                |
|                      | GKE / AWS EKS / Azure AKS Free Tier         | Cloud demo (optional)                        |

---

### 🚦 Major Phases

1. **Plan & Design**

   - Choose 1–2 distributions
   - Wireframe UI & define API endpoints

2. **Scaffold & Containerize**

   - Monorepo structure: `frontend/` + `backend/`
   - Dockerfiles + Compose for local spin-up

3. **Backend MVP**

   - FastAPI endpoints that return sampled data + stats

4. **Frontend MVP**

   - Sliders/inputs → `fetch()` → Chart.js rendering

5. **Kubernetes Demo**

   - Deploy both services on local k8s
   - Show you understand manifests & services

6. **Polish & Extend**

   - Add Material UI styling & React Query
   - Add extra distributions, LLN view, tests, README

7. **Rehearse**
   - Walk through end-to-end demo
   - Prepare talking points on architecture, scaling, and data-science value

---

With this overview in hand, we’ll sprint through an MVP today (one distribution, basic chart, Docker-Compose) and then polish up tomorrow (multi-distros, LLN, k8s, docs). Let me know if any of these tech choices or phases need tweaking!
