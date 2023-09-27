const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    phone: String
    email: String!
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    appointmentDate: String!
    appointmentTime: String!
    services: [Service]
  }

  type Service {
    name: String!
    price: Float!
    serviceId: String!
    image: String
    description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input AppointmentInput {
    appointmentDate: String!
    appointmentTime: String!
    services: [ServiceInput]
  }

  input ServiceInput {
    name: String!
    price: Float!
    serviceId: String!
    image: String
    description: String!
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, name: String!, password: String!): Auth
    saveAppointment(appointmentData: AppointmentInput!): User
    removeAppointment(appointmentId: String!): User
  }
`;

module.exports = typeDefs;
