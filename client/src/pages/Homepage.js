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
        <div>
            <h2 style={{
                fontSize: '2em',
                fontWeight: 'bold',
                marginTop: '-250px',
                textAlign: 'center'
            }}>
                Saved Reports
            </h2>
            <div>
                {data.userReports.map((report) => (
                <Report key={report._id} report={report} />
                ))}
            </div>
            <AddReportFromFile />
        </div>
    );
}
