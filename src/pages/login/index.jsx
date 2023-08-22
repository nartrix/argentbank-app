import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(authActions.updateToken(data.body));
      navigate("/profile");
    } catch (error) {
      console.error("Error:", error);
      window.alert("Email ou mot de passe incorrect", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label hmtlfor="email">
              Username
              <input type="text" id="email" required />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input type="password" id="password" required />
            </label>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
