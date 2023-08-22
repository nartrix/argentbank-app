import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import { useSelector } from "react-redux";
import LogOut from "../btn-logout";
import personIcon from "../../assets/person.svg";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstName = useSelector((state) => state.auth.firstName).toUpperCase();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink
              className="main-nav-item"
              to="/profile"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  background: "#dedede",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "15px",
                }}
              >
                <img
                  src={personIcon}
                  alt="person icon"
                  style={{ width: "32px" }}
                />
              </div>
              {firstName}
            </NavLink>
            <LogOut />
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
