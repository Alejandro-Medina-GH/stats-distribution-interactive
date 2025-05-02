from pydantic import BaseModel, field_validator
from typing import List

### Define Stats Model

class Stats(BaseModel):
    mean: float
    variance: float


class NormalResult(BaseModel):
    data: List[float]
    stats: Stats

