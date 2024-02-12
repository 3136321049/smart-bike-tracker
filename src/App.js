import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './bike.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserData from './UserData';
import QAPage from './QAPage';
import logoImage from './sign.png';


function App() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userStatus, setUserStatus] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();
  
  useEffect(() => {
    let timer = null;
    if (countdown > 0 && userStatus === 'Thanks for your purchase!') {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && userStatus === 'Thanks for your purchase!') {
      navigate('/UserData', { state: { userId } });
    }
    return () => clearTimeout(timer);
  }, [countdown, userStatus, navigate]);

  const handleQAClick = () => {
    navigate('/QAPage'); // Correctly navigate to the Q&A page
  };

  const checkUserId = () => {
    if (userId.trim() === '') {
      setUserStatus('Please enter your ID');
      return;
    }

    const usersUrl = `https://embedded-67171-default-rtdb.firebaseio.com/${userId}.json`;

    fetch(usersUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.password !== undefined) {
          // User exists, prompt for login
          setUserStatus('Enter your password to log in');
          setIsSigningUp(false);
        } else if (data) {
          // User data exists, but no password is set, prompt for sign up
          setUserStatus('Setting your password to sign up');
          setIsSigningUp(true);
          // Initialize user data
          initializeUserData(userId);
        } else {
          // User ID does not exist
          setUserStatus('Buy a product please!');
        }
      })
      .catch(() => {
        setUserStatus('Error ID');
      });
  };

  const initializeUserData = (userId) => {
    const newUserUrl = `https://embedded-67171-default-rtdb.firebaseio.com/${userId}.json`;
    const initialData = {
      if_theft: "no data",
      latitude: "no data",
      longitude: "no data",
      start_or_stop: "no data",
      threat_setting: "no data",
      password: "" // Password will be set during sign up
    };

    fetch(newUserUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(initialData)
    });
  };

  const handlePasswordSubmit = () => {
    const passwordUrl = `https://embedded-67171-default-rtdb.firebaseio.com/${userId}/password.json`;

    if (isSigningUp) {
      // Sign up logic
      fetch(passwordUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(password)
      }).then(() => {
        navigate('/UserData', { state: { userId } });
      });
    } else {
      // Log in logic
      fetch(passwordUrl)
        .then(response => response.json())
        .then(storedPassword => {
          if (password === storedPassword) {
            navigate('/UserData', { state: { userId } });
          } else {
            setUserStatus('Incorrect password, please try again');
          }
        });
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={logoImage} alt="Logoo" className="logoo" />
      <Routes>
        <Route path="/" element={
          <>
            <div className="header-text">
              <h1>Your Smart Bike Tracker</h1>
            </div>
            <div className="content">
              <div className="input-group">
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your user ID"
                  className="user-id-input"
                />
                <button onClick={checkUserId} className="ok-button">OK</button>
              </div>
              {userStatus.includes('password') && (
                <>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isSigningUp ? "Set your password" : "Enter your password"}
                    className="password-input"
                  />
                  <button onClick={handlePasswordSubmit} className="submit-button">Submit</button>
                </>
              )}
              <div className="status-message">{userStatus}</div>
            </div>
          </>
        } />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/QAPage'" element={<QAPage />} />
      </Routes>
      <div className="qa-button">
        <button onClick={handleQAClick}>Q&A</button>
      </div>
      <div className="more-features">
        For more features, please see website: 
        <a href="https://console.firebase.google.com/project/embedded-67171/database/embedded-67171-default-rtdb/rules" target="_blank" rel="noopener noreferrer">
          Firebase Console
        </a>
      </div>
    </div>
  );
}

export default App;
