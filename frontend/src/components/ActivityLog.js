import React from 'react';
import { useSelector } from 'react-redux';

const ActivityLogs = () => {
    const logs = useSelector((state) => state.logs);

    return (
        <div className="activity-logs">
            <h2>Activity Logs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.date}</td>
                            <td>{log.activity}</td>
                            <td>{log.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ActivityLogs;
