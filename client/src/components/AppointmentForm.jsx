//form for appointment
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

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Selected Services:</label>
          <ul>
            {selectedServices.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
           </ul> 
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <label>Appointment Time:</label>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Schedule Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;








