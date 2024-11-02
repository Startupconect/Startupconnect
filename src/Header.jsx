import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationPage from './NotificationPage'; // Import the NotificationPage component
import './Header.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Header = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample notifications data
  const notifications = [
    { message: 'You have a new startup request from XYZ Corp. Click to review.', date: '2024-10-30' },
    { message: 'Your application for ABC Startup has been approved! Welcome aboard!', date: '2024-10-29' },
    { message: 'Don’t miss out! Join our webinar on startup funding this Friday.', date: '2024-10-28' },
    { message: 'Reminder: Complete your profile for better matches with investors.', date: '2024-10-27' },
    { message: 'New features added to the platform. Check them out now!', date: '2024-10-26' },
  ];

 

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleAboutClick = () => {
    navigate('/aboutus');
  };

  const handleStartupClick = () => {
    navigate('/startup');
  };

  const handleInvestorClick = () => {
    navigate('/Investor1');
  };

  const handleMerchantClick = () => {
    navigate('/merchant');
  };

  const handleAllCategoryClick = () => {
    navigate('/allcategory');
  };

  const handleRecognitionClick = () => {
    navigate('/navmenu5');
  };

  const handleHelpSupportClick = () => {
    navigate('/contactus');
  };

  const handleNotificationClick = () => {
    setShowNotifications(true); // Show the notification modal
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false); // Close the notification modal
  };

  return (
    <>
      <header className="header123">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
          <div className="logo-text">
            <h1>CONNECT TO STARTUP</h1>
            <p>Feel Free To Connect</p>
          </div>
        </div>
        <div className="search-bar1">
          <input type="text" placeholder="Search" />
          <button className="voice-search">
            <img src="/images/mic.jpeg" alt="Voice Search" />
          </button>
          <button className="search-button">
            <img src="/images/search.jpeg" alt="Search" />
          </button>
        </div>
        <div className="menu-buttons">
          <select className="menu-button">
            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="hi">Hindi</option>
          </select>

          {/* Notification icon */}
          <div className="notification-icon" style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleNotificationClick}>
            <i className="fa fa-bell" aria-hidden="true"></i>
            {/* You can add a tooltip or notification count here */}
          </div>

          <button className="menu-button" onClick={handleDashboardClick}>Dashboard</button>
          <div className="profile-pic">
            <img src="/images/avatar.jpeg" alt="Profile pic" />
          </div>
          <button className="menu-button" onClick={handleLoginClick}>Login</button>
          <button className="menu-button" onClick={handleRegisterClick}>Register</button>
        </div>
      </header>

      {/* New container for navigation links */}
      <nav className="nav-links">
        <button className="nav-link" onClick={handleHomeClick}>Home</button>
        <button className="nav-link" onClick={handleAboutClick}>About</button>
        <button className="nav-link" onClick={handleRecognitionClick}>Recognition</button>
        <button className="nav-link" onClick={handleStartupClick}>StartUp</button>
        <button className="nav-link" onClick={handleInvestorClick}>Investor</button>
        <button className="nav-link" onClick={handleMerchantClick}>Merchant</button>
        <button className="nav-link" onClick={handleAllCategoryClick}>All Categories</button>
        <button className="nav-link" onClick={handleHelpSupportClick}>Help & Support</button>
      </nav>

      {/* Notification Modal */}
      {showNotifications && (
        <NotificationPage notifications={notifications} onClose={handleCloseNotifications} />
      )}
    </>
  );
};

export default Header;
