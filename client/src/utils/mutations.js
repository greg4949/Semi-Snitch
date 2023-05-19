import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_IDLE =gql`
    mutation addIdle($startTime: String!, $endTime: String!, $driverName: String!, $vehicle: String!, $idleMinutes: String!, $city: String!, $state: String!, $lat: String!, $long: Float) {
        addIdle(startTime: $startTime, endTime: $endTime, driverName: $driverName, vehicle: $vehicle, idleMinutes: $idleMinutes, city: $city, state: $state, lat: $lat, long: $long) {
            Idle {
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
        }
    }
    `;