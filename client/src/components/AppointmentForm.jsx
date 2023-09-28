//form for appointment
import React, { useState } from 'react';

const AppointmentForm = ({ onScheduleAppointment }) => {
  const [name, setName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs (add more validation as needed)
    if (!name || !appointmentDate || !appointmentTime) {
      alert('Please fill in all fields');
      return;
    }

    // Create an appointment object
    const appointment = {
      name,
      appointmentDate,
      appointmentTime,
    };

    // Call the callback function to schedule the appointment
    onScheduleAppointment(appointment);

    // Clear the form inputs
    setName('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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








