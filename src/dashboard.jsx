import React from "react";
import {useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./dashboard.css"; // Importing CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();
  const overviewclick=()=>{
    navigate('/overview')
  }
  const settingsclick=()=>{
    navigate('/settings')
  }
  const profileclick=()=>{
    navigate('/profile')
  }
  const loginclick=()=>{
    navigate('/login')
  }
  return (
    <div className="dashboard-container379">
      <aside className="sidebar379">
      <h2>Dashboard</h2>
           <center><img src="/images/man1.png" alt="Profile" className="profileimg379" />
            <p className="profile-name379">User-name</p>
            <p className="profile-category379">User-category</p>
          </center>
            <button className="logoutbtn379" onClick={loginclick}>Logout</button>
      </aside>
      <main className="main-content379">
        <header className="header">
          <h1>Welcome to Your Dashboard</h1>
          <p>Here you can manage your account and settings.</p>
        </header>
        <section className="content379">
          <div className="content-box379" onClick={overviewclick}>
            <h2>Overview</h2>
            <p>Your recent activities and status overview.</p>
          </div>
          <div className="content-box379" onClick={settingsclick}>
            <h2>Settings</h2>
            <p>Manage your account settings and preferences.</p>
          </div>
          <div className="content-box379" onClick={profileclick}>
            <h2>Profile</h2>
            <p>View and edit your personal profile information.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;