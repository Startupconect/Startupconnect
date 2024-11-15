import React from 'react';
import './overview.css';
import { useNavigate } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
const Overview = () => {
    const recentConnections = ["Startup A", "Investor B", "Mentor C"];
    const pendingRequests = 3;
    const profileViews = 125;
    const messages = 23;
    const suggestedConnections = ["Startup D", "Investor E"];
    const navigate = useNavigate();
    const backclick=()=>{
        navigate('/dashboard')
    }

    return (
        <div className="overview-container381">
            <h2 className='overview-h2'>Overview</h2>
            
            {/* Activity Summary */}
            <section className="overview-section381">
                <h3>Activity Summary</h3>
                <p><strong>Recent Connections:</strong> {recentConnections.join(", ")}</p>
                <p><strong>Pending Requests:</strong> {pendingRequests}</p>
                <p><strong>Profile Views:</strong> {profileViews}</p>
                <p><strong>Messages:</strong> {messages}</p>
            </section>

            {/* Quick Actions */}
            <section className="overview-section381">
                <h3 className='overview-h3'>Quick Actions</h3>
                <div className='nav-btn-overview'>
                <button className='overview-btn381'>Connect with New User</button>
                <button className='overview-btn381'>Send a Message</button><br></br>
                <button className='overview-btn381'>Invite Others</button>
                <button className='overview-btn381'>Upgrade Plan</button>
                </div>
            </section>

            {/* Platform Insights */}
            <section className="overview-section381">
                <h3 className='overview-h3'>Platform Insights</h3>
                <p><strong>Trending Startups:</strong> Startup X, Startup Y</p>
                <p><strong>Suggested Connections:</strong> {suggestedConnections.join(", ")}</p>
            </section>

            {/* To-Do List / Reminders */}
            <section className="overview-section381">
            <h3 className='overview-h3'>To-Do List / Reminders</h3>
            <br></br>
            <ul className="todo-list">
            <li className="todo-item">
                <FaHandPointRight className="todo-icon" /> Complete your profile
            </li>
            <li className="todo-item">
                <FaHandPointRight className="todo-icon" /> Respond to {pendingRequests} pending connection requests
            </li>
            <li className="todo-item">
                <FaHandPointRight className="todo-icon" /> Add a new product (if applicable)
            </li>
            </ul>
            </section>
            <br></br>
            <button className='back-btn381' onClick={backclick}>Back</button>
        </div>
    );
};

export default Overview;
