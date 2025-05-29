import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Input } from "@mui/material";
import {
  deleteUser,
  deleteAllUsers,
  updateUser as updateUserAction,
} from "../store/slices/UserSlice";
import Box from "@mui/material/Box";
import ButtonM from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const ModalForUpdate = ({ user, onClose, onUpdate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    debugger;
    if (user) {
      setOpen(true);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    } else {
      setOpen(false);
    }
  }, [user]);

  return (
    <div>
      <ButtonM onClick={handleOpen}>Open modal</ButtonM>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update User
          </Typography>

          <div
            style={{
              height: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Button
              onClick={() =>
                onUpdate({
                  id: user.id,
                  name,
                  email,
                  phone,
                })
              }
            >
              Update
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const DisplayUsers = () => {
  const [updateUser, setUpdateUser] = useState(null);

  const dispatch = useDispatch();
  const usersData = useSelector((store) => store.users.users);

  const delete1User = (id) => {
    dispatch(deleteUser(id));
  };

  const deleteAll = () => {
    dispatch(deleteAllUsers());
  };

  const onUpdateUser = (newUpdatedUser) => {
    dispatch(updateUserAction(newUpdatedUser));
  };

  const onUpdateClick = (data) => {
    debugger;
    setUpdateUser(data);
  };

  console.log("updateUser state", updateUser);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.id}</TableCell>
                <TableCell
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => delete1User(data.id)}
                  >
                    delete
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => onUpdateClick(data)}
                  >
                    update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalForUpdate
        user={updateUser}
        onUpdate={onUpdateUser}
        onClose={() => setUpdateUser(null)}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => deleteAll()}
          variant="contaied"
          style={{ background: "red", color: "white" }}
        >
          Delete All User
        </Button>
      </div>
    </>
  );
};

export default DisplayUsers;
