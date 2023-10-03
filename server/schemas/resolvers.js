const { AuthenticationError, signToken } = require('../utils/auth'); // Import AuthenticationError
const { Users, Appointment, Services } = require('../models');
const { UserInputError, ApolloError } = require('apollo-server-errors');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      try {

        if (!context.user) {
          throw new AuthenticationError('Not authenticated');
        }

        const user = await Users.findById(context.user._id);

        return user;
      } catch (error) {
        throw new ApolloError('Failed to fetch user');
      }
    },
    users: async () => {
      try {
        const users = await Users.find();
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },

    //not sure why but we can find the user when we out id instead of just userId
    user: async (parent, { _id }) => {
      try {
        const user = await Users.findOne({ _id });
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
    userAppointment: async (parent, { _id }) => {
      try {
        const userAppointment = await Appointment.findOne({ _id });
        if (!userAppointment) {
          throw new Error('Appointment not found');
        }
        return userAppointment;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    userAppointmentsByIds: async (parent, { ids }) => {
      try {
        const userAppointments = await Appointment.find({ _id: { $in: ids } });
        if (!userAppointments) {
          throw new Error('No appointments found');
        }
        return userAppointments;
      } catch (error) {
        throw new Error('Failed to fetch user appointments');
      }
    }
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
        throw AuthenticationError('Invalid credentials'); // Use AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password); // Use 'user' to call isCorrectPassword

      if (!correctPw) {
        throw AuthenticationError; // Use AuthenticationError
      }

      const token = signToken(user);
      return { token, user };
    },
    // 
    saveAppointment: async (parent, { appointmentData }, context) => {
      try {
        // Create the appointment record
        const saveAppointment = await Appointment.create({
          appointmentDate: appointmentData.appointmentDate,
          appointmentTime: appointmentData.appointmentTime,
          services: appointmentData.services,
        });
    
        // Update the user's document to include the entire appointment object
        await Users.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { appointments: saveAppointment } }, // Push the entire appointment object
          { new: true }
        );
    
        return saveAppointment;
      } catch (error) {
        if (error.name === 'ValidationError') {
          const validationErrors = Object.values(error.errors).map((err) => err.message);
          throw new UserInputError('Validation Error', { validationErrors });
        }
        throw new ApolloError('Internal Server Error');
      }
    },

    removeAppointment: async (parent, { userId, appointmentId }) => {
      try {
        const updatedUser = await Users.findOneAndUpdate(
          { _id: userId },
          { $pull: { appointments: appointmentId } },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (error) {
        throw new Error('Failed to remove appointment from user');
      }
    },
  },
};

module.exports = resolvers;