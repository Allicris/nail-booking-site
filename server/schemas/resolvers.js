const { AuthenticationError, signToken } = require('../utils/auth'); // Import AuthenticationError
const { Users, Appointment, Services } = require('../models');
const { UserInputError, ApolloError } = require('apollo-server-errors');

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await Users.find();
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },

    //not sure why but we can find the user when we out id instead of just userId
    user: async (parent, { _id: userId }) => {
      try {
        const user = await Users.findOne({ _id: userId });
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    services: async () => {
      try {
        const services = await Services.find();
        return services;
      } catch (error) {
        throw new Error('Error fetching services');
      }
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      try {
        const newUser = await Users.create({ name, email, password });
        const token = signToken(newUser);
        return { newUser, token };
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },

    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });
      if (!user) {
        throw AuthenticationError; // Use AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password); // Use 'user' to call isCorrectPassword

      if (!correctPw) {
        throw AuthenticationError; // Use AuthenticationError
      }

      const token = signToken(user);
      return { token, user };
    },
     saveAppointment: async (parent, { appointmentData }, context) => {
      try {
       const saveAppointment = await Appointment.create({ 
        appointmentDate: appointmentData.appointmentDate,
        appointmentDate: appointmentData.appointmentTime,
        services: appointmentData.services
        });
       // Define services or fetch it from somewhere
       await Users.findOneAndUpdate(
        { _id: context.user._id }, // Correct property name
         { $addToSet: { appointments: saveAppointment._id } },
         { new: true } //returns an updated version of savedAppointments
       );

       return saveAppointment;
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        throw new UserInputError('Validation Error', { validationErrors });
      } 
      throw new ApolloError('Internal Server Error');
    }
    //     removeAppointment: async (parent, { userId, appointment }) => {
    //       try {
    //         const updatedUser = await Users.findOneAndUpdate(
    //           { _id: userId },
    //           { $pull: { appointments: appointment } },
    //           { new: true }
    //         );
    //         if (!updatedUser) {
    //           throw new Error('User not found');
    //         }
    //         return updatedUser;
    //       } catch (error) {
    //         throw new Error('Failed to remove appointment from user');
    //       }
    //     },
  },
},
};

module.exports = resolvers;