import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationPage from './NotificationPage';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchText, setSearchText] = useState(''); // Initialize searchText state

  const notifications = [
    { message: 'You have a new startup request from XYZ Corp. Click to review.', date: '2024-10-30' },
    { message: 'Your application for ABC Startup has been approved! Welcome aboard!', date: '2024-10-29' },
    { message: 'Don’t miss out! Join our webinar on startup funding this Friday.', date: '2024-10-28' },
    { message: 'Reminder: Complete your profile for better matches with investors.', date: '2024-10-27' },
    { message: 'New features added to the platform. Check them out now!', date: '2024-10-26' },
  ];

  // Initialize SpeechRecognition if available
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
  }

  const handleVoiceSearch = () => {
    if (!recognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }
    recognition.start();

    // Handle speech recognition result
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript); // Set the recognized text as the search input's value
    };

    // Error handling
    recognition.onerror = (event) => {
      console.error("Speech Recognition Error: ", event.error);
      alert("Error occurred in speech recognition: " + event.error);
    };
  };

  const handleSearchClick = () => {
    if (searchText.trim() !== '') {
      // Redirect or search logic here
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
    } else {
      alert("Please enter a search query.");
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully');
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
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
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
          <input 
            type="text" 
            placeholder="Search" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="voice-search" onClick={handleVoiceSearch}>
            <img src="/images/mic.jpeg" alt="Voice Search" />
          </button>
          <button className="search-button" onClick={handleSearchClick}>
            <img src="/images/search.jpeg" alt="Search" />
          </button>
        </div>
        <div className="menu-buttons">
         

          <div className="notification-icon" style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={handleNotificationClick}>
            <i className="fa fa-bell" aria-hidden="true"></i>
          </div>

          <button className="menu-button" onClick={handleDashboardClick}>Dashboard</button>
          <div className="profile-pic">
            <img src="/images/avatar.jpeg" alt="Profile pic" />
          </div>
          <button className="menu-button" onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          {!isLoggedIn && <button className="menu-button" onClick={handleRegisterClick}>Register</button>}
        </div>
      </header>
      {isLoggedIn &&(
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
)}
      {showNotifications && (
        <NotificationPage notifications={notifications} onClose={handleCloseNotifications} />
      )}
    </>
  );
};

export default Header;
