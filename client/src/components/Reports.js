import React from 'react'
import {Link} from 'react-router-dom'

 export default function Report({reports}){
    return (
        <ul className='flex flex-col gap-5 m-10'>
            {reports.map((report) =>{
                return(
                    <Link key={report.id} to={`/report/${report.id}`}><li className='bg-gray-500 rounded p-2 hover:bg-gray-600 active:bg-gray-400'>Idle Event Report, uploaded on {report.dateUploaded}. Events starting around {report.idleEvents[0].startTime}</li></Link>
                )
            })}
        </ul>
    )
}