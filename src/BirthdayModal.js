import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import data from "./assets/database.json";
import Person from "./Person";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BirthdayModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
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
            width: 800,
            outline: "none",
            borderRadius: 14,
          }}
        >
          <Box sx={style}>
            <Box style={{ display: "flex", flexWrap: "wrap" }}>
              {data
                .filter((person) => person.date.startsWith("04.01"))
                .map((person) => (
                  <Person key={person.id} data={person} />
                ))}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
