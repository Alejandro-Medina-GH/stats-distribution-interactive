from fastapi import FastAPI
from .routers.distributions import router as dist_router



app = FastAPI(
    title="Statistics Distribution Explorer",
    version="0.1.0"
)

app.include_router(
    dist_router,
    prefix="/api/distributions",
    tags=["distributions"]
)

@app.get("/api/health")
def health():
    return {"status": "ok"}



