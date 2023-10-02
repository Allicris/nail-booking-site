import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../utils/queries';
import { Button, Container } from 'react-bootstrap';
import AppointmentForm from '../../components/AppointmentForm';
//Services can't be declared twice
// import Services from "./services.css"

const Services = () => {
const [selectedServices, setSelectedServices] = useState([]);

const { loading, error, data } = useQuery(GET_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
 
const services = data ? data.services : [];

const addtoAppointment = (service) => {
setSelectedServices([...selectedServices, service]);
};  

return (
    <>
    <Container className="services-container">
    <div>
      <h1>Services</h1>
      <ul>
        {services.map(service => (
          <li key={service._id} >
            <div className='services-item'>
            <h3>{service.name}</h3>
            <div className='services-description'>
              <div>
                <img src='{service.image}' />
              </div>
              <div>
            <p>{service.description}</p>
            <Button variant="dark" onClick={() => addtoAppointment(service)} >Add to my Appointment</Button>
            </div>
            </div>
            </div> 
            <hr></hr>        
          </li>
        ))}
      </ul>
    </div>
    <div>
    <AppointmentForm 
      selectedServices={selectedServices}
      setSelectedServices={{setSelectedServices}}
      />
  </div>
  </Container>
</>
  )}
export default Services