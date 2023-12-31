import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";
import image from "../../../public/Logo_no_background2.png";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={image} alt="UPS Logo" className="logo" onClick={() => navigate("/")}></img>
      </div>

      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")} className="button">Sign Up</button>
            <button onClick={() => navigate("/login")} className="button">Login</button>
          </>
        ) : (
          <button onClick={() => logout()} className="button">Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
