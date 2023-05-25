import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_REPORT } from '../utils/mutations';

export default function Report({ report }) {
  const { _id, name, createdAt } = report;
  const [deleteReport] = useMutation(DELETE_REPORT);

  const onDelete = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    try {
      const { data } = await deleteReport({ variables: { reportId: _id } });
      window.location.reload();
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  return (
    <ul className="flex flex-col gap-5 m-10">
      <Link to={`/report/${_id}`}>
        <li className="bg-gray-500 rounded p-2 hover:bg-gray-600 active:bg-gray-400 text-white flex items-center justify-between">
          <div>{name}, uploaded on {new Date(parseInt(createdAt)).toLocaleString()}</div>
          <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700" onClick={onDelete}>
            Delete
          </button>
        </li>
      </Link>
    </ul>
  );
}







