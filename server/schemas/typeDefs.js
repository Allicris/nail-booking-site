// const { gql } = require('apollo-server-express');

const typeDefs = `
  type Users {
    _id: ID
    name: String
    phone: String
    email: String
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    appointmentDate: String
    appointmentTime: String
    services: [Service]
  }

  type Service {
    _id: ID
    name: String
    price: Float
    image: String
    description: String
  }

  type Auth {
    token: ID!
    user: Users
  }

  input AppointmentInput {
    appointmentDate: String
    appointmentTime: String
    services: [ServiceInput]
  }

  input ServiceInput {
    name: String
    price: Float
    image: String
    description: String
  }

  type Query {
    me: Users
    users: [Users]
    user(_id: ID): Users
    services: [Service]
    userAppointment(_id:ID!):Appointment
    userAppointmentsByIds(_id:[ID]):Appointment
    removeAppointment(userId: ID!, appointmentId: ID!): Users
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, name: String!, password: String!): Auth
    saveAppointment(appointmentData: AppointmentInput!): Appointment
    removeAppointment(userId: ID!, appointmentId: ID!): Users
  }
`;

module.exports = typeDefs;
