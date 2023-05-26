import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_COACHING } from '../utils/mutations'


export default function IdleTableRow({event}){
    const [coachingStatus, setCoachingStatus] = useState(event.coaching)

    const [updateCoaching, {error}] = useMutation(UPDATE_COACHING)
    useEffect(() => {
        updateCoaching({variables: {idleId: event._id, coaching: coachingStatus}})
    }, [coachingStatus])

    const hours = Math.floor(event.idleMinutes / 60);
    const minutes = Math.floor(event.idleMinutes % 60);

    return (
    <React.Fragment key={event.startTime}>
        <tr className='table-row'>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.startTime}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.endTime}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.driverName}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.vehicle}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{hours} hours {minutes} minutes</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.city}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.state}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.lat}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.long}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.minTemp}</td>
        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>{event.maxTemp}</td>

        <td className='table-cell border border-slate-600 bg-slate-100 p-2'>
        <select
            value={coachingStatus}
            onChange={(e) => setCoachingStatus(e.target.value)}
        >
            <option value="">Select coaching status</option>
            <option value="doesNotNeed">Does not need coaching</option>
            <option value="needsCoaching">Needs coaching</option>
            <option value="coached">Coached</option>
        </select>
        </td>
        </tr>
    </React.Fragment>
    )
}