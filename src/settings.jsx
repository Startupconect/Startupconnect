import React, { useState } from 'react';
import "./settings.css";
import { useNavigate } from 'react-router-dom';
import { FaLaptop, FaMobileAlt } from 'react-icons/fa'
const Settings = () => {
    // State variables for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
 
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submit action (Replace with actual API call if needed)
        alert("Settings saved successfully!");
    };

    // Handle password change
    const changePassword = () => {
        alert("Password change functionality goes here.");
    };
    const navigate = useNavigate();
    const backclick=()=>{
        navigate('/dashboard')
    }

    return (
        <div className="settings-container380">
            <h2 className='settings-container380-h2'>Settings</h2>
            <form onSubmit={handleSubmit}>
                {/* Account Settings */}
                <section className="settings-section380">
                    <h3 className='settings-container380-h3'>Account Settings</h3>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                    />
                </section>

                {/* Profile Settings */}
                <section className="settings-section380">
                    <h3 className='settings-container380-h3'>Profile Settings</h3>
                    <label>Profile Picture</label>
                    <input type="file" />

                    <label>Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Write a short bio"
                    />

                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                </section>

                {/* Notification Settings */}
                <section className="settings-section380">
                    <h3 className='settings-container380-h3'>Notification Settings</h3>
                    <label>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                        />
                        Email Notifications
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={smsNotifications}
                            onChange={() => setSmsNotifications(!smsNotifications)}
                        />
                        SMS Notifications
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={() => setPushNotifications(!pushNotifications)}
                        />
                        Push Notifications
                    </label>
                </section>

                {/* Security Settings */}
                <section className="settings-section380">
                    <h3 className='settings-container380-h3'>Security Settings</h3>
                    <br></br>
                    <button type="button" className="setting-btn380" onClick={changePassword}>
                        Change Password
                    </button>

                    <label>
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                        />
                        Enable Two-Factor Authentication
                    </label>
                    <br></br>
                    <h4>Login Activity</h4>
                    <br></br>
                    <div>
                        <ul className="device-list">
                            <li className="device-item">
                                <FaLaptop className="device-icon" /> Device 1 - Last login: 10/28/2024
                            </li>
                            <li className="device-item">
                                <FaMobileAlt className="device-icon" /> Device 2 - Last login: 10/26/2024
                            </li>
                        </ul>
                    </div>
                </section>
                <button type="submit" className='setting-btn380'>Save Changes</button>
            </form><br></br>
            <button className='back-btn381' onClick={backclick}>Back</button>
        </div>
    );
};

export default Settings;
