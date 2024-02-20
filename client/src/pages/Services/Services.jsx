import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "../../utils/queries";
import { Button, Container, Row, Col } from "react-bootstrap";
import AppointmentForm from "../../components/AppointmentForm";
import add from "../../assets/images/add.png";

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const { loading, error, data } = useQuery(GET_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const services = data ? data.services : [];

  const addtoAppointment = (service) => {
    setSelectedServices([...selectedServices, { ...service, id: Date.now() }]);
  };

  const clearSelectedServices = () => {
    setSelectedServices([]);
  }

  const pageStyle = {
    padding: "20px",
    margin: "0",
    minHeight: "100vh",
    minWidth: "100vw",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const servicesColumnStyle = {
    flex: "1",
  };

  const formColumnStyle = {
    flexBasis: "300px",
    marginLeft: "20px",
  };

  const formStyle = {
    position: "sticky",
    top: "20px",
    padding: "20px",
    margin: "20px 0",
  };

  const headerStyle = {
    fontFamily: "'DM Sans', serif",
    fontWeight: "550",
    color: "black",
    textShadow: "3px 2px 3px #676666",
    margin: "10px",
    padding: "40px",
    textAlign: "center",
  };

  const pinkHeaderStyle = {
    fontFamily: "'Roboto', serif",
    color: "#black",
    fontSize: "30px",
    margin: "50px",
  };

  const xsmImg = {
    maxWidth: "17px",
  };

  const background = {
    backgroundColor: "#FDCBDD",
    borderRadius: "55px",
  }

  return (
    <>
    <div>
      <Container style={pageStyle} >
        <Row>
          <Col xs={8} style={{ ...columnStyle, ...servicesColumnStyle }}>
            <div style={background}>
              <h1 style={headerStyle}>SERVICES</h1>
              <div style={pinkHeaderStyle}>
                {services.map((service) => (
                  <div key={service.name} >
                    <Row>
                      <Col xs={4}>
                        <img
                          src={service.image}
                          alt={service.name}
                          width="210"
                          height="200"
                        />
                      </Col>
                      <Col xs={8}>
                        <h3 style={{ fontFamily: "Playfair Display", textShadow: "2px 2px 2px grey"}}>{service.name}</h3>
                        <p> {service.description}</p>
                        <Button
                        style={{cursor: "pointer"}}
                          variant="dark"
                          onClick={() => addtoAppointment(service)}
                        >
                          <img src={add} alt="add" style={xsmImg} />
                          &nbsp; Add To My Appointment
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={4} style={{ ...columnStyle, ...formColumnStyle }}>
            <div style={formStyle}>
              <AppointmentForm
                selectedServices={selectedServices}
                clearSelectedServices={clearSelectedServices}
                removeService={(serviceToRemove) => {
                  const updatedServices = selectedServices.filter(
                    (service) => service.id !== serviceToRemove.id
                  );
                  setSelectedServices(updatedServices);
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Services;
