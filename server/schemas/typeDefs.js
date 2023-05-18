const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Idle {
    _id: ID!
    startTime: String
    endTime: String
    driverName: String
    vehicle: String
    idleMinutes: String
    city: String
    state: String
    lat: String
    long: String
  }



  type Query {
    idle: [Idle]
 
  }

  type Mutation {
    addIdle(   startTime: String!
      endTime: String!
      driverName: String!
      vehicle: String!
      idleMinutes: String!
      city: String!
      state: String!
      lat: String!
      long: String!): Idle
  }

`;

module.exports = typeDefs;
