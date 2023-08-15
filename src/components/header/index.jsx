import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import { useSelector } from "react-redux";
import LogOut from "../btn-logout";

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
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <div>
            <NavLink className="main-nav-item" to="/profile">
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
