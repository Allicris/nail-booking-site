import { gql } from '@apollo/client';

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

// Mutation to add a new user
export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
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
          serviceId
        }
      }
    }
  }
}
`;

// Mutation to schedule an appointment for a user - changed wording to match service side resolvers
export const SAVE_APPOINTMENT = gql`
mutation SaveAppointment($appointmentData: AppointmentInput!) {
  saveAppointment(appointmentData: $appointmentData) {
    appointmentDate
    appointmentTime
    services {
      name
      description
      price
      serviceId
    }
  }
}
`;

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

export const REMOVE_APPOINTMENT = gql`
mutation Mutation($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedAppointments {
      _id
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`