import React from "react";
import "./InvestorPage.css"; // External CSS file for styling
import { Link } from "react-router-dom";



const InvestorPage = () => {
  
  return (
    <div className="home-container11">
      {/* Main Banner Section */}
      <div className="banner11">
        <img
          src="\images\photo-two-men-shaking-hands-black-background_709984-282.avif"
          alt="Investing of Tomorrow"
          className="banner-img11"
        />
        <div className="banner-text11">
          <h2>INVESTMENT BUSINESS</h2>
          <h4>"An investment in knowledge pays the best interest"</h4>
          <Link to="/InvestorCont1" style={{ textDecoration: 'none' }} className="investor-btn11">
          <button className="investor-btn111">Our Investors →</button>
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default InvestorPage;
