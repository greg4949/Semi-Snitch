import { gql } from '@apollo/client';


  export const UPDATE_COACHING = gql`
  mutation updateCoaching($idleId: ID!, $coaching: String){
    updateCoaching(idleId: $idleId, coaching: $coaching){
      _id
      coaching
    }
  }`


export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_REPORT = gql`
  mutation AddReport($name: String!) {
    addReport(name: $name) {
      _id
      name
      createdAt
    }
  }
`;

export const DELETE_REPORT = gql`
  mutation DeleteReport($reportId: ID!) {
    deleteReport(reportId: $reportId) {
      _id
    }
  }
`;

export const ADD_IDLE = gql`
  mutation AddIdle(
    $startTime: String!
    $endTime: String!
    $driverName: String!
    $vehicle: String!
    $idleMinutes: String!
    $city: String!
    $state: String!
    $lat: String!
    $long: String!
    $reportId: ID!
    $maxTemp: String
    $minTemp: String
    $coaching: String
  ) {
    addIdle(
      startTime: $startTime
      endTime: $endTime
      driverName: $driverName
      vehicle: $vehicle
      idleMinutes: $idleMinutes
      city: $city
      state: $state
      lat: $lat
      long: $long
      reportId: $reportId
      maxTemp: $maxTemp
      minTemp: $minTemp
      coaching: $coaching
    ) {
      _id
      startTime
      endTime
      driverName
      vehicle
      idleMinutes
      city
      state
      lat
      long
    }
  }
`;