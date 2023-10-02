import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../utils/queries';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AppointmentForm from '../../components/AppointmentForm';

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const { loading, error, data } = useQuery(GET_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const services = data ? data.services : [];

  const addtoAppointment = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const pageStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    margin: '0',
    minHeight: '100vh',
    minWidth: '100vw',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const servicesColumnStyle = {
    flex: '1',
  };

  const formColumnStyle = {
    flexBasis: '300px',
    marginLeft: '20px',
  };

  const formStyle = {
    position: 'sticky',
    top: '20px',
    margin: '20px 0',
  };

  return (
    <>
      <Container style={pageStyle} className="services-container">
        <Row>
          <Col xs={8} style={{ ...columnStyle, ...servicesColumnStyle }}>
            <div>
              <h1 style={{ color: 'lightgrey', fontSize: '32px', marginTop: '40px' }}>Services</h1>
              {services.map((service) => (
                <div key={service._id} className='services-item'>
                  <Row>
                    <Col xs={4}>
                      <img
                        src={service.image}
                        alt={service.name}
                        width="100"
                        height="100"
                      />
                    </Col>
                    <Col xs={8}>
                      <h3 style={{ color: '#66FCF1', marginTop: '20px' }}>{service.name}</h3>
                      <p>{service.description}</p>
                      <Button
                        variant="dark"
                        onClick={() => addtoAppointment(service)}
                      >
                        Add to my Appointment
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                </div>
              ))}
            </div>
          </Col>
          <Col xs={4} style={{ ...columnStyle, ...formColumnStyle }}>
            <div style={formStyle}>
              <h2 style={{ color: 'lightgrey', fontSize: '32px' }}>Schedule an Appointment</h2>
              <AppointmentForm
                selectedServices={selectedServices}
                setSelectedServices={{ setSelectedServices }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
