import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser } from "./features/userSlice";

const TableComponent = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.user);

  const handleUpdate = (id) => {
    const existingUser = usersList.filter((user) => user.id === id)[0];
    dispatch(updateUser({ id: id, name: "Hello", email: "Hello@gmail.com" }));
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: "1rem" }}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList?.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{user.id}</TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(user.id)}
                  >
                    edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(removeUser(user.id))}
                  >
                    delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
