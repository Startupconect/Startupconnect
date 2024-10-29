import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Header.css'; 

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };
  const handleDashboardClick=()=>{
    navigate('/dashboard');
  }
  const handleHomeClick = () => {
    navigate('/home'); // Navigate to the home page
  };
  const handleAboutClick = () => {
    navigate('/aboutus'); // Navigate to the about page
  };
  const handleStartupClick = () => {
    navigate('/startup'); // Navigate to the startup page
  };
  const handleInvestorClick = () => {
    navigate('/Investor1'); // Navigate to the investor page
  };
  /*const handleMerchantClick = () => {
    navigate('/merchant'); // Navigate to the merchant page
  };*/
  const handleAllCategoryClick = () => {
    navigate('/allcategory'); // Navigate to the merchant page
  };
  const handleRecognitionClick = () => {
    navigate('/navmenu5'); // Navigate to the merchant page
  };
  const handlehelpsupportClick = () => {
    navigate('/contactus'); // Navigate to the merchant page
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
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Hindi">Hindi</option>
          </select>
          <button className="menu-button" onClick={handleDashboardClick}>Dashboard</button>
          <div className="profile-pic">
            <img src="/images/avatar.jpeg" alt="Profile pic" />
          </div>
          <button className="menu-button" onClick={handleLoginClick}>Login</button> {/* Add onClick */}
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
    {/*<button className="nav-link" onClick={handleMerchantClick}>Merchant</button>*/}
      <button className="nav-link" onClick={handleAllCategoryClick}>All Categories</button>
      <button className="nav-link" onClick={handlehelpsupportClick}>Help & Support</button>
        
      </nav>
    </>
  );
};
export default Header;