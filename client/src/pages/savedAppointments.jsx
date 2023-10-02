import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { removeAppointmentId } from '../utils/localStorage';
import { REMOVE_APPOINTMENT } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const SavedAppointments = () => {
  const { loading, data } = useQuery(GET_ME); 
  const [removeAppointment, { error }] = useMutation(REMOVE_APPOINTMENT);

  const userData = data?.me || {};
  if (!Auth.loggedIn()) {
    return (
      <h3>
        You must be logged in to view this page.
      </h3>
    )
  }
  const handleDeleteAppointment = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await removeAppointment({
        variables: { appointmentId },
      })
      removeAppointmentId(appointmentId);
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <Container>
          <h1>Your Saved Appointments</h1>
        </Container>
      </div>
      <Container>
        <h2>
          {userData.savedAppointment.length
            ? `Viewing ${userData.savedAppointment.length} saved ${userData.savedAppointment.length === 1 ? 'appointment' : 'appointments'}:`
            : 'You have no saved appointments!'}
        </h2>
        <Row>
          {userData.savedAppointment.map((appointment) => {
            return (
              <Col >
                <Card key={appointment.appointmentId} >
                  <Button onClick={() => handleDeleteAppointment(appointment.appointmentId)}>
                    Delete This Appointment!
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedAppointments;