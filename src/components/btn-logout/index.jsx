import { useDispatch } from "react-redux";
import { authActions } from "../../features/auth/authSlice";

function LogOut() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <button type="button" className="main-nav-item" onClick={handleLogout}>
      LogOut
    </button>
  );
}

export default LogOut;
