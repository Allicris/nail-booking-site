import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
      <h3 style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        You must be logged in to view this page.
      </h3>
    );
  }

  const handleDeleteAppointment = async (appointmentId) => {
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
    return <h2 style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LOADING...</h2>;
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Container>
        <h1 style={{ color: 'white' }}>Your Saved Appointments</h1>
      </Container>
      <Container>
        <h2 style={{ color: 'white' }}>
          {userData.savedAppointment && userData.savedAppointment.length
            ? `Viewing ${userData.savedAppointment.length} saved ${userData.savedAppointment.length === 1 ? 'appointment' : 'appointments'}:`
            : 'You have no saved appointments!'}
        </h2>
        <Row>
          {userData.savedAppointment && userData.savedAppointment.map((appointment) => {
            return (
              <Col key={appointment.appointmentId}>
                <Card>
                  <Button onClick={() => handleDeleteAppointment(appointment.appointmentId)}>
                    Delete This Appointment!
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SavedAppointments;
