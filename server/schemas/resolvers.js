const { AuthenticationError, signToken } = require('../utils/auth'); // Import AuthenticationError
const { Users, Appointment } = require('../models');

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
  },

  //not letting me add a user
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
    saveAppointment: async (parent, { appointmentDate, appointmentTime }, context) => {
      const savedAppointment = await Appointment.create({ appointmentDate, appointmentTime, services });
      // Define services or fetch it from somewhere
      await Users.findOneAndUpdate(
        { _id: context.user._id }, // Correct property name
        { $addToSet: { appointments: savedAppointment._id } },
        { new: true } //returns an updated version of savedAppointments
      );

      return savedAppointment;
    },
    // removeAppointment: async (parent, { appointmentId }) => {
    //   return Users.findOneAndDelete({ _id: appointmentId });

    removeAppointment: async (parent, { _id: userId, appointmentId }) => {
   return Users.findOneAndUpdate(
          { _id: userId },
          { $pull: { appointments: { appointmentId } } },
          { new: true },
   );
    //     );
    //     if (!updatedUser) {
    //       throw new Error('User not found');
    //     }
    
    //     return updatedUser;
    //   } catch (error) {
    //     // Log the error to the console or your preferred logging mechanism
    //     console.error('Error in removeAppointment resolver:', error);
    
    //     // Rethrow the error to ensure it's propagated
    //     throw new Error('Failed to remove appointment from user');
    //   }
    },
  },
};

module.exports = resolvers;
