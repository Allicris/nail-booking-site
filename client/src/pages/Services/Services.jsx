// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_SERVICES } from '../../utils/queries';
// import { Button, Container } from 'react-bootstrap';
// import AppointmentForm from '../../components/AppointmentForm';
// import "./services.css"

// const Services = () => {
// const [selectedServices, setSelectedServices] = useState([]);

// const { loading, error, data } = useQuery(GET_SERVICES);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

// const services = data ? data.services : [];

// const addtoAppointment = (service) => {
// setSelectedServices([...selectedServices, service]);
// };  

// return (
//     <>
//     <Container className="services-container">
//     <div>
//       <h1>Services</h1>
//       <ul>
//         {services.map(service => (
//           <li key={service._id} >
//             <div className='services-item'>
//             <h3>{service.name}</h3>
//             <div className='services-details'>
//               <div>
//                 <img src={service.image} />
//               </div>
//               <div className='services-description'>
//             <p>{service.description}</p>
//             <Button variant="dark" onClick={() => addtoAppointment(service)} >Add to my Appointment</Button>
//             </div>
//             </div>
//             </div> 
//             <hr></hr>        
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div>
//     <AppointmentForm 
//       selectedServices={selectedServices}
//       setSelectedServices={{setSelectedServices}}
//       />
//   </div>
//   </Container>
// </>
//   )}
// export default Services
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
    setSelectedServices([...selectedServices, { ...service, id: Date.now() }]);
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
    padding: '20px',
    margin: '20px 0', // Add margin to the form element
  };

  return (
    <>
      <Container style={pageStyle} className="services-container">
        <Row>
          <Col xs={8} style={{ ...columnStyle, ...servicesColumnStyle }}>
            <div>
              <h1>Services</h1>
              {services.map((service) => (
                <div key={service.name} className='services-item'>
                  <Row>
                    <Col xs={4}>
                      <img
                        src={service.image}
                        alt={service.name}
                        width="200"
                        height="200"
                      />
                    </Col>
                    <Col xs={8}>
                      <h3>{service.name}</h3>
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
              <AppointmentForm
                selectedServices={selectedServices}
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
    </>
  );
};

export default Services;
