// const { gql } = require('apollo-server-express');

const typeDefs = `
type Users {
  _id: ID
  name: String!
  phone: String
  email: String!
  appointment: [Appointment]
}

type Appointment {
  _id:ID
  appointmentDate: Date!
  appointmentTime: String! 
  services: [Services]
}

type Services {
  name: String!
  price: Number!
  serviceId: String!
  image: String
  description: String!
}

type Auth {
  token: ID!
  user: Users
}

type Query {
  me: Users
  users: [Users]
}

type Mutation {
  login(email:String!, password: String!): Auth
  addUser(email: String!, name: String!, password: String!): Auth
  saveAppointment(appointmentData: appointmentInput!): User
  removeAppointment(appointmentId: String!): User
}
`

module.exports = typeDefs;