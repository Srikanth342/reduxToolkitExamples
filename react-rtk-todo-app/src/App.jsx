import { Button, Grid } from "@mui/material";
import "./App.css";
import TableComponent from "./TableComponent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpenModel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (name !== "" && email !== "") {
      let payload = {
        id: usersList[usersList?.length - 1]?.id + 1,
        name: name,
        email: email,
      };
      dispatch(addUser(payload));
      setOpen(false);
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpenModel}>
        Create +
      </Button>
      <TableComponent />
      <Dialog fullWidth maxWidth={"sm"} open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
