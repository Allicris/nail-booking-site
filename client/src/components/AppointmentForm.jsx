// import React, { useState } from 'react';
// import { SAVE_APPOINTMENT } from '../utils/mutations';
// import { useMutation } from '@apollo/client';

// const AppointmentForm = ({ selectedServices, removeService }) => {
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [appointmentTime, setAppointmentTime] = useState('');

//   const handleRemoveService = (service) => {
//     removeService(service);
//   };

//   const [saveAppointment, { error }] = useMutation(SAVE_APPOINTMENT);


//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!appointmentDate || !appointmentTime) {
//       alert('Please fill in all fields');
//       return;
//     }

// console.log(selectedServices)

//     const appointment = {
//       services: selectedServices.map((service) => ({
//         name: service.name,
//         price: service.price,
//         description: service.description
//       })),
//       appointmentDate,
//       appointmentTime,
//     };
//     console.log('Appointment Data:', appointment);
    
//     try {
//       const { data } = await saveAppointment({
//         variables: {
//           appointmentData: appointment
//           },
//       });
//       console.log('Mutation Response:', data);

//       // Clear the form inputs
//       setAppointmentDate('');
//       setAppointmentTime('');
//       window.location.href = '/'
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Define styles for the button
//   const buttonStyle = {
//     backgroundColor: '#FC8EAC', // Change the button background color to #FC8EAC
//     color: 'white', // Change the text color
//     border: 'none',
//     borderRadius: '10px',
//     padding: '10px 20px',
//     cursor: 'pointer',
//   };

//   // Define styles for the container
//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center', // Center elements horizontally
//   };

//   // Define styles for the input fields
//   const inputStyle = {
//     marginBottom: '20px', // Add spacing below each input field
//   };

//   // Define styles for the header
//   const headerStyle = {
//     color: '#66FCF1', // Change the header text color to blue
//     fontSize: '24px', // Adjust the font size as needed
//   };

//   // Define styles for the Remove buttons
//   const removeButtonStyle = {
//     backgroundColor: '#FC8EAC', // Change the button background color to #FC8EAC
//     color: 'white', // Change the text color
//     border: 'none',
//     borderRadius: '5px',
//     padding: '5px 10px',
//     cursor: 'pointer',
//   };

//   // Define styles for the list items
//   const listItemStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };

//   return (
//     <div>
//       <h2 style={headerStyle}>Schedule an Appointment</h2>
//       <form>

//         <div>
//           <label>Selected Services:</label>
//           <ul>
//             {selectedServices.map((service) => (
//               <li key={service.id} style={listItemStyle}>
//                 {service.name}
//                 <button style={removeButtonStyle} onClick={() => handleRemoveService(service)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div style={inputStyle}>
//           <label>Appointment Date:</label>
//           <input
//             type="date"
//             value={appointmentDate}
//             onChange={(e) => setAppointmentDate(e.target.value)}
//           />
//         </div>
//         <div style={inputStyle}>
//           <label>Appointment Time:</label>
//           <input
//             type="time"
//             value={appointmentTime}
//             onChange={(e) => setAppointmentTime(e.target.value)}
//           />
//         </div>
//         <div>
//           <button style={buttonStyle} onClick={() => handleSubmit()}>Schedule Appointment</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

import React, { useState } from "react";
import { SAVE_APPOINTMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const AppointmentForm = ({ selectedServices, removeService }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleRemoveService = (service) => {
    removeService(service);
  };

  const [saveAppointment, { error }] = useMutation(SAVE_APPOINTMENT);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (!appointmentDate || !appointmentTime) {
      alert("Please fill in all fields");
      return;
    }
  
    console.log(selectedServices);
  
    const appointment = {
      services: selectedServices.map((service) => ({
        name: service.name,
        price: service.price,
        description: service.description,
      })),
      appointmentDate,
      appointmentTime,
    };
    console.log("Appointment Data:", appointment);
  
    try {
      const { data } = await saveAppointment({
        variables: {
          appointmentData: appointment,
        },
      });
      console.log("Mutation Response:", data);
  
      // Clear the form inputs
      setAppointmentDate("");
      setAppointmentTime("");
    } catch (err) {
      console.error(err);
    }
  };

  // Define styles for the button
  const buttonStyle = {
    backgroundColor: "#FC8EAC", // Change the button background color to #FC8EAC
    color: "white", // Change the text color
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  // Define styles for the container
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center elements horizontally
  };

  // Define styles for the input fields
  const inputStyle = {
    marginBottom: "20px", // Add spacing below each input field
  };

  // Define styles for the header
  const headerStyle = {
    color: "#66FCF1", // Change the header text color to blue
    fontSize: "24px", // Adjust the font size as needed
  };

  // Define styles for the Remove buttons
  const removeButtonStyle = {
    backgroundColor: "#FC8EAC", // Change the button background color to #FC8EAC
    color: "white", // Change the text color
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  };

  // Define styles for the list items
  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <h2 style={headerStyle}>Schedule an Appointment</h2>
      <form>
        <div>
          <label>Selected Services:</label>
          <ul>
            {selectedServices.map((service) => (
              <li key={service.id} style={listItemStyle}>
                {service.name}
                <button
                  style={removeButtonStyle}
                  onClick={() => handleRemoveService(service)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={inputStyle}>
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div style={inputStyle}>
          <label>Appointment Time:</label>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <div>
          <button style={buttonStyle} onClick={handleSubmit}>
            Schedule Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
