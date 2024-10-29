import React, { useState } from 'react';
import './InvestorProfile.css'; // Import the CSS file for styling

const InvestorProfile = () => {
  const [hovered, setHovered] = useState(false);
 
  const [status, setStatus] = useState('connect');

  const handleClick = () => {
    if (status === 'connect') {
      setStatus('pending');
    }
  };

  const handleAccept = () => {
    if (status === 'pending') {
      setStatus('message');
    }
  };
  return (
    <div className="profile-page22">
       <div className="top-banner22">
        <img 
          src="\images\buildings.jpg" 
          alt="Top Banner"
          className="banner-image22"
        />
        <div className="banner-text22">
          <h1>FOCUS YOUR INVESTMENT</h1>
          <p className='free122'>Feel Free to Connect</p>
        </div>
      </div>
      

      {/* Investor Profile Section */}
      <div className="container22">
        {/* Left Section */}
        <div className="left-section22">
          <div className="detail-section22">
            <h4 className="section-title22">INVESTOR TYPE</h4>
            <p>Others</p>
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">PREFERRED STARTUP STAGES</h4>
            <p>Ideation, Validation, Early Traction</p>
            
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">FOCUS INDUSTRIES</h4>
            <p>Architecture Interior Design, AR VR</p>
        
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">FOCUS SECTOR'S</h4>
            <p>Others, Others, Auto & Truck</p>
            
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">SERVICE AREA'S</h4>
            <p>Consumer Internet, Enterprise</p>
            
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">INVESTMENT RANGE</h4>
            <p>50 Lacs - 2 Crore INR</p>
            <hr></hr>
          </div>
          <div className="detail-section22">
            <h4 className="section-title22">LOCATION</h4>
            <p>Surat, Gujarat</p>
            <hr></hr>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section22">
          <div className="profile-info22">
            <img
              src="/images/avator.png"
              alt="Investor Avatar"
              className="avatar22"
            />
            <h2 className='free22'>Robert Wilson</h2>
            <p>Level: Explorer</p>
            <div className="rating22">
              {[...Array(5)].map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
            <p>
              <i className="fa fa-phone22"></i> +91 - 63853 29793
            </p>
            <p>
              <i className="fa fa-envelope22"></i> xyz310@gmail.com
            </p>
          </div>

          {/* About Section */}
          <div className="about-section22">
            <h3>About</h3>
            <p>
              Robert Wilson is a dynamic investment firm committed to fostering
              innovation and supporting visionary entrepreneurs across India. As
              a key player in the venture capital ecosystem, we focus on
              identifying and nurturing early-stage startups with high-growth
              potential. Our mission is to empower startups that are shaping the
              future with innovative solutions, disruptive business models, and a
              passion for excellence.
            </p>
            
          </div>
          
          {/* Tie-up Section */}
          <div
            className={`tie-up-section22 ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h3>Tie up with companies</h3>
            <h2>450+</h2>
            <div className="handshake-icon22">
              🤝
            </div>
           
           <div>
      {status === 'connect' && (
        <button className="invest-floating-connect-btn" onClick={handleClick}>
          <span className="invest-icon">👤+Connect</span>
        </button>
      )}
      {status === 'pending' && (
        <button className="invest-floating-pending-btn" onClick={handleAccept}>
          <span className="invest-icon">⏳Pending</span>
        </button>
      )}
      {status === 'message' && (
        <button className="invest-floating-message-btn">
          <span className="invest-icon">✉️Message</span>
        </button>
      )}
    </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;
