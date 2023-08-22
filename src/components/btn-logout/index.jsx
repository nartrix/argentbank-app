import { useDispatch } from "react-redux";
import { authActions } from "../../features/auth/authSlice";
import iconLogout from "../../assets/logout.svg";

function LogOut() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div
        type="button"
        className="main-nav-item"
        onClick={handleLogout}
        style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
      >
        <img
          src={iconLogout}
          alt="icon logout"
          style={{ width: "32px", marginRight: "5px" }}
        />
        Sign Out
      </div>
    </>
  );
}

export default LogOut;
