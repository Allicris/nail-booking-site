import React, { useState } from 'react';
import { SAVE_APPOINTMENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const AppointmentForm = ({ selectedServices, removeService }) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  
  const handleRemoveService = (service) => {
    removeService(service);
  };

  const [saveAppointment, { error }] = useMutation
  (SAVE_APPOINTMENT, {});
  
  const handleSubmit = async (e) => {
    e.preventDefault();

     // Validate form inputs (add more validation as needed)
    if (!appointmentDate || !appointmentTime) {
      alert('Please fill in all fields');
      return;
    }

    // Create an appointment object
    const appointment = {
      services: selectedServices,
      appointmentDate,
      appointmentTime,
    };

   try {
    const { data } = await saveAppointment({
      variables:{
        appointment
      },
    });
    // Clear the form inputs
    setAppointmentDate('');
    setAppointmentTime('');
    setSelectedServices([]);
   } catch(err) {
    console.error(err);
   }
  };

  // Define styles for the button
  const buttonStyle = {
    backgroundColor: '#FF69B4', // Change the button background color
    color: 'white', // Change the text color
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  // Define styles for the container
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center elements horizontally
  };

  // Define styles for the input fields
  const inputStyle = {
    marginBottom: '20px', // Add spacing below each input field
  };

  // Define styles for the header
  const headerStyle = {
    color: 'blue', // Change the header text color to blue
    fontSize: '24px', // Adjust the font size as needed
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form >

        <div>
          <label>Selected Services:</label>
          <ul>
            {selectedServices.map((service) => (
              <li key={service._id}>{service.name}
              <button onClick={() => handleRemoveService(service)}>Remove</button>
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
          <button onClick={() => handleSubmit()}>Schedule Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
