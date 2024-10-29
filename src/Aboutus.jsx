import React from 'react';
import './Aboutus.css'; // Assuming you have a CSS file for Main component
import {useNavigate} from 'react-router-dom';
const Aboutus = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const handleContactClick = () => {
    navigate('/contactus'); // Navigate to the contact-form page
  };
  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };
  return (
    <main>
      {/* About Us Section */}
      <div className="aboutus-container">
      {/* Left Container */}
      <div className="left-container87">
        <img
          src="\images\Chedi.jpg" // Replace with the actual left-side image or SVG URL
          alt="Left Decoration"
          className="left-image87"
        />
      </div>

      {/* Middle Container */}
      <div className="middle-container87">
        <h2>About Us</h2>
        <p>
          <span className="highlight87">Startup Connect</span> fosters
          collaboration by connecting entrepreneurs, investors, and experts,
          creating a thriving ecosystem for innovation. It’s the platform where
          startups find guidance, funding, and opportunities for growth.
        </p>
      </div>

      {/* Right Container */}
      <div className="right-container">
        <div className="right-images">
          <img
            src="\images\album.jpg" // Replace with the actual image URL
            alt="Person"
            className="right-image"
          />
        </div>
      </div>
    </div>

      {/* Why Startup Connect Section */}
      <section id="why-startup" className="why-startup">
        <h2>Why Startup Connect</h2>
        <p>
          Startup Connect is a dynamic platform driving entrepreneurial growth, business innovation,
          and customer satisfaction. It provides essential tools and support for startups and businesses
          to thrive in today’s competitive market.
        </p>

        <div className="features">
          <div className="feature">
            <h3>🔎Advanced Search Capabilities</h3>
            <ul>
              <li>Business name, category, location, or keywords</li><br>
              </br>
              <li>Filter results by customer ratings, proximity, or specific services</li><br></br>
              <li>Deliver relevant results tailored to both consumer and business needs</li>
            </ul>
          </div>
          <div className="feature">
            <h3>⏱Real-Time Updates</h3>
            <ul>
              <li>Keep your customers informed with real-time updates</li><br></br>
              <li>Instant alerts for changes in business hours, new services, or promotions</li><br></br>
              <li>Display up-to-date information to build trust</li>
            </ul>
          </div>
          <div className="feature">
            <h3>📈Investment and Networking Opportunities</h3>
            <ul>
              <li>Investor matching to connect with potential funders</li><br></br>
              <li>Pitch preparation to refine and enhance presentations</li><br></br>
              <li>Funding tracking to monitor and manage investments</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section id="about-startup" className="about-startup">
        <div className="box1">
        <img src="\images\About us page-pana3.png" id="abt_img" alt="about.jpg"/>         
        </div>
        <div className="box2">
        <p>
          Online entrepreneurship platform allows startups to network, access free tools<br></br> & resources and participate in programs &challenges
        </p>
        <button className="menu-button" onClick={handleRegisterClick}>Register Now</button>
        <br/>
        </div>
      </section>

        
<section id="query" className='query'>
  <div className="box1">
    <img src="\images\Contact us-rafiki.png" className="cont_img" alt="cont.jpg"/>
  </div>
  <div className="text-container">
    <p>For any queries or feedback, reach out to us through</p>

    <p style={{ display: 'flex', marginLeft: '12%' }}>
    <button className="contact-us"  onClick={handleContactClick}>Contact Us</button>
    </p>
    <p>or our toll free number 070927 74077</p>
  </div>
</section>
    </main>
  );
};

export default Aboutus;
