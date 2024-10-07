import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
    const activityData = useSelector((state) => state.activity);

    const data = {
        labels: activityData.dates,
        datasets: [
            {
                label: 'Active Time (minutes)',
                data: activityData.activeTimes,
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="dashboard">
            <h2>Activity Dashboard</h2>
            <Line data={data} />
        </div>
    );
};

export default Dashboard;
