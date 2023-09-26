const { Users } = require('../models');

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

    user: async (parent, { userId }) => {
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

  Mutation: {
    addUser: async (parent, { name }) => {
      try {
        const newUser = await Users.create({ name }); 
        return newUser;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },

    appointmentOfUser: async (parent, { userId, appointment }) => {
      try {
        const updatedUser = await Users.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { appointment: appointment } },
          { new: true, runValidators: true }
        );
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (error) {
        throw new Error('Failed to add appointment to user');
      }
    },

    removeUser: async (parent, { userId }) => {
      try {
        const deletedUser = await Users.findOneAndDelete({ _id: userId });
        if (!deletedUser) {
          throw new Error('User not found'); 
        }
        return deletedUser;
      } catch (error) {
        throw new Error('Failed to delete user'); 
      }
    },

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
