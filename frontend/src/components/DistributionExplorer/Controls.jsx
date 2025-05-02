import { Box, Slider, TextField, Button } from "@mui/material";

export default function Controls({
  mean, sigma, n, bins, 
  onBinChange, onMeanChange, onSigmaChange, onNChange,
  onGenerate
}) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <TextField
        label="Mean"
        type="number"
        value={mean}
        onChange={e => onMeanChange(parseFloat(e.target.value))}
      />
      <TextField
        label="Std Dev"
        type="number"
        value={sigma}
        onChange={e => onSigmaChange(parseFloat(e.target.value))}
      />
      <TextField
        label="Samples (n)"
        type="number"
        value={n}
        onChange={e => onNChange(parseInt(e.target.value))}
      />
      <TextField
        label="Bins"
        type="number"
        value={bins}
        onChange={e => onBinChange(parseInt(e.target.value))}
      />
      <Button variant="contained" onClick={onGenerate}>
        Generate
      </Button>
    </Box>
  );
}
