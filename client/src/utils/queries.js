import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      _id
      email
      name
      phone
      appointments {
        _id
        appointmentDate
        appointmentTime
        services {
          description
          image
          name
          price
        }
      }
    }
  }
  `;


export const GET_SERVICES = gql`
query Services {
  services {
    _id
    description
    name
    price
    image
  }
}
`;

export const GET_USER_APPOINTMENT = gql`
query UserAppointment($id: ID!) {
  userAppointment(_id: $id) {
    _id
    appointmentDate
    appointmentTime
    services {
      name
      price
    }
  }
}
`;

export const GET_APPOINTMENTS_BY_IDS = gql`
  query userAppointmentsByIds($ids: [ID]) {
    userAppointmentsByIds(ids: $ids) {
      _id
      appointmentDate
      appointmentTime
      services {
        description
        name
        price
      }
    }
  }
`;
