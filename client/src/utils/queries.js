import { gql } from '@apollo/client';

export const QUERY_IDLE = gql`
query idle {
    idle {
      _id
      city
      driverName
      endTime
      idleMinutes
      lat
      long
      startTime
      state
      vehicle
    }
  }
`;