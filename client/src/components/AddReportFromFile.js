import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REPORT } from '../utils/mutations';
import { ADD_IDLE } from '../utils/mutations';

function AddReportFromFile() {
    const [addReport] = useMutation(ADD_REPORT);
    const [addIdle] = useMutation(ADD_IDLE);

    const readFile = (file) => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (event) => reject(new Error('Error reading file.'));
        reader.readAsText(file);
        });
    };

    const onFileUpload = async (event) => {
        try {
            const report = await addReport({ variables: { name: 'test' } });
            const reportId = report.data.addReport._id;
            const idleInfo = JSON.parse(await readFile(event.target.files[0]));
            for (const info of idleInfo) {
                try {
                    await addIdle({
                        variables: {
                            startTime: info.startTime,
                            endTime: info.endTime,
                            driverName: info.driverName,
                            vehicle: info.vehicle,
                            idleMinutes: info.idleMinutes,
                            city: info.city,
                            state: info.state,
                            lat: info.lat,
                            long: info.long,
                            reportId: reportId
                    }}); 
                } catch (e) { console.error(e); }
            }
            window.location.reload();
        } catch (error) {
            console.error('Error adding report:', error);
        }
  };

  return (
    <li className='flex flex-col gap-5 m-10 bg-gray-500 rounded p-2 hover:bg-gray-600 active:bg-gray-400'>
      <p className='text-white'>
        <input type="file" onChange={onFileUpload} /> Upload Report from File (JSON, CSV)
      </p>
    </li>
  );
}

export default AddReportFromFile;