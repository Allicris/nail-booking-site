import { gql } from '@apollo/client';

// Query to fetch a single user's profile
export const QUERY_USER_PROFILE = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
    }
  }
`;

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
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

// Mutation to schedule an appointment for a user
export const SCHEDULE_APPOINTMENT = gql`
  mutation scheduleAppointment($userId: ID!, $appointmentDate: String!, $appointmentTime: String!) {
    scheduleAppointment(userId: $userId, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime) {
      _id
      appointmentDate
      appointmentTime
    }
  }
`;

// Query to fetch all appointments for a user
export const QUERY_USER_APPOINTMENTS = gql`
  query userAppointments($userId: ID!) {
    userAppointments(userId: $userId) {
      _id
      appointmentDate
      appointmentTime
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
mutation Mutation($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
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