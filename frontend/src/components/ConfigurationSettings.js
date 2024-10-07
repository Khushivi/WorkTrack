import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateScreenshotConfig } from '../redux/actions';

const ConfigurationSettings = () => {
    const dispatch = useDispatch();
    const [screenshotConfig, setScreenshotConfig] = useState({
        enabled: false,
        type: 'clear',
        interval: 5,
    });

    const handleToggle = () => {
        setScreenshotConfig((prev) => ({ ...prev, enabled: !prev.enabled }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setScreenshotConfig({ ...screenshotConfig, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateScreenshotConfig(screenshotConfig));
    };

    return (
        <div className="config-settings">
            <h2>Configuration Settings</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enable Screenshots:
                    <input
                        type="checkbox"
                        checked={screenshotConfig.enabled}
                        onChange={handleToggle}
                    />
                </label>
                <label>
                    Screenshot Type:
                    <select name="type" value={screenshotConfig.type} onChange={handleChange}>
                        <option value="clear">Clear</option>
                        <option value="blurred">Blurred</option>
                    </select>
                </label>
                <label>
                    Screenshot Interval (minutes):
                    <input
                        type="number"
                        name="interval"
                        value={screenshotConfig.interval}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default ConfigurationSettings;
