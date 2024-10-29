// Disclaimer.jsx
import React from 'react';
import './Disclaimer.css'; // Assuming you have CSS for styling
import { FaInfoCircle } from 'react-icons/fa'; // Example: Info Circle icon
import { FaTimes } from 'react-icons/fa'; // Import the close (X) icon
import { Link } from 'react-router-dom';

const Disclaimer = ({ onClose }) => {
  return (
    <div className="disclaimer-overlay67"> {/* Background overlay */}
      <div className="disclaimer-modal67"> {/* Centered popup modal */}
        <button className="close-btn67" onClick={onClose}> {/* Close Button */}
          <FaTimes />
        </button>
        <div className="disclaimer-content67">
          <h2>Welcome to Kairaa Serve Tech</h2>
          <h3>
            <FaInfoCircle style={{ marginRight: '8px', color: '#ff6600' }} />
            Disclaimer
          </h3>
          <hr />
          <p>
            The newly launched <strong>Startup Connect</strong> is a new registration process that may enable you to get your <strong>Startup ID</strong>, and may also allow you to create your preferred profile.
          </p>
          <p>
            Further, only those members who have completed their <strong>Startup Connect public profiles</strong> after the generation of the <strong>Startup ID</strong> would be available for search in the <strong>network section</strong>.
          </p>
          <Link to="/Kairaa78" style={{ textDecoration: 'none' }} className="know-more-btn67">
            <button onClick={onClose}>KNOW MORE </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;