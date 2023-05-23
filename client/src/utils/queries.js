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

export const GET_SINGLE_REPORT = gql`
  query Query($reportId: ID!) {
    singleReport(reportId: $reportId) {
      _id
      name
      createdAt
      idleEvents {
        _id
        startTime
        endTime
        driverName
        vehicle
        idleMinutes
        city
        state
        minTemp
        maxTemp
        coaching
        lat
        long
      }
    }
  }`

