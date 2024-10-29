// merchant.js
import './MerchantProfile.css';
import React, { useState, useEffect } from 'react';


const Merchantlist = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    // Merchant Information state
    const [merchantInfo] = useState({
        productType: 'Others',
        serviceAreas: 'All places',
        focusSectors: 'Others, Auto & Truck',
        location: 'Surat, Gujarat',
        aboutProduct: `Dholaku Ventures is a dynamic investment firm committed to fostering innovation 
                        and supporting visionary entrepreneurs across India. As a key player in the venture 
                        capital ecosystem, we focus on identifying and nurturing early-stage startups 
                        with high-growth potential.`,
        engagementLevel: 4,
        phone: '000000000',
        email: 'XXXXXX@gmail.com',
    });

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'Overview':
                return (
                    <div className="overview-section">
                        <h2>About Product</h2>
                        <p>{merchantInfo.aboutProduct}</p>
                    </div>
                );
            case 'Point of Contact':
                return (
                    <div className="contact-section">
                        <h3>Point of Contact</h3>
                        <p>Business Name: <br />
                            Phone Number: {merchantInfo.phone} <br />
                            Email Address: {merchantInfo.email} <br />
                            Location: {merchantInfo.location} <br />
                            Website: <br />
                            Social Media Links: <br />
                            Customer Support Hours: <br />
                            WhatsApp or Messenger Link: 
                        </p>
                    </div>
                );
            case 'Review and Ratings':
                return (
                    <div className="review-section">
                        <h3>Review and Ratings</h3>
                        <p>Ratings: {'★'.repeat(merchantInfo.engagementLevel)}{'☆'.repeat(5 - merchantInfo.engagementLevel)} (4/5)</p>
                        <p>Reviews: "Great venture firm, helped a lot in the early stages of my startup!"</p>
                    </div>
                );
            default:
                return null;
        }
    };
  
const [counter, setCounter] = useState(0);
const limit = 500; // Set the upper limit for the counter

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter < limit) {
          return prevCounter + 1;
        } else {
          clearInterval(interval); // Stop when reaching the limit
          return prevCounter;
        }
      });
    }, 10); // Increment every 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [limit]);

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

        <div className='maincontainer'>
            <img src="\images\merchantimgban.png" alt="merchant" />
            <div className="merchant-layout">
            {/* Left Section */}
            <div className="left-section">
                <h3>Merchant Information</h3>
                <p><strong>Product Type:</strong> {merchantInfo.productType}</p>
                <p><strong>Service Areas:</strong> {merchantInfo.serviceAreas}</p>
                <p><strong>Focus Sectors:</strong> {merchantInfo.focusSectors}</p>
                <p><strong>Location:</strong> {merchantInfo.location}</p>
                <div>
      {status === 'connect' && (
        <button className="-bot197-floating-connect-btn" onClick={handleClick}>
          <span className="-bot197-icon">👤+Connect</span>
        </button>
      )}
      {status === 'pending' && (
        <button className="-bot197-floating-pending-btn" onClick={handleAccept}>
          <span className="-bot197-icon">⏳Pending</span>
        </button>
      )}
      {status === 'message' && (
        <button className="-bot197-floating-message-btn">
          <span className="-bot197-icon">✉️Message</span>
        </button>
      )}
    </div>
               
            </div>

            {/* Center Section */}
            <div className="center-section">
                {/* Header Tabs */}
                <div className="header-tabs">
                    <button
                        className={`tab-button ${activeSection === 'Overview' ? 'active' : ''}`}
                        onClick={() => setActiveSection('Overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`tab-button ${activeSection === 'Point of Contact' ? 'active' : ''}`}
                        onClick={() => setActiveSection('Point of Contact')}
                    >
                        Point of Contact
                    </button>
                    <button
                        className={`tab-button ${activeSection === 'Review and Ratings' ? 'active' : ''}`}
                        onClick={() => setActiveSection('Review and Ratings')}
                    >
                        Review and Ratings
                    </button>
                </div>

                {/* Dynamic Section Content */}
                <div className="section-content">
                    {renderSectionContent()}
                </div>
    
            </div>

            {/* Right Section */}
            <div className="merchant-right">
                <div className="profile-info89">
                    <img src="\images\boy-icon.jpg" alt="Profile" />
                    <h3>NAME</h3>
                    <p>ENGAGEMENT LEVEL:</p>
                    <p>{'★'.repeat(merchantInfo.engagementLevel)}{'☆'.repeat(5 - merchantInfo.engagementLevel)}</p>
                    <div className="contact-info">
                        <p><i className="fa fa-phone"></i> {merchantInfo.phone}</p>
                        <p><i className="fa fa-envelope"></i> {merchantInfo.email}</p>
                    </div>
                </div>
            </div> 
                
        </div>
         <div className='bottomcontainer'>
            <div className='centerbottom'>
            <img src="\images\hs.png" alt="hand"/>
                <p>Tie up with Companies</p>
                <br></br>
                <div className="counter-container">
                 <span id="counter">{counter}</span>
               </div>

            </div>
         </div>
        </div>
    );
};

export default Merchantlist;
