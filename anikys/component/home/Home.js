"use client";

import { Container, Grid2 } from "@mui/material";
import HeroText from "./HeroText";
import HeroImageCard from "./HeroImageCard";
import HeroCTA from "./HeroCTA";

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
