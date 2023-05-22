import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_REPORTS } from '../utils/queries';

export default function Report() {
  const { loading, error, data } = useQuery(GET_USER_REPORTS);
  console.log(data.userReports); 
  return (
    <div>
      <p>Check the console for idle events</p>
    </div>
  );
}