import React from 'react';
import Report from '../components/Reports';
import AddReportFromFile from '../components/AddReportFromFile';
import { useQuery } from '@apollo/client';
import { GET_USER_REPORTS } from '../utils/queries';

export default function Homepage() {

    const token = localStorage.getItem('id_token');
    const { loading, error, data } = useQuery(GET_USER_REPORTS);

    if (!token) { return <p>Log in to view Reports</p>; }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Loading</p>;

  return (
    <div>
      <h2>Saved Reports</h2>
      <div>
        {data.userReports.map((report) => (
          <Report key={report._id} report={report} />
        ))}
      </div>
      <AddReportFromFile />
    </div>
  );
}