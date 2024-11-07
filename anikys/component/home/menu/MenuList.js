import { Container, Typography, Stack } from "@mui/material";
import MenuCategory from "./menu-category/MenuCategory";
import { textStyles } from "../../../utils/styles";

export default function MenuList({ menuItems }) {
  return (
    <Container>
      <Typography sx={textStyles.header}>Our Menu</Typography>
      <Stack spacing={5}>
        {menuItems.map((category) => (
          <MenuCategory category={category} />
        ))}
      </Stack>
    </Container>
  );
}
