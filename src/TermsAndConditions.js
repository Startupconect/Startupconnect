import React, { useState, useEffect, useRef } from 'react';
import './TermsAndConditions.css';
import { Link } from 'react-router-dom';
const TermsAndConditions = () => {
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      // Check if user has scrolled to the bottom
      if (scrollTop + clientHeight >= scrollHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='terms-main'>    
    <div className="terms-container">
      <div className="terms-header">
        <h2>Terms and Conditions</h2>
        {/* Removed the close button */}
      </div>
      <div className="terms-content" ref={contentRef}>
        <h3>Information Disclaimer</h3>
        <p>
          The public is intended to get information from the Startup Connect Hub online site. This website's information and papers are provided solely for reference and do not claim to be legal documents.
        </p>
        <h3>Accuracy of Information</h3>
        <p>
          The information, text, graphics, links, and other materials contained in the Startup Connect Hub online portal are not warranted to be accurate or complete by the Department of Industrial Policy & Promotion (DIPP), the Ministry of Commerce, the Government of India, or Invest India. The contents of the website are subject to frequent changes due to updates and adjustments.
        </p>
        <h3>External Links</h3>
        <p>
          Hypertext links or pointers to content produced and maintained by non-governmental or private organizations may be included in the content published on this website. These resources and instructions are only being provided by DIPP for your convenience and information. When you pick a link to an outside website, you are leaving the 'Guidelines for Indian Government Websites' site and are subject to the privacy and security policies of the owners/sponsors of the outside website.
        </p>
        <h3>Governing Law</h3>
        <p>
          The laws of India will apply to the interpretation and enforcement of these terms and conditions. The Indian courts shall have jurisdiction over any dispute arising under these terms and conditions.
        </p>
      </div>
      {showButton && (
        <Link to="/login"  style={{ textDecoration: 'none' }}>
        <button className="action-btn animate">Understood</button>
        </Link>
      )}
    </div>
    </div>
  );
};

export default TermsAndConditions;
