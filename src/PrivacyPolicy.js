import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // State to manage which section is currently expanded
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to handle section toggle
  const handleToggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="page-container">
      <div className="privacy-policy-container">
        <h2 className="privacy-policy-title">Privacy Policy</h2>
        
        {/* Sections */}
        {renderSection("objective", "Objective", `
          Startup Connect is dedicated to safeguarding any personal data we could obtain from you when using our mobile app and website.
          We think it's critical that you understand how we handle any personal information we might get about you from interactions with us.
          This Privacy Policy was created to give you greater peace of mind regarding the security and privacy of your personal information.
        `, expandedSection, handleToggle)}

        {renderSection("qualifications", "Qualifications", `
          The website and mobile application are meant for everyone who wants to learn more about entrepreneurship and the Indian startup ecosystem.
        `, expandedSection, handleToggle)}

        {renderSection("data", "The Data That We Gather", `
          Launch India websites, applications, microsites, and any associated links do not automatically collect any particular personal data from you.
        `, expandedSection, handleToggle)}

        {renderSection("usage", "How We Could Apply the User Data", `
          By providing Your User Information, You acknowledge and agree that We may keep Your User Information and that We or any of Our Partners may hold it while We process it.
        `, expandedSection, handleToggle)}

        {renderSection("cookies", "Web Beacons and Cookies", `
          You should be aware that when cookies, web beacons, or other similar tracking technologies are used, information and data may be automatically gathered.
        `, expandedSection, handleToggle)}

        {renderSection("disclosure", "Disclosures and Information Exchange", `
          We don't give any publicly or privately identifiable information that users of the Portal Website voluntarily sell or share with any other parties.
        `, expandedSection, handleToggle)}

        {renderSection("linked", "Linked Services", `
          Our website may contain links to or integrations with other services, such as Facebook, Twitter, LinkedIn, and other media sites and platforms.
        `, expandedSection, handleToggle)}

        {renderSection("law", "Regulation of Law and Authority", `
          The laws of India regulate this privacy statement and it is implemented accordingly.
        `, expandedSection, handleToggle)}

        {renderSection("updates", "Updates", `
          We may alter our privacy policy from time to time, and you should check them often.
        `, expandedSection, handleToggle)}
      </div>
    </div>
  );
};

// Helper function to render each section
const renderSection = (id, title, content, expandedSection, handleToggle) => (
  <div key={id} className="section">
    <div className="section-header" onClick={() => handleToggle(id)}>
      <h3>{title}</h3>
      <span className={`arrow ${expandedSection === id ? 'down' : 'right'}`}>
        {expandedSection === id ? '📖' : '📘'}
      </span>
    </div>
    {expandedSection === id && <div className="section-content">{content}</div>}
  </div>
);

export default PrivacyPolicy;
