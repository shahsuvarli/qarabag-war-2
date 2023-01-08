import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1876d1",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "sticky",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Typography color="#fff" variant="subtitle1" fontWeight={700}>
            Copyright &#169; {`${new Date().getFullYear()}`}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
