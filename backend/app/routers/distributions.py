from fastapi import APIRouter, Query, HTTPException

from ..services.normal import sample_normal
from ..schemas.distributions import NormalResult

router = APIRouter()

@router.get("/normal", response_model=NormalResult, summary="Sample From A Normal Distribution")
def normal_dist(mean:float, sigma: float, n: int):
    try:
        return sample_normal(mean, sigma, n)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e)) 