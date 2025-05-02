import numpy as np
from ..schemas.distributions import Stats, NormalResult

def sample_normal(mu: float, sigma: float, n: int) -> NormalResult:
    if sigma <= 0:
        raise ValueError("sigma must be > 0")    
    if n <= 0:
        raise ValueError("n Must Be Greater than 0")
    
    sample = np.random.normal(mu, sigma, n)
    normalDistribution = NormalResult(
        data = sample.tolist(), 
        stats = Stats(
            mean = float(np.mean(sample)), 
            variance = float(np.var(sample))
        )
    )
    return normalDistribution
