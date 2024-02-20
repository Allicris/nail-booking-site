import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import logo from "../assets/images/logo.png";
import logIn from "../assets/images/log-in.png";
import addUser from "../assets/images/add-user.png";
import nailGlitter from "../assets/images/nailglitter.png";
import info from "../assets/images/information.png";
import appointments from "../assets/images/appointments.png";
import logOut from "../assets/images/logout.png";
import nailServices from "../assets/images/nailservices.png";

const Navbar = () => {
  const signatureFont = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: "400",
    color: "#FD5C7E",
  };

  const displayFlex = {
    display: "flex",
    justifyContent: "space-around",
  };

  const marginTop = {
    marginTop: "20px",
  };

  const marginBottom = {
    marginBottom: "40px",
  };

  const pinkHeaderStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "100",
    color: "#FDAABD",
    fontSize: "30px",
    margin: "50px",
  };

  const xsmImg = {
    maxWidth: "17px",
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div
        className="img-fluid text-center"
        style={{ width: "100%", ...marginBottom }}
      >
        <Link className="text-white" to="/">
          <img
            src={logo}
            alt="M.A.A. Nail Haven Logo"
            style={{ width: "50%", paddingTop: "50px" }}
          />
        </Link>
      </div>
      <div style={displayFlex}>
        <div>
          <h1
            className="text-white m-9"
            style={{
              fontSize: "4rem",
              fontFamily: "'Playfair Display', serif",
              ...marginBottom,
            }}
          >
            M.A.A. Nail Haven
          </h1>
          <p
            className="m-0"
            style={{
              fontStyle: "italic",
              ...signatureFont,
              ...pinkHeaderStyle,
              paddingBottom: "70px",
            }}
          >
            It's all about nails . . .
            <img
              src={nailGlitter}
              alt="about us"
              style={{ maxWidth: "50px" }}
            />
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
                <img src={logOut} alt="log out" style={xsmImg} />
                &nbsp; Logout &nbsp;
              </button>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/aboutus"
              >
                <img src={info} alt="about us" style={xsmImg} />
                &nbsp; About Us
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/services"
              >
                <img src={nailServices} alt="services" style={xsmImg} />
                &nbsp; Services &nbsp;
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/saveAppointments"
              >
                <img
                  src={appointments}
                  alt="saved appointments"
                  style={xsmImg}
                />
                &nbsp; Saved Appointments
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/aboutus"
              >
                <img src={info} alt="about us" style={xsmImg} />
                &nbsp; About Us
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/login"
              >
                <img src={logIn} alt="about us" style={xsmImg} />
                &nbsp; Login &nbsp;
              </Link>
              <Link
                className="btn btn-sm btn-light m-2"
                style={signatureFont}
                to="/signup"
              >
                <img src={addUser} alt="about us" style={xsmImg} />
                &nbsp; Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
