import { useState } from "react";
import Controls from "./Controls";
import Histogram from "./Histogram";
import { Box, Typography } from "@mui/material";



export default function DistributionExplorer(){
    const [mean, setMean] = useState(0);
    const [sigma, setSigma] = useState(1);
    const [n, setSampleSize] = useState(1000);
    const [samples, setSamples] = useState([]);
    const [stats, setStats] = useState({mean:0, variance:0});
    const [bins, setBins] = useState(20);
    const [appliedBins, setAppliedBins] = useState(20);

    const fetchData = async() => {
        const res = await fetch(
            `http://localhost:8000/api/distributions/normal` + `?mean=${mean}&sigma=${sigma}&n=${n}`
        );

        const data = await res.json();
        console.log("Fetched data payload:", data);
       
        setSamples(data.data);
        setStats(data.stats);
        setAppliedBins(bins);
    }
    
    return (
        <div>
          <h2>Normal Distribution Explorer</h2>
          <Controls
            mean={mean}
            sigma={sigma}
            n={n}
            bins={bins}
            onBinChange={setBins}
            onMeanChange={setMean}
            onSigmaChange={setSigma}
            onNChange={setSampleSize}
            onGenerate={fetchData}
          />
          <Histogram samples={samples} bins={appliedBins} />
            <Box sx={{ display: "flex", gap: 2 }}>
                <Typography><strong>Mean:</strong> {stats.mean.toFixed(2)}</Typography>
                <Typography><strong>Variance:</strong> {stats.variance.toFixed(2)}</Typography>
            </Box>
        </div>
      );
}
    