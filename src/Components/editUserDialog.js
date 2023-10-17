import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";

export default function EditUserDialog({
  open,
  handleClickOpen,
  handleClose,
  editUserInfo,
  setRows,
  rows,
}) {
  useEffect(() => {
    console.log(editUserInfo);
  }, [editUserInfo]);

  function handleChangeFirstName(e) {
    editUserInfo[0].firstName = e.target.value;
  }

  function handleChangeLastName(e) {
    editUserInfo[0].lastName = e.target.value;
  }

  function handleChangePhone(e) {
    editUserInfo[0].phone = e.target.value;
  }

  function handleChangeEmail(e) {
    editUserInfo[0].email = e.target.value;
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="string"
            fullWidth
            variant="standard"
            value={editUserInfo[0].firstName}
            onChange={handleChangeFirstName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="string"
            fullWidth
            variant="standard"
            value={editUserInfo[0].lastName}
            onChange={handleChangeLastName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="Number"
            fullWidth
            variant="standard"
            value={editUserInfo[0].phone}
            onChange={handleChangePhone}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={editUserInfo[0].email}
            onChange={handleChangeEmail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
