// import React from 'react';
// import {useMutation } from '@apollo/client';
// import { REMOVE_APPOINTMENT } from '../utils/mutations';

// const RemoveAppointmentButton = ({ userId, appointmentId }) => {
//   const [removeAppointment] = useMutation(REMOVE_APPOINTMENT);

//   const handleRemoveAppointment = async () => {
//     try {
//       const { data } = await removeAppointment({
//         variables: {
//           userId,
//           appointmentId,
//         }
//       });
//           console.log('Remove Appointment response:', data);
//     }
//     catch (error) {
//       console.error('Error removing appointment:', error.message);
//     }
//   };
//   return (
//     <button onClick={handleRemoveAppointment}>Remove Appointment</button>
//   );
// };

// export default RemoveAppointmentButton;
import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_APPOINTMENT } from '../utils/mutations';

const RemoveAppointmentButton = ({ userId, appointmentId }) => {
  const [removeAppointment] = useMutation(REMOVE_APPOINTMENT);

  const handleRemoveAppointment = async () => {
    try {
      const { data } = await removeAppointment({
        variables: {
          userId,
          appointmentId,
        },
      });
      console.log('Remove Appointment response:', data);
    } catch (error) {
      console.error('Error removing appointment:', error.message);
    }
  };

  return (
    <button
      onClick={handleRemoveAppointment}
      style={{ backgroundColor: '#FC8EAC', color: 'white' }} // Set button color here
    >
      Remove Appointment
    </button>
  );
};

export default RemoveAppointmentButton;
