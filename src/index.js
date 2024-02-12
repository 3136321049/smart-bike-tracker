
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UserData from './UserData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QAPage from './QAPage';
import './App.css'; // Adjust the path as needed
import './UserData.css'
import './QAPage.css'
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import 'leaflet/dist/leaflet.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// In your index.js or App.js, wrap the <Router> with <UserProvider>
ReactDOM.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/QAPage" element={<QAPage />} />
      </Routes>
    </Router>
  </UserProvider>,
  document.getElementById('root')
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/UserData" element={<UserData />} />
      <Route path="/QAPage" element={<QAPage />} />
    </Routes>
  </Router>
);

