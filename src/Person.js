import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

function Person({ data }) {
  return (
    <Card className="person-container" sx={{ height: 250, width: 170 }}>
      <CardMedia
        sx={{ height: 200}}
        component="img"
        image={require(`./assets/${data.img}`)}
        title={data.name}
      />
      <Typography sx={{textAlign:'center'}} gutterBottom>{data.name}</Typography>
    </Card>
  );
}

export default Person;
