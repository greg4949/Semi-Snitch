import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPORT } from '../utils/queries';

export default function Report() {
  const { reportId } = useParams()
  const { loading, error, data } = useQuery(GET_SINGLE_REPORT, {variables: {reportId: reportId}});
  if (loading) {
    return <p>Loading...</p>;
  }

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    const report = data.singleReport


    return (
      <div>
        <h1>{report.name}</h1>

        {/* <th className='table-cell text-left'>Name</th>
        <th className='table-cell text-left'>Created At</th>
        <td className='table-cell'>{report.name}</td>
        <td className='table-cell'>{report.createdAt}</td> */}

        <table className='table-auto w-11/12 m-10 gap-4 flex-col'>
          <thead className='table-header-group'>
            <tr className='table-row'>

              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Start Time</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>End Time</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Driver Name</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Vehicle</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Idle Minutes</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>City</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>State</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Latitude</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Longitude</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Low Temp</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>High Temp</th>
              {/* <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Does not need coaching</th> */}
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Needs coaching</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Coached</th>
            </tr>
          </thead>

            <tbody key={report._id} className='table-row-group'>
              <>
                {report.idleEvents.map((event) => (
                  <React.Fragment key={event.startTime}>
                    <tr className='table-row'>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.startTime}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.endTime}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.driverName}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.vehicle}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.idleMinutes}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.city}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.state}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.lat}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.long}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.lowTemp}</td>
                    <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.highTemp}</td>
                    {/* <td className='table-cell border border-slate-600 bg-slate-100 p-2'>
                      <input type="checkbox" name="coachingStatus" value="doesNotNeed" />
                    </td> */}
                    <td className='table-cell text-center border border-slate-600 bg-slate-100 p-2'>
                      <input type="checkbox" name="coachingStatus" value="needsCoaching" />
                    </td>
                    <td className='table-cell text-center border border-slate-600 bg-slate-100 p-2'>
                      <input type="checkbox" name="coachingStatus" value="coached" />
                    </td>
                    </tr>
                  </React.Fragment>
                ))}
</>
          </tbody>

        </table>
      </div>
    );
  }

