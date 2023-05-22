import { gql } from '@apollo/client';

export const GET_USER_REPORTS = gql`
  query UserReports {
    userReports {
      _id
      name
      createdAt
      idleEvents {
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
  }
`;