import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_SERVICES} from '../utils/queries';
import { SAVE_APPOINTMENT } from '../utils/mutations';
import { Accordion, Button } from 'react-bootstrap';


function ServicesAndAppointments() {
  const { loading, error, data } = useQuery(GET_SERVICES);
  
  if (loading) {
    return <p>Loading...</p>
  } 

  if (error) {
    return <p>Error: {error.message}</p>
  }

  const servicesData = data.servicesData; //replace with actual data structure 

 return (
    <Accordion>
      {servicesData.map((item) => {
      <Accordion.Item eventKey={ item.id } >
        <Accordion.Header>{ item.name }{item.price}</Accordion.Header>
        <Accordion.Body>
          <div>
            <div>{item.image}</div>
            <div>{item.description}</div>
          </div>
        </Accordion.Body>
        <Button variant="dark">Make An Appointment</Button>
      </Accordion.Item>
})
}
    </Accordion>
  );
}

export default ServicesAndAppointments;