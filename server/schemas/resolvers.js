const { AuthenticationError } = require('apollo-server-express');
const { User, Idle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      idle: async () => {
        return Idle.find({});
      }

    },
    Mutation: {
      addIdle: async (parent, args) =>{
        const idleEvent = await Idle.create(args)
        return idleEvent;
      },
      addUser: async (parent, { email, password }) => {
        const user = await User.create({ email, password });
        const token = signToken(user);
        return { token, user };
      },
      
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        
        return { token, user };
      },
    }
  };
  
  module.exports = resolvers;