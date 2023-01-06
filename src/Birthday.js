import React from "react";
import moment from 'moment'
import 'moment/locale/az'
import { Box, Typography } from "@mui/material";
import Person from "./Person";
import data from './assets/database.json'

function Birthday() {
  const today = moment().format("L").slice(0, 5);

  return (
    <div>
      <Typography
        display={"inline-block"}
        mt={7}
        mb={3}
        style={{ color: "#1876d1" }}
        variant="h4"
      >
        Doğum günü bu gün olan şəhidlərimiz
      </Typography>
      <Box style={{ display: "flex", flexWrap: "wrap", gap: 15 }} mt={5} mb={5}>
        {data
          .filter((person) => person.date.startsWith(today))
          .map((person) => (
            <Person key={person.id} data={person} />
          ))}
      </Box>
    </div>
  );
}

export default Birthday;
