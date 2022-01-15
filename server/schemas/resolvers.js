const { AuthenticationError } = require('apollo-server-express');
const { User, Donor, Student } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    students: async () => {
      return Student.find()
    },
    donors: async () => {
      return Donor.find()
    },

  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },

    addStudent: async (parent, { firstName, lastName, parentEmail, fundingNeeded}) => {
      const student = await Student.create({firstName, lastName, parentEmail, fundingNeeded});

      return {student}
    },

    addDonor: async (parent, { firstName, lastName, address1, address2, city, state, zip, email, phone}) => {
      const donor = await Donor.create({firstName, lastName, address1, address2, city, state, zip, email, phone})
      return {donor}
    },

    addDonation: async (parent, {
      donorId, studentId, amount, date
    }) => {
      return Donor.findOneAndUpdate(
        { _id: donorId },
        {
          $addToSet: { donations: { studentId, amount, date } },
        },
        {
          new: true, 
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
