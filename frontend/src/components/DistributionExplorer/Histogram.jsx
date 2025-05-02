// Histogram.jsx
import {
    Chart as ChartJS,
    CategoryScale,   // for your x-axis labels
    LinearScale,     // for the numeric y-axis
    BarElement,      // the bar “shape”
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  // register them so Chart.js knows about them:
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  // …rest of your imports
  import { Bar } from 'react-chartjs-2';
// Simple histogram binning
function computeHistogram(samples, bins = 20) {
  if (!samples.length) return { labels: [], counts: [] };
  const min = Math.min(...samples), max = Math.max(...samples);
  const width = (max - min) / bins;
  const counts = Array(bins).fill(0);
  samples.forEach(v => {
    let idx = Math.floor((v - min) / width);
    if (idx === bins) idx = bins - 1;
    counts[idx]++;
  });
  const labels = counts.map((_, i) => (min + width*(i + 0.5)).toFixed(1));
  return { labels, counts };
}

export default function Histogram({ samples, bins }) {
  const { labels, counts } = computeHistogram(samples, bins);
  const data = { labels, datasets: [{ label: "Frequency", data: counts }] };
  return <Bar data={data} />;
}
