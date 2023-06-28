import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users?.map((user, i) => <p key={user + i}>{user}</p>)
      )}
    </div>
  );
};

export default UserView;
