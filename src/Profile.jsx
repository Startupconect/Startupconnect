import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  // Example state for user data (would usually be fetched from a database)
  const [user] = useState({
    fullName: "John Doe",
    username: "johndoe123",
    email: "john@example.com",
    phone: "+1-234-567-890",
    dob: "1995-05-15",
    category: "Startup",
    companyName: "Tech Innovations Inc.",
    jobTitle: "Founder & CEO",
    location: "San Francisco, CA",
    profilePicture: "/path-to-profile-picture.jpg",
    accountCreated: "2023-01-10",
    accountStatus: "Active",
    notifications: true,
    privacy: "Public",
    language: "English"
  });
  const navigate = useNavigate();
  const backclick=()=>{
      navigate('/dashboard')
  }

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <div className="profile-picture">
      <img src="/images/man1.png" alt="Profile" />
        {/*<img src={user.profilePicture} alt="Profile" />*/}
      </div>
      <br></br>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
      </div>

      <div className="profile-section">
        <h3>Professional Information</h3>
        <p><strong>Category:</strong> {user.category}</p>
        <p><strong>Company Name:</strong> {user.companyName}</p>
        <p><strong>Job Title:</strong> {user.jobTitle}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>

      <div className="profile-section">
        <h3>Account Details</h3>
        <p><strong>Account Created On:</strong> {user.accountCreated}</p>
        <p><strong>Account Status:</strong> {user.accountStatus}</p>
      </div>

      <div className="profile-section">
        <h3>Preferences</h3>
        <p><strong>Notifications:</strong> {user.notifications ? "Enabled" : "Disabled"}</p>
        <p><strong>Privacy Setting:</strong> {user.privacy}</p>
        <p><strong>Language Preference:</strong> {user.language}</p>
      </div><br></br>
      <button className='back-btn381' onClick={backclick}>Back</button>
    </div>
  );
};

export default Profile;
