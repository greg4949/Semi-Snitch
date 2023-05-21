const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }
  type Report {
    _id: ID!
    idleEvents: [Idle]
  }

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    idle: [Idle]
    report: [Report]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addIdle(
      startTime: String!
      endTime: String!
      driverName: String!
      vehicle: String!
      idleMinutes: String!
      city: String!
      state: String!
      lat: String!
      long: String!
    ): Idle
  }
`;

module.exports = typeDefs;
