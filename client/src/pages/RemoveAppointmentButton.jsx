import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_APPOINTMENT } from '../utils/mutations';
import trash from "../assets/images/trash.png";

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
    <div>
    <button
      onClick={handleRemoveAppointment}
      style={{ borderColor: "#C77089", borderRadius: "10px", backgroundColor: 'white', color: 'black' }}>
      Cancel Appointment &nbsp; 
      <img src={trash} alt="trash" style={{maxWidth: "15px"}} />
    </button>
    </div>
  );
};

export default RemoveAppointmentButton;
