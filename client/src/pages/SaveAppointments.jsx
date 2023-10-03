import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME, GET_USER_APPOINTMENT } from '../utils/queries';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { REMOVE_APPOINTMENT } from '../utils/mutations';
import RemoveAppointmentButton from './RemoveAppointmentButton';


const SaveAppointments = () => {
  const { loading, error, data } = useQuery(GET_ME, {
    displayName: "GET_ME",
  });

  if (!Auth.loggedIn()) {
    return (
      <h3>
        You must be logged in to view this page.
      </h3>
    );
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
      <div>
        <Container>
          <h1>Your Saved Appointments</h1>
        </Container>
      </div>
      <Container>
        <h2>
          {appointments.length
            ? `Viewing ${appointments.length} saved ${appointments.length === 1 ? 'appointment' : 'appointments'}:`
            : 'You have no saved appointments!'}
        </h2>
        <Container className="services-container">
          <Row>
            <Col xs={8}>
              <div>
                <h1 style={{ color: '#66FCF1' }}>Appointments</h1>
                {appointments.map((appointment) => (
                  <div key={appointment._id} className='services-item'>
                    <Row>
                      <Col xs={8}>
                        <p>Confirmation Number: {appointment._id}</p>
                        <QueryAppointmentDetails appointmentId={appointment._id} />
                        <RemoveAppointmentButton userId={userData._id} appointmentId={appointment._id} />

                      </Col>
                    </Row>
                    <hr />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SaveAppointments;

const QueryAppointmentDetails = ({ appointmentId }) => {
  const { loading, error, data } = useQuery(GET_USER_APPOINTMENT, {
    variables: { id: appointmentId },
  });
 console.log("hello")
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Peanut Butter Error: {error.message}</p>;

  const appointmentDetails = data?.userAppointment;

  return (
    <div>
    {appointmentDetails ? (
      <div>
        <p>Date: {new Date(appointmentDetails.appointmentDate /1000).toLocaleDateString()}</p>
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
      'Appointment details not available'
    )}
  </div>
);
};

// import React from 'react';
// import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';
// import { GET_ME, GET_USER_APPOINTMENT } from '../utils/queries';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { REMOVE_APPOINTMENT } from '../utils/mutations';
// import RemoveAppointmentButton from './RemoveAppointmentButton';

// const SaveAppointments = () => {
//   const { loading, error, data } = useQuery(GET_ME, {
//     displayName: 'GET_ME',
//   });

//   if (!Auth.loggedIn()) {
//     return (
//       <h3 style={{ color: 'white' }}>
//         You must be logged in to view this page.
//       </h3>
//     );
//   }

//   if (loading) {
//     return <h2 style={{ color: 'white' }}>Loading...</h2>;
//   }

//   if (error) {
//     console.error(error);
//     return <h2 style={{ color: 'white' }}>Error loading appointments.</h2>;
//   }

//   const userData = data?.me || {};
//   const appointments = userData.appointments || [];

//   return (
//     <div style={{ backgroundColor: 'black', color: 'white' }}>
//       <Container>
//         <h1>Your Saved Appointments</h1>
//       </Container>
//       <Container>
//         <h2>
//           {appointments.length
//             ? `Viewing ${appointments.length} saved ${
//                 appointments.length === 1 ? 'appointment' : 'appointments'
//               }:`
//             : 'You have no saved appointments!'}
//         </h2>
//         <Container className="services-container">
//           <Row>
//             <Col xs={8}>
//               <div>
//                 <h1 style={{ color: '#66FCF1' }}>Appointments</h1>
//                 {appointments.map((appointment) => (
//                   <div key={appointment._id} className='services-item'>
//                     <Row>
//                       <Col xs={8}>
//                         <p>
//                           Confirmation Number: {appointment._id}
//                         </p>
//                         <QueryAppointmentDetails appointmentId={appointment._id} />
//                         <RemoveAppointmentButton
//                           userId={userData._id}
//                           appointmentId={appointment._id}
//                         />
//                       </Col>
//                     </Row>
//                     <hr />
//                   </div>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// };

// export default SaveAppointments;

// const QueryAppointmentDetails = ({ appointmentId }) => {
//   const { loading, error, data } = useQuery(GET_USER_APPOINTMENT, {
//     variables: { id: appointmentId },
//   });
//   console.log('hello');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Peanut Butter Error: {error.message}</p>;

//   const appointmentDetails = data?.userAppointment;

//   return (
//     <div>
//       {appointmentDetails ? (
//         <div>
//           <p>
//             Date: {new Date(appointmentDetails.appointmentDate / 1000).toLocaleDateString()}
//           </p>
//           <p>Time: {appointmentDetails.appointmentTime}</p>
//           <p>Services:</p>
//           <ul>
//             {appointmentDetails.services.map((service, index) => (
//               <li key={index}>
//                 <p>Service: {service.name}</p>
//                 <p>Price: {service.price}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         'Appointment details not available'
//       )}
//     </div>
//   );
// };
