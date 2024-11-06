import { Container, Typography, Box } from "@mui/material";
import { textStyles } from "../../utils/styles";

export default function HeroText({ headerText, bodyText }) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Typography sx={{ ...textStyles.header }}>{headerText}</Typography>
      <Typography sx={{ ...textStyles.body }}>{bodyText}</Typography>
    </Box>
  );
}
