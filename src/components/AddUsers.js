import { Button } from "react-bootstrap";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";

const AddUsers = () => {
  // const users = useSelector((store) => store.users)
  const dispatch = useDispatch();

//   console.log("users==>", users);

  const addNewUser = (payload) => {
    console.log("payload", payload);
    dispatch(addUser(payload));
  };

  return (
    <div>
      <h2>Users List </h2>
      <Button className=""
       onClick={() => addNewUser(fakeUserData())}>
        Add Users
        </Button>
    </div>
  );
};

export default AddUsers;
