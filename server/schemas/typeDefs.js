const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    reports: [Report]
  }

  type Report {
    _id: ID!
    name: String!
    idleEvents: [Idle]
    createdAt: String!
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
    userReports: [Report]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReport(name: String!): Report
    deleteReport(reportId: ID!): Report
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
      reportId: ID!
    ): Idle
    
  }
`;

module.exports = typeDefs;
