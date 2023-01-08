import React from "react";
import data from "./assets/database.json";
import Person from "./Person";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const NewStack = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewBox = styled(Box)`
  width: 300px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function MartyrCards() {
  const cardsPerPage = 30;
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="main-container">
      <Typography color={'#1876d1'}  m={5} variant="h4">
        Şəhidlərimiz qürurumuzdur!
      </Typography>
      <NewBox>
        {data
          .sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .slice(cardsPerPage * page - cardsPerPage, cardsPerPage * page)
          .map((elem) => (
            <Person data={elem} key={elem.id} />
          ))}
      </NewBox>
      <NewStack spacing={3} margin={3}>
        <Pagination
          count={Math.ceil(data.length / cardsPerPage)}
          page={page}
          onChange={handleChange}
        />
        <Typography >Səhifə: {page}</Typography>
      </NewStack>
    </div>
  );
}

export default MartyrCards;
