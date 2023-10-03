//Storing our saved appointments
export const getSavedAppointmentIds = () => {
  const savedAppointmentIds = localStorage.getItem('saved_appointment')
    ? JSON.parse(localStorage.getItem('saved_appointment'))
    : [];

  return savedAppointmentIds;
};

export const saveAppointmentIds = (appointmentIdArr) => {
  if (appointmentIdArr.length) {
    localStorage.setItem('saved_appointment', JSON.stringify(appointmentIdArr));
  } else {
    localStorage.removeItem('saved_appointment');
  }
};

export const removeAppointmentId = (appointmentId) => {
  const savedAppointmentIds = localStorage.getItem('saved_appointment')
    ? JSON.parse(localStorage.getItem('saved_appointment'))
    : null;

  if (!savedAppointmentIds) {
    return false;
  }

  const updatedSavedAppointmentIds = savedAppointmentIds?.filter((savedAppointmentId) => savedAppointmentId !== appointmentId);
  localStorage.setItem('saved_appointment', JSON.stringify(updatedSavedAppointmentIds));

  return true;
};