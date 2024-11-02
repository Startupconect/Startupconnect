import React, { useState } from 'react';
import './NotificationPage.css';

const NotificationPage6070 = ({ notifications, onClose }) => {
  const [filteredNotifications, setFilteredNotifications] = useState(notifications);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter notifications by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setFilteredNotifications(
      category === 'All'
        ? notifications
        : notifications.filter(notification => notification.category === category)
    );
  };

  // Accept connect request handler
  const handleAcceptRequest = (index) => {
    const updatedNotifications = [...filteredNotifications];
    updatedNotifications[index].accepted = true;
    setFilteredNotifications(updatedNotifications);
    alert("You have accepted the connection request.");
  };

  return (
    <div className="notification-modal6070">
      <div className="notification-header6070">
        <h2>Notifications</h2>
        <button className="close-button6070" onClick={onClose}>✖</button>
      </div>

      {/* Category Filters */}
      <div className="notification-filters6070">
        <button onClick={() => filterByCategory('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => filterByCategory('New Startups')} className={selectedCategory === 'New Startups' ? 'active' : ''}>New Startups</button>
        <button onClick={() => filterByCategory('Connect Requests')} className={selectedCategory === 'Connect Requests' ? 'active' : ''}>Connect Requests</button>
      </div>

      <div className="notification-list6070">
        {filteredNotifications.length === 0 ? (
          <p>No new notifications.</p>
        ) : (
          filteredNotifications.map((notification, index) => (
            <div
              className={`notification-item6070 ${notification.read ? 'read' : 'unread'}`}
              key={index}
            >
              <div className="notification-icon6070">
                <i className="fa fa-bell" aria-hidden="true"></i>
              </div>
              <div className="notification-content6070">
                <p>{notification.message}</p>
                <span className="notification-date6070">{notification.date}</span>
              </div>
              <div className="notification-actions6070">
                {notification.type === 'connectRequest' && !notification.accepted && (
                  <button onClick={() => handleAcceptRequest(index)} className="accept-button6070">
                    Accept
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage6070;
