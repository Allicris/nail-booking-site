import React, { useState } from 'react';

const AppointmentForm = ({ selectedServices, setSelectedServices }) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
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

    //still need to add submit form and add to user

    // Clear the form inputs
    setAppointmentDate('');
    setAppointmentTime('');
    setSelectedServices([]);
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
      <form onSubmit={handleSubmit} style={containerStyle}>
        <div style={inputStyle}>
          <label>Selected Services:</label>
          <ul>
            {selectedServices.map((service) => (
              <li key={service.id}>{service.name}</li>
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
        
        <button type="submit" style={buttonStyle}>Schedule Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
