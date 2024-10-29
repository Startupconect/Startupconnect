import React, { useState, useEffect } from 'react';
import './dashboard-back.css';
import axios from 'axios';  // Assuming axios is used for API requests

const Dashboard1 = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data for the logged-in user from your backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/dashboard');  // Adjust the API route as needed
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading data. Please try again later.</div>;
  }
      return(
        <div className="dashboard">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-card">
            <img src={userData.profilePicture} alt="Profile" className="profile-img" />
            <h2 className="profile-name">{userData.name}</h2>
            <p className="profile-category">{userData.category}</p>
          </div>
  
          {/* Filter by Category */}
          <div className="filter-section">
            <label htmlFor="filter-category">Filter by Category</label>
            <select id="filter-category">
              <option value="startups">Startups</option>
              <option value="investors">Investors</option>
              <option value="merchants">Merchants</option>
              <option value="others">Others</option>
            </select>
  
            <ul className="filter-list">
              <li>Industry <span>+</span></li>
              <li>Sector <span>+</span></li>
              <li>Stage <span>+</span></li>
              <li>State <span>+</span></li>
              <li>City <span>+</span></li>
            </ul>
          </div>
        </section>
  
        {/* User Connections */}
        <section className="connect-options">
          <div className="connect-card">
            <h3>Startups you're connected to</h3>
            <p>{userData.connectedStartups.length} Startups connected</p>
            <button className="view-btn">View All</button>
          </div>
  
          <div className="connect-card">
            <h3>Investors you're connected to</h3>
            <p>{userData.connectedInvestors.length} Investors connected</p>
            <button className="view-btn">View All</button>
          </div>
  
          <div className="connect-card">
            <h3>Mentors you're connected to</h3>
            <p>{userData.connectedMentors.length} Mentors connected</p>
            <button className="view-btn">View All</button>
          </div>
  
          <div className="connect-card">
            <h3>Accelerators you're connected to</h3>
            <p>{userData.connectedAccelerators.length} Accelerators connected</p>
            <button className="view-btn">View All</button>
          </div>
        </section>
      </div>
    );
  }

export default Dashboard1;