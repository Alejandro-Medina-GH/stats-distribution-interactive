from pydantic import BaseModel
from typing import List

### Define Stats Model

class Stats(BaseModel):
    mean: float
    variance: float

class NormalResult(BaseModel):
    data: List[float]
    stats: Stats