"use client";

import { Container, Grid2 } from "@mui/material";
import HeroText from "./hero/HeroText";
import HeroImageCard from "./hero/HeroImageCard";
import HeroCTA from "./hero/HeroCTA";

export default function Home({ heroContent }) {
  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
      }}
    >
      <Grid2 container direction={"row"} sx={{ width: "100%" }}>
        <Grid2
          size={{ lg: 6, sm: 12 }}
          direction={"column"}
          alignSelf={"center"}
        >
          <Container>
            {/* <HeroCredentials /> */}
            <HeroText
              headerText={heroContent.heroHeaderText}
              bodyText={heroContent.heroBodyText}
            />
            <HeroCTA cta={heroContent.cta} />
          </Container>
        </Grid2>
        <Grid2 size={{ lg: 6, sm: 12 }}>
          <HeroImageCard image={heroContent.heroImage} />
        </Grid2>
      </Grid2>
    </Container>
  );
}
