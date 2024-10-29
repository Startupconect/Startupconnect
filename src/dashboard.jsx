import React from 'react';
import "./dashboard.css";
const Dashboard = () => {
    return(
       <>
       <div className='dashboard-container'>
       <div className='left-container1'>
        <div className='profile-section'>
          <div className="profile-card">
            <img src="/images/man1.png" alt="Profile" className="profileimg" />
            <center><h2 className="profile-name">User-name</h2>
            <p className="profile-category">User-category</p></center>
          </div>
          </div>

          <div className="filter-section">
            <label htmlFor="filter-category">Filter by Category</label>
            <select id="filter-category">
              <option value="startups">Startups</option>
              <option value="investors">Investors</option>
              <option value="merchants">Merchants</option>
              <option value="others">Others</option>
            </select>
            <hr></hr>
            <ul className="filter-list">
              <li>Industry <span>+</span></li>
              <li>Sector <span>+</span></li>
              <li>Stage <span>+</span></li>
              <li>State <span>+</span></li>
              <li>City <span>+</span></li>
            </ul>
          </div>
          </div>
          {/**right container */}
        <div className="right-container1">
        <section className="connect-options">
          <div className="connect-card">
            <h3>Startups you're connected to</h3>
            <p> 95 - Startups connected</p>
            <button className="view-btn">View All</button>
          </div>

          <div className="connect-card">
            <h3>Investors you're connected to</h3>
            <p>20 - Investors connected</p>
            <button className="view-btn">View All</button>
          </div>

          <div className="connect-card">
            <h3>Mentors you're connected to</h3>
            <p>45 - Mentors connected</p>
            <button className="view-btn">View All</button>
          </div>

          <div className="connect-card">
            <h3>Accelerators you're connected to</h3>
            <p>29 - Accelerators connected</p>
            <button className="view-btn">View All</button>
          </div>
        </section>
      </div>
      </div>
    </>
    )
}
export default Dashboard;