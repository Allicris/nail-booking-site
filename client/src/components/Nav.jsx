import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const signatureFont = {
    fontFamily: "Playfair Display, serif",
    fontWeight: "400",
    color: "#FD5C7E",
  };

  const displayFlex = {
    display: "flex",
    justifyContent: "space-around",
  };

  const marginTop = {
    marginTop: "20px"
  }

  const marginBottom = {
    marginBottom: "40px"
  }

  const pinkHeaderStyle = {
    fontFamily: "Roboto, serif",
    color: "#FDAABD",
    fontSize: "30px",
    margin: "50px",
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="img-fluid text-center" style={{ width: "100%", ...marginBottom }}>
        <Link className="text-white" to="/">
          <img
            src={logo}
            alt="M.A.A. Nail Haven Logo"
            style={{ width: "50%", paddingTop: '50px' }}
          />
        </Link>
      </div>
      <div style={displayFlex}>
        <div>
          <h1
            className="text-white m-9"
            style={{ fontSize: "4rem", fontFamily: "Playfair Display, serif", ...marginBottom }}
          >
            M.A.A. Nail Haven
          </h1>
          <p className="m-0" style={{fontStyle: "italic", ...signatureFont, ...pinkHeaderStyle, paddingBottom: '70px' }}>
            It's all about nails . . .
          </p>
        </div>
        <div className="d-flex flex-column" style={marginTop}>
          {Auth.loggedIn() ? (
            <>
              <button
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                onClick={logout}
              >
                Logout
              </button>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/aboutus"
              >
                About Us
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/services"
              >
                Services
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/saveAppointments"
              >
                Saved Appointments
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/aboutus"
              >
                About Us
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
