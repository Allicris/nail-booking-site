import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Nail Booking
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Nails......
        </p>
        <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/services">
                Services
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/savedAppointments">
                Saved Appointments
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;

// import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
// import CancelIcon from '@material-ui/icons/Cancel';
// import { useSelector } from 'react-redux';
// import LogOutBtn from './LogOutBtn';
// import AppointmentForm from './AppointmentForm'; 

// const NavBar = () => {
//   const [toggleNavClass, setToggleNavClass] = useState('');
//   const [isClicked, setIsClicked] = useState(true);

//   const isLoggedIn = useSelector((state) => state.user.logIn);
//   const user = useSelector((state) => state.user);

//   const changeButtonName = () => {
//     setIsClicked(!isClicked);
//   };

//   const handleToggle = () => {
//     setToggleNavClass(toggleNavClass === ' active' ? '' : ' active');
//     changeButtonName();
//   };

//   const closeToggle = () => {
//     setToggleNavClass('');
//     changeButtonName();
//   };

//   // Replace this with your actual scheduling function
//   const scheduleAppointment = (appointmentData) => {
//     console.log('Scheduled appointment:', appointmentData);
//     // Add your logic to send the appointment data to the server
//   };

//   return (
//     <header className="header">
//       <div className="nav__logo">
//         <Link to="/">
//           <h3>Book your appointment here</h3>
//         </Link>
//       </div>
//       <div className="nav__toggle">
//         <button type="button" className={`header_button${toggleNavClass}`} onClick={handleToggle}>
//           {isClicked ? (
//             <MenuIcon />
//           ) : (
//             <CancelIcon />
//           )}
//         </button>
//       </div>
//       <nav className="nav">
//         {isLoggedIn ? (
//           <div className={`nav__items${toggleNavClass}`}>
//             <span>{`Welcome ${user.user.username}`}</span>
//             <NavLink exact to="/aboutus" activeClassName="selected" onClick={closeToggle}>
//               About Us
//             </NavLink>
//             <NavLink exact to="/appointments" activeClassName="selected" onClick={closeToggle}>
//               Appointments
//             </NavLink>
//             <NavLink exact to="/services" activeClassName="selected" onClick={closeToggle}>
//               Services
//             </NavLink>
//             <LogOutBtn />

//             {/* Add the AppointmentForm component here */}
//             <AppointmentForm onScheduleAppointment={scheduleAppointment} />
//           </div>
//         ) : (
//           <div className={`nav__auth${toggleNavClass}`}>
//             <NavLink exact to="/login" activeClassName="selected" onClick={closeToggle}>
//               Login
//             </NavLink>
//             <NavLink exact to="/signup" activeClassName="selected" onClick={closeToggle}>
//               Sign Up
//             </NavLink>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default NavBar;
