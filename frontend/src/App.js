import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import ConfigurationSettings from './components/ConfigurationSettings';
import ActivityLogs from './components/ActivityLogs';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app-container">
                <h1>Workstatus Agent Dashboard</h1>
                <Dashboard />
                <ConfigurationSettings />
                <ActivityLogs />
            </div>
        </Provider>
    );
};

export default App;
