import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "moment/locale/az";
import { Button, Link, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function InfoModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={open}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "60%",
            outline: "none",
            borderRadius: 14,
          }}
        >
          <Box sx={style}>
            <Typography component="h1">Hormətli istifadəçi,</Typography>
            <br />
            <Typography>
              Sayt 2020-ci ildə Qarabağ uğrunda gedən döyüşlərdə və 2022-ci il
              12-13 sentyabr tarixlərində erməni təxribatının qarşısının
              alınmasında qəhrəmancasına mübarizə aparmış şəhidlərimizin əziz
              xatirəsinə həsr olunmuşdur.
            </Typography>
            <br />
            <Typography>
              İnformasiya dəstəyinə görə{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/rufatmammadli/"
              >
                Rüfət Məmmədli
              </a>
              yə təşəkkürlər.
            </Typography>
            <br />
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                target="_blank"
                href="http://shahsuvarli.com"
                variant="outlined"
              >
                shahsuvarli.com
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
