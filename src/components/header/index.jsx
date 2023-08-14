import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";

function Header() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <NavLink class="main-nav-item" to="/login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
