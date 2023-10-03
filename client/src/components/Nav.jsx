import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-black text-white mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <div style={{ width: '100%' }}>
          <Link className="text-white" to="/">
            <img src={logo} alt="M.A.A. Nail Haven Logo" style={{ width: '50%' }} />
          </Link>
        </div>
        <h1 className="m-0" style={{ fontSize: '3rem', fontFamily: 'Berkshire Swash, cursive' }}>
          M.A.A. Nail Haven
        </h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700', fontFamily: 'Berkshire Swash, cursive' }}>
          It's all about nails...
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-light m-2" to="/aboutus">
                About Us
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/services">
                Services
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/savedAppointments">
                Saved Appointments
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/aboutus">
                About Us
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
