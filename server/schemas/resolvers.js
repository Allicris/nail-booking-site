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
        throw new AuthenticationError('User not found'); // Use AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password); // Use 'user' to call isCorrectPassword

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password'); // Use AuthenticationError
      }

      const token = signToken(user);
      return { token, user };
    },

    saveAppointment: async (parent, { appointmentDate, appointmentTime }, context) => {
      if (context.user) {
        const appointment = await Appointment.create({
          appointmentDate,
          appointmentTime,
          services, // Define services or fetch it from somewhere
        });

        await Users.findOneAndUpdate(
          { _id: context.user._id }, // Correct property name
          { $addToSet: { appointment: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError('You need to be logged in!'); // Use AuthenticationError
    },

    // removeUsers: async (parent, { userId }) => {
    //   try {
    //     const deletedUser = await Users.findOneAndDelete({ _id: userId });
    //     if (!deletedUser) {
    //       throw new Error('User not found');
    //     }
    //     return deletedUser;
    //   } catch (error) {
    //     throw new Error('Failed to delete user');
    //   }
    // },

    removeAppointment: async (parent, { userId, appointment }) => {
      try {
        const updatedUser = await Users.findOneAndUpdate(
          { _id: userId },
          { $pull: { appointment: appointment } },
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
