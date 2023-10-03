import { gql } from '@apollo/client';

// Get Me query needs to be edited for saved appointments
export const GET_ME = gql`
  query Me {
    me {
      _id
      email
      name
      phone
      appointments {
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
