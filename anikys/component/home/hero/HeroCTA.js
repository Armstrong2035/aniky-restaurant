import { Button, Box } from "@mui/material";

export default function HeroCTA({ cta }) {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          borderRadius: "25px",
          whiteSpace: "nowrap",
          px: { xs: 3, sm: 5 }, // Adjust horizontal padding (px) for small screens
          py: { xs: 1.5, sm: 2 }, // Adjust vertical padding (py) for small screens
          fontSize: { xs: "0.875rem", sm: "1rem" }, // Font size adjustment for small screens
          width: { xs: "100%", sm: "auto" }, // Full width on extra-small screens, auto on small and up
        }}
      >
        {cta[0]}
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "black",
          color: "black",
          borderRadius: "25px",
          whiteSpace: "nowrap",
          px: { xs: 3, sm: 5 },
          py: { xs: 1.5, sm: 2 },
          fontSize: { xs: "0.875rem", sm: "1rem" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {cta[1]}
      </Button>
    </Box>
  );
}
