import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { GET_ME, GET_USER_APPOINTMENT } from "../utils/queries";
import { Container, Row, Col, Button } from "react-bootstrap";
import { REMOVE_APPOINTMENT } from "../utils/mutations";
import RemoveAppointmentButton from "./RemoveAppointmentButton";

const SaveAppointments = () => {
  const header = {
    fontFamily: "DM Sans, serif",
    color: "#FFDCE6",
    textAlign: "center",
    paddingTop: "70px",
    paddingBottom: "30px",
  };

  const headerTwo = {
    fontFamily: "Roboto, serif",
    color: "#FFDCE6",
    textAlign: "center",
  };

  const aptCard = {
    fontFamily: "Playfair Display, serif",
    backgroundColor: "#FFDCE6",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    display: "flexbox",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 7px white",
  };

  const confirmation = {
    fontSize: "15px",
    fontFamily: "DM Sans, serif",
    color: 'grey'
  };

  const { loading, error, data } = useQuery(GET_ME, {
    displayName: "GET_ME",
  });

  if (!Auth.loggedIn()) {
    return <h3>You must be logged in to view this page.</h3>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Error loading appointments.</h2>;
  }

  const userData = data?.me || {};
  const appointments = userData.appointments || [];

  return (
    <>
      <div style={{ backgroundColor: "#A5536A" }}>
        <Container>
          <h1 style={header}>Saved Appointments</h1>
        </Container>

        <Container>
          <h2 style={headerTwo}>
            {appointments.length
              ? `Viewing ${appointments.length} Saved ${
                  appointments.length === 1 ? "Appointment" : "Appointments"
                }`
              : "You have no saved appointments!"}
          </h2>
          <Container className="services-container">
            <Row xs={1} md={2} lg={3}>
              {appointments.map((appointment) => (
                <Col key={appointment._id}>
                  <div style={aptCard} className="services-item">
                    <p style={confirmation}>
                      Confirmation Number: {appointment._id}
                    </p>
                    <div>
                    <QueryAppointmentDetails appointmentId={appointment._id} />
                    </div>
                      <RemoveAppointmentButton
                      
                        userId={userData._id}
                        appointmentId={appointment._id}
                      />
                      </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default SaveAppointments;

const QueryAppointmentDetails = ({ appointmentId }) => {
  const { loading, error, data } = useQuery(GET_USER_APPOINTMENT, {
    variables: { id: appointmentId },
  });
  console.log("hello");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Peanut Butter Error: {error.message}</p>;

  const appointmentDetails = data?.userAppointment;

  return (
    <div>
      {appointmentDetails ? (
        <div>
          <p>
            Date:{" "}
            {new Date(
              appointmentDetails.appointmentDate / 1000
            ).toLocaleDateString()}
          </p>
          <p>Time: {appointmentDetails.appointmentTime}</p>
          <p>Services:</p>
          <ul>
            {appointmentDetails.services.map((service, index) => (
              <li key={index}>
                <p>Service: {service.name}</p>
                <p>Price: {service.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "Appointment details not available"
      )}
    </div>
  );
};
