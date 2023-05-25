import React from 'react';
import Report from '../components/Reports';
import AddReportFromFile from '../components/AddReportFromFile';
import { useQuery } from '@apollo/client';
import { GET_USER_REPORTS } from '../utils/queries';

export default function Homepage() {

    const token = localStorage.getItem('id_token');
    const { loading, error, data } = useQuery(GET_USER_REPORTS);

    if (!token) { return <p className='text-center'>Log in to view Reports</p>; }
    if (loading) return <p className='text-center'> Loading...</p>;
    if (error) return <p className='text-center'>Error Loading</p>;

    return (
        <div className='m-0 p-0'>
            <div className='fixed w-full bg-gray-700 top-24 p-3 flex justify-between content-center'>
                <h2 className="text-2xl font-bold text-white my-auto ml-8">
                    Saved Reports
                </h2>
                <AddReportFromFile />
            </div>
            <div className="mt-48">
                {data.userReports.map((report) => (
                    <Report key={report._id} report={report} />
                ))}
            </div>
        </div>

    );
}
