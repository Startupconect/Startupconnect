import React, { useState } from 'react';
import './StartupProfile.css';

const StartupProfile = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerContent = [
    {
      front: "Idea Stage",
      back: "The Idea Stage is the initial phase of the entrepreneurial journey, where aspiring entrepreneurs generate innovative concepts and identify potential opportunities for business ventures.",
    },
    {
      front: "Early Stage",
      back: "The Early Stage is where entrepreneurs transition from concept to execution. At this point, startups have developed a minimum viable product (MVP) and are starting to gain traction in the market.",
    },
    {
      front: "Growth Stage",
      back: "The Growth Stage is characterized by rapid expansion and increasing market share. Startups have established a viable business model and are focusing on scaling operations, increasing revenue, and entering new markets.",
    },
    {
      front: "Maturity/Exit Stage",
      back: "The Maturity Stage signifies that a startup has established itself as a viable and stable business. At this point, revenue growth may stabilize, and the focus shifts toward optimizing operations, enhancing profitability, and exploring new opportunities for expansion.",
    },
  ];

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
    <div className="startup-container">
      {/* Top Section - Banner */}
      <div className="start-img-container">
      <button className="custom-button">
      Startups
    </button>
      </div>

      {/* Middle Section - Profile and Gallery */}
      <div className="startup-middle-section">
        <div className="startup-left-section">
          <div className="startup-details-card">
            <h2 className="section-title">Profile</h2>
            <h3 className="startup-details-title">Startup Details</h3>
            <div className="dipp-recognized">DPIIT Recognised</div>
             
            

            <p className="startup-description">
              Nano Nexus Private Limited is a software company specializing in advanced AI solutions. It focuses on driving digital transformation by leveraging artificial intelligence to enhance business operations. Their services are tailored to help businesses stay competitive in the tech landscape. Nano Nexus provides custom AI-driven solutions designed to meet specific client needs, helping companies achieve technological innovation and efficiency.
            </p>
            <div className="startup-info-grid">
              <div className="info-block">
                <span className="info-title">Stage</span>
                <span className="info-value">Early Traction</span>
              </div>
              <div className="info-block">
                <span className="info-title">Focus Industry</span>
                <span className="info-value">Food & Beverages</span>
              </div>
              <div className="info-block">
                <span className="info-title">Location</span>
                <span className="info-value">Jalna, Maharashtra</span>
              </div>
              <div className="info-block">
                <span className="info-title">No of Active Years</span>
                <span className="info-value">0-1 Years</span>
              </div>
            </div>
              <div >
      {status === 'connect' && (
        <button className="statup-floating-connect-btn" onClick={handleClick}>
          <span className="statup-icon">👤+Connect</span>
        </button>
      )}
      {status === 'pending' && (
        <button className="statup-floating-pending-btn" onClick={handleAccept}>
          <span className="statup-icon">⏳Pending</span>
        </button>
      )}
      {status === 'message' && (
        <button className="statup-floating-message-btn">
          <span className="statup-icon">✉️Message</span>
        </button>
      )}
    </div>
          </div>
          
        </div>

        <div className="startup-right-section">
          <div className="startup-gallery-card">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-placeholder">
              No image or video has been uploaded yet.
            </div>
            <div className="join-date">
              Joined Startup India: Sep 27, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Stages of Startups with Flip Cards */}
      <div className="startup-bottom-section">
        <h2 className="section-title">Stages of Startups in the Ecosystem</h2>
        <div className="parent-container">
          {containerContent.map((content, index) => (
            <div
              key={index}
              className={`flip-card ${activeIndex === null ? "" : activeIndex === index ? "active" : "inactive"}`}
              onClick={() => {
                if (activeIndex === index) {
                  setActiveIndex(null); // If clicked again on the same active card, deactivate it
                } else {
                  setActiveIndex(index);
                }
              }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>{content.front}</p>
                </div>
                <div className="flip-card-back">
                  <p>{content.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;
