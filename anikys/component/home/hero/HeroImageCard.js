import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function Component({ image }) {
  return (
    <Card
      sx={{
        backgroundColor: "#F3FFCF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "25px",
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: 200,
          }}
        >
          <Image
            src={image}
            alt={"abula"}
            layout="fill"
            style={{ borderRadius: "25px", objectFit: "cover" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
