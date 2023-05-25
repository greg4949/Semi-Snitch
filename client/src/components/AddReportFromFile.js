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

  const fetchWeatherData = async (lat, lon) => {
    const apiKey = 'b02be164d047cfbed86694527d1d3a92';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    return weatherData;
  };


  const onFileUpload = async (event) => {

    const reportName = event.target.files[0].name
    const reportNameSplit = reportName.split('.')

    try {
      const report = await addReport({ variables: { name: reportNameSplit[0] } });
      const reportId = report.data.addReport._id;
      const idleInfo = JSON.parse(await readFile(event.target.files[0]));

      for (const info of idleInfo) {
        const weatherData = await fetchWeatherData(info.lat, info.long);
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
              reportId: reportId,
              minTemp: String(weatherData.main.temp_min) || '666666',
              maxTemp: String(weatherData.main.temp_max) || '666666',
              coaching: 'none'
            }
          });
        } catch (e) { console.error(e); }
      }
      window.location.reload();
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

    return (
        <div className='mr-8'>
            <li className='flex flex-col gap-5 bg-gray-500 rounded p-2 hover:bg-gray-600 active:bg-gray-400'>
              <p className='text-white'>
                <input type="file" onChange={onFileUpload} />  (JSON)
              </p>
            </li>
        </div>
    );
}

export default AddReportFromFile;
