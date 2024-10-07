# Employee Activity Tracking Agent

This Python-based desktop agent tracks employee activity and uploads data (screenshots, logs) to Amazon S3. Built with React.js for the front-end and Python/Django for the backend.

## Features

- **Activity Tracking**: Monitors user input, differentiating genuine actions from scripted activity.
- **Configurable Screenshots**: Set intervals for screenshots (blurred or clear) with real-time updates.
- **Time Zone Management**: Automatically adjusts timestamps for time zone changes.
- **Data Upload**: Securely uploads data to Amazon S3 with efficient handling of large files.
- **Error Handling**: Manages connectivity issues and ensures application integrity.
- **Instance Management**: Prevents multiple instances from running.

## Installation

### Prerequisites
- Python 3.x
- Node.js and npm
- Django

### Steps
1. Clone the repo:
   ```bash
   git clone https://github.com/Khushivi/WorkTrack.git
   cd WorkTrack
