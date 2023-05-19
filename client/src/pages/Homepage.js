import React from 'react'
import Report from '../components/Reports'

// TODO: Get request for all the user's reports from the database instead of hard coded data below
const reports = [
    {
        id: ":)",
        dateUploaded: "2023/5/18",
        idleEvents: [
            {

                "startTime": "5/5/2023 8:19",
                "endTime": "5/7/2023 11:47",
                "driverName": "Michael Lee",
                "vehicle": "900030",
                "idleMinutes": "3088.08",
                "city": "Chicago",
                "state": "IL",
                "lat": "41.8781",
                "long": "-87.6298"
            },
            {
                "startTime": "5/6/2023 12:26",
                "endTime": "5/7/2023 3:15",
                "driverName": "Chloe Hughes",
                "vehicle": "900009",
                "idleMinutes": "889.87",
                "city": "Anaheim",
                "state": "CA",
                "lat": "33.8353",
                "long": "-117.9145"
            },
            {
                "startTime": "5/6/2023 12:34",
                "endTime": "5/7/2023 3:51",
                "driverName": "Oliver Lopez",
                "vehicle": "900072",
                "idleMinutes": "917.85",
                "city": "Tampa",
                "state": "FL",
                "lat": "27.9506",
                "long": "-82.4572"
            },
        ]

    },
    {
        dateUploaded: "2023/5/16",
        idleEvents: [
            {
                "startTime": "5/0/2023 8:19",
                "endTime": "5/7/2023 11:47",
                "driverName": "Michael Lee",
                "vehicle": "900030",
                "idleMinutes": "3088.08",
                "city": "Chicago",
                "state": "IL",
                "lat": "41.8781",
                "long": "-87.6298"
            },
            {
                "startTime": "5/6/2023 12:26",
                "endTime": "5/7/2023 3:15",
                "driverName": "Chloe Hughes",
                "vehicle": "900009",
                "idleMinutes": "889.87",
                "city": "Anaheim",
                "state": "CA",
                "lat": "33.8353",
                "long": "-117.9145"
            },
            {
                "startTime": "5/6/2023 12:34",
                "endTime": "5/7/2023 3:51",
                "driverName": "Oliver Lopez",
                "vehicle": "900072",
                "idleMinutes": "917.85",
                "city": "Tampa",
                "state": "FL",
                "lat": "27.9506",
                "long": "-82.4572"
            },
        ]

    }
]

export default function Homepage() {
    return (
        <div>
            <h2>Saved Reports</h2>
            <div>
                <Report reports={reports} />
            </div>
        </div>
    )
}