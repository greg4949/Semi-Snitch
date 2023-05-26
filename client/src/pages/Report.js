import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPORT } from '../utils/queries';

import IdleTableRow from '../components/IdleTableRow';

//Page for a single report
export default function Report() {
    //get the ID of the report from the url
    const { reportId } = useParams()
    //get the data of that report from the db using that ID
    const { loading, error, data } = useQuery(GET_SINGLE_REPORT, {variables: {reportId: reportId}});
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    const report = data.singleReport

    return (
      <div className='mt-36'>
        <h1 className='text-xl text-center font-bold'>{report.name}</h1>
        <table className=' w-11/12 m-10 gap-4 flex-col min-h-screen'>
          <thead className='table-header-group'>
            <tr className='table-row'>

              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Start Time</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>End Time</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Driver Name</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Vehicle</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Idle Time</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>City</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>State</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Latitude</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Longitude</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Low Temp</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>High Temp</th>
              <th className='table-cell p-2 bg-slate-300 border border-slate-600 text-left'>Coaching?</th>

            </tr>
          </thead>

            <tbody key={report._id} className='table-row-group'>
              <>
                {report.idleEvents.map((event) => (
                  <IdleTableRow event={event}/>
                ))}
            </>
          </tbody>

        </table>
      </div>
    );
  }

