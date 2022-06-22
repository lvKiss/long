import React from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';
import './Profile.css'
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Register/>  
     {/* <Profile/> 
      <Login></Login> */}
  </React.StrictMode>
);
reportWebVitals();
