const { Idle } = require('../models');

const resolvers = {
    Query: {
      idle: async () => {
        return Idle.find({});
      },

    },
    Mutation: {
      addIdle: async (parent, args) =>{
        const idleEvent = await Idle.create(args)
        return idleEvent;
      }
    }
  };
  
  module.exports = resolvers;