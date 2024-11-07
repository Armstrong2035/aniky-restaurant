import {
  Card,
  CardContent,
  Container,
  Box,
  Grid2,
  Stack,
  Typography,
  CardHeader,
} from "@mui/material";
import MenuCategoryDescription from "./MenuCategoryDescription";
import Image from "next/image";
import { textStyles } from "../../../../utils/styles";

export default function MenuCategory({ category }) {
  return (
    <Grid2 container spacing={3} direction={"row"}>
      <Grid2 size={{ lg: 6, sm: 12 }}>
        <Box style={{ position: "relative", height: "80vh" }}>
          <Image
            src={category.image} // corrected from "scr" to "src"
            alt={category.category} // adding alt for accessibility
            layout="fill" // fills the container (height: "80vh")
            style={{ objectFit: "cover", borderRadius: "25px" }} // adjusted objectFit style
          />
        </Box>
      </Grid2>

      <Grid2 size={{ lg: 6, sm: 12 }}>
        <Box>
          <Card sx={{ backgroundColor: "#F3FFCF", borderRadius: "25px" }}>
            <CardHeader
              sx={textStyles.secondaryHeader}
              title={category.category}
            />

            <CardContent>
              {category.items.map((item) => (
                <MenuCategoryDescription item={item} />
              ))}
            </CardContent>
          </Card>
        </Box>
      </Grid2>
    </Grid2>
  );
}
