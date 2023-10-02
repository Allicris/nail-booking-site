import { gql } from '@apollo/client';

// Mutation to add a new user
export const ADD_USER = gql`
mutation Mutation($email: String!, $name: String!, $password: String!) {
  addUser(email: $email, name: $name, password: $password) {
    token
  }
}
`;

// Mutation to log in a user
export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
      email
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
}
`;

export const SAVE_APPOINTMENT = gql`
mutation Mutation($appointmentData: AppointmentInput!) {
  saveAppointment(appointmentData: $appointmentData) {
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

export const REMOVE_APPOINTMENT = gql`
mutation Mutation($userId: ID!, $appointmentId: ID!) {
  removeAppointment(userId: $userId, appointmentId: $appointmentId) {
    appointments {
      appointmentDate
      appointmentTime
      services {
        description
        name
        price
      }
    }
  }
}
`;

//I don't know if we need this
// Query to fetch all appointments for a user
// export const QUERY_USER_APPOINTMENTS = gql`
//   query userAppointments($userId: ID!) {
//     userAppointments(userId: $userId) {
//       _id
//       appointmentDate
//       appointmentTime
//     }
//   }
// `;

//I dont know if we need this
// Query to fetch a single user's profile
// export const QUERY_USER_PROFILE = gql`
//   query user($userId: ID!) {
//     user(userId: $userId) {
//       _id
//       name
//       email
//     }
//   }
// `;