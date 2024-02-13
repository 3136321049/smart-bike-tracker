import React, { useState, useEffect } from 'react';
import './UserData.css';
import mapImage from './map.png';
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logoImage from './sign.png';


function UserData() {
  const [userData, setUserData] = useState({ latitude: "", longitude: "" });
  const [trackerStatus, setTrackerStatus] = useState(''); // Holds the value '0', '1', or '2'
  const [threatLevel, setThreatLevel] = useState(''); // Holds the value '1' to '4'
  const [theftAlert, setTheftAlert] = useState('');

  const location = useLocation();
  const { userId } = location.state || {};

  // Function to update tracker status
  const updateTrackerStatus = (status) => {
    fetch(`https://embedded-67171-default-rtdb.firebaseio.com/${userId}/start_or_stop.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status),
    }).then(() => {
      setTrackerStatus(status);
      postSafeMessage();
    });
  };

  // Function to update threat level
  const updateThreatLevel = (level) => {
    fetch(`https://embedded-67171-default-rtdb.firebaseio.com/${userId}/threat_setting.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(level),
    }).then(() => {
      setThreatLevel(level);
      postSafeMessage();
    });
  };

  // Function to post "safe" message
  const postSafeMessage = () => {
    fetch(`https://embedded-67171-default-rtdb.firebaseio.com/${userId}/if_theft/if_theft.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('safe'),
    });
  };
    
  useEffect(() => {
    const fetchUserData = async (endpoint) => {
      try {
        const response = await fetch(`https://embedded-67171-default-rtdb.firebaseio.com/${userId}/if_theft/${endpoint}.json`);
        const data = await response.json();
        setUserData(prevState => ({ ...prevState, [endpoint]: data }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    const intervalId = setInterval(() => {
      fetchUserData('latitude');
      fetchUserData('longitude');
    }, 5000); // Fetch every 5 seconds
  
    // Fetch initial data immediately
    fetchUserData('latitude');
    fetchUserData('longitude');
  
    return () => clearInterval(intervalId);
  }, [userId]);

  // Monitor theft data
  useEffect(() => {
    const checkTheft = () => {
      fetch(`https://embedded-67171-default-rtdb.firebaseio.com/${userId}/if_theft/if_theft.json`)
        .then(response => response.json())
        .then(data => {
          if (data === 'theft') {
            setTheftAlert('There is a theft, be careful with your bike 🚨');
          } else {
            setTheftAlert('');
          }
        })
        .catch(error => {
          console.error('Error fetching theft data:', error);
        });
    };

    const intervalId = setInterval(checkTheft, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [userId]);

  // Helper function to get descriptive tracker status
  const getTrackerStatusDescription = (status) => {
    const statuses = {
      '0': 'Off',
      '1': 'On',
      '2': 'On Without Buzzer'
    };
    return statuses[status] || 'off';
  };
  
  const renderMap = userData.latitude && userData.longitude && userData.latitude !== "no data" && userData.longitude !== "no data" && (
    <div className="bike-position-map-container">
      <h3>Your Bike Position</h3> {/* Title for the map */}
      <MapContainer key={`${userData.latitude}-${userData.longitude}`} center={[userData.latitude, userData.longitude]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[userData.latitude, userData.longitude]}>
          <Popup>
            Current location. Latitude: {userData.latitude}, Longitude: {userData.longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
  
  


  // Helper function to get descriptive threat level
  const getThreatLevelDescription = (level) => {
    const levels = {
      '3': 'Least Sensitive',
      '2': 'Less Sensitive',
      '1': 'More Sensitive',
      '0': 'Most Sensitive'
    };
    return levels[level] || 'not set';
  };
  
  return (

    <div className="user-data-page"> 
      <img src={logoImage} alt="Logo" className="logo" />
      {/* Display userId at the top right */}
      <div className="user-id-display">Username: {userId}</div>
      <div className="current-track-status">
        <h2>Current Track Status</h2>
        <button onClick={() => updateTrackerStatus('1')} className="tracker-btn">Turn On the Tracker</button>
        <button onClick={() => updateTrackerStatus('0')} className="tracker-btn">Turn Off the Tracker</button>
        <button onClick={() => updateTrackerStatus('2')} className="tracker-btn">Turn On the Tracker Without Buzzer</button>
        <p>Tracker Status: {getTrackerStatusDescription(trackerStatus)}</p>
      </div>
      <div className="current-warning-sensitivity">
        <h2>Current Warning Sensitivity</h2>
        <button onClick={() => updateThreatLevel('0')} className="threat-btn">Turn Tracker Most Sensitive</button>
        <button onClick={() => updateThreatLevel('1')} className="threat-btn">Turn Tracker More Sensitive</button>
        <button onClick={() => updateThreatLevel('2')} className="threat-btn">Turn Tracker Less Sensitive</button>
        <button onClick={() => updateThreatLevel('3')} className="threat-btn">Turn Tracker Least Sensitive</button>
        <p>Threat Level: {getThreatLevelDescription(threatLevel)}</p>
      </div>
      {theftAlert && (
        <div className="theft-alert">
          {theftAlert}
        </div>
      )}
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latitude</td>
            <td>{userData.latitude}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{userData.longitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bike-position-map-container">
        {renderMap || <p>Loading map...</p>}
    </div>
    <div className="bike-theft-map-container">
      <img src={mapImage} alt="Possibility of Bike Theft in London" className="map-image"/>
      <div className="map-title">Possibility of Bike Theft in London</div>
    </div>
  </div>
  );
}

export default UserData;