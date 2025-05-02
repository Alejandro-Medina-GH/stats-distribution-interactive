from fastapi import FastAPI
from .routers.distributions import router as dist_router
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(
    title="Statistics Distribution Explorer",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            # allow all origins (for dev)
    allow_credentials=True,
    allow_methods=["*"],            # allow GET, POST, etc.
    allow_headers=["*"],            # allow all headers
)

app.include_router(
    dist_router,
    prefix="/api/distributions",
    tags=["distributions"]
)

@app.get("/api/health")
def health():
    return {"status": "ok"}



