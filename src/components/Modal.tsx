"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  Input,
  Button,
  ButtonGroup,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Start tracking your product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter your Tracking ID
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className=" flex flex-col gap-6" >
            <Input placeholder="GHT-C65..." required type="text" />
            <Wrap spacing={4}>
              <WrapItem>
                <Button colorScheme="green">Track your product</Button>
              </WrapItem>
            </Wrap>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
