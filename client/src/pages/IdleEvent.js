import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_REPORTS } from '../utils/queries'


function IdleEvent() {
    const { loading, error, data } = useQuery(GET_USER_REPORTS);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    const userReports = data.userReports;

    return (
      <div>
        <h1>Idle Event</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created At</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Driver Name</th>
              <th>Vehicle</th>
              <th>Idle Minutes</th>
              <th>City</th>
              <th>State</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Low Temp</th>
              <th>High Temp</th>
              <th>Does not need coaching</th>
              <th>Needs coaching</th>
              <th>Coached</th>
            </tr>
          </thead>
          <tbody>
            {userReports.map((report) => (
              <tr key={report._id}>
                <td>{report.name}</td>
                <td>{report.createdAt}</td>
                {report.idleEvents.map((event) => (
                  <React.Fragment key={event.startTime}>
                    <td>{event.startTime}</td>
                    <td>{event.endTime}</td>
                    <td>{event.driverName}</td>
                    <td>{event.vehicle}</td>
                    <td>{event.idleMinutes}</td>
                    <td>{event.city}</td>
                    <td>{event.state}</td>
                    <td>{event.lat}</td>
                    <td>{event.long}</td>
                    <td>{event.lowTemp}</td>
                    <td>{event.highTemp}</td>
                    <td>
                      <input type="checkbox" name="coachingStatus" value="doesNotNeed" />
                    </td>
                    <td>
                      <input type="checkbox" name="coachingStatus" value="needsCoaching" />
                    </td>
                    <td>
                      <input type="checkbox" name="coachingStatus" value="coached" />
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default IdleEvent;
