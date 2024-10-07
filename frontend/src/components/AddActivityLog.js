// src/components/AddActivityLog.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const AddActivityLog = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/activity-logs/', { description });
        setDescription('');
        // Optionally, refresh the logs here
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Add Activity Log
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '10px' }}
                    >
                        Add Log
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default AddActivityLog;
