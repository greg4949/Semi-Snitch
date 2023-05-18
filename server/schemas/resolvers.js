const { Idle } = require('../models');

const resolvers = {
    Query: {
      idle: async () => {
        return Idle.find({});
      },

    },

  };
  
  module.exports = resolvers;