
import './Dpiit2.css';
import { Fade } from 'react-awesome-reveal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dpiit2= () => {
  
  const [isSidebarVisible, setIsSidebarVisible] = useState('null');
  const [activeSection, setActiveSection] = useState('objective');

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const navigate = useNavigate();

  const handleDpiit1 = () =>{
    navigate('/dpiit1');
  }

  return (
    <div className="N009dpiit-endorsement-container">
      <Fade direction="up" triggerOnce>
        <section className="N009header-section">
          <div className="N009header-content">
            <h1>DPIIT Endorsement</h1>
            <p>
            Unlock DPIIT recognition through Startup Connect and enjoy exclusive benefits like tax incentives, simplified compliance, and fast-tracked IP protection. These perks are designed to remove barriers and speed up your 
            startup's success.
            </p><br></br><br></br>
            <button className="N009get-recognised-btn" onClick={handleDpiit1}>Get Recognised</button>
          </div>
          <img src="\images\dd1.png" alt="DPIIT Logo" className="N009header-logo" />
        </section>
      </Fade>

      <Fade direction="up" triggerOnce>
  <section className="N009criteria-section">
    <h2>CRITERIA FOR DPIIT STARTUP</h2><br></br>
    <div className="N009criteria-grid">
      <div className="N009criteria-item">
        <div className="N009criteria-header">
          <h3>Company Age</h3>
          <img src="\images\dd2.png" alt="Company Age Icon" className="N009circle-logo" />
        </div>
        <p>Your business must be less than 10 years old from the date of incorporation.</p>
      </div>
      <div className="N009criteria-item">
        <div className="N009criteria-header">
          <h3>Company Formation</h3>
          <img src="\images\dd1.png" alt="Company Formation Icon" className="N009circle-logo" />
        </div>
        <p>Your company must be structured as a Private Limited Company, a Registered Partnership Firm, or a Limited Liability Partnership.</p>
      </div>
      <div className="N009criteria-item">
        <div className="N009criteria-header">
          <h3>Revenue Requirement</h3>
          <img src="\images\dd5.png" alt="Revenue Requirement Icon" className="N009circle-logo" />
        </div>
        <p>Your company's annual turnover must not exceed INR 100 crore in any financial year.</p>
      </div>
      <div className="N009criteria-item">
        <div className="N009criteria-header">
          <h3>Unique Entity</h3>
          <img src="\images\dd3.png" alt="Unique Entity Icon" className="N009circle-logo" />
        </div>
        <p>The entity must be newly formed, not created by restructuring or splitting an existing business.</p>
      </div>
      <div className="N009criteria-item">
        <div className="N009criteria-header">
          <h3>Creativity & Scalability</h3>
          <img src="\images\dd4.png" alt="Creativity Icon" className="N009circle-logo" />
        </div>
        <p>The startup must aim to enhance products or services and have scalable business models.</p>
      </div>
    </div>
  </section>
</Fade>
<div className="N009tax-exemption-section-container">
  {/* Title */}
  <h2 className="N009tax-exemption-title">Startup Connect profiles</h2>
  

  {/* Left-side statistics */}
  <div className="N009tax-exemption-section-left">
    <div className="N009tax-exemption-section-item">
      <div className="N009tax-exemption-section-icon">🎓</div>
      <a href="/income-tax-exemptions" className="N009tax-exemption-section-label">
        <strong>Income Tax Exemptions</strong>
      </a>
    </div>
    <div className="N009tax-exemption-section-item">
      <div className="N009tax-exemption-section-icon">✔️</div>
      <a href="/startup-india-hub" className="N009tax-exemption-section-label">
        <strong>Investor </strong>
      </a>
    </div>
    <div className="N009tax-exemption-section-item">
      <div className="N009tax-exemption-section-icon">⭐</div>
      <a href="/startups-recognised" className="N009tax-exemption-section-label">
        <strong>Startup</strong>
      </a>
    </div>
    <div className="N009tax-exemption-section-item">
      <div className="N009tax-exemption-section-icon">💰</div>
      <a href="/startups-funded" className="N009tax-exemption-section-label">
        <strong>Merchants</strong>
      </a>
    </div>
  </div>
  <div className="N009tax-exemption-section-right">
    <img src="\images\dd5.png" alt="Stats" className="N009tax-exemption-section-image" />
    <div className="N009tax-exemption-section-text-overlay"></div>
  </div>
</div>

    
<div className="N009container">
      <button className="N009toggle-sidebar" onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {isSidebarVisible && (
        <div className="N009sidebar">
          <ul>
            <li onClick={() => handleSidebarClick('selfCertification')}>Self Certification</li>
            <li onClick={() => handleSidebarClick('patentApplication')}>Startup Patent Application & IPR Application</li>
            <li onClick={() => handleSidebarClick('taxExemption')}>Tax Exemption Under 80IAC</li>
            <li onClick={() => handleSidebarClick('section56')}>Section 56 Exemption</li>
            <li onClick={() => handleSidebarClick('windingUp')}>Easy Winding Up Of Company</li>
            <li onClick={() => handleSidebarClick('procurement')}>Easier Public Procurement Norms</li>
          </ul>
        </div>
      )}

      <div className="N009content">
        {activeSection && (
          <div>
            <div className="N009objective">
              <h3 onClick={() => toggleSection('objective')}>
                A. Objective{' '}
                <button className="N009dropdown-btn">{activeSection === 'objective' ? '▲' : '▼'}</button>
              </h3>
              {activeSection === 'objective' && (
                <p>
                  To reduce the regulatory burden on Startups, thereby allowing them to focus on their core business and keep compliance costs low.
                </p>
              )}
            </div>

            <div className="N009objective">
              <h3 onClick={() => toggleSection('benefits')}>
                B. Benefits{' '}
                <button className="N009dropdown-btn">{activeSection === 'benefits' ? '▲' : '▼'}</button>
              </h3>
              {activeSection === 'benefits' && (
                <div>
                  <p>
                    Startups are allowed to self-certify compliance for 6 Labour Laws and 3 Environmental Laws through a simple online procedure. In the case of labour laws, no inspections will be conducted for a period of 5 years. Startups may be inspected only on receipt of a credible and verifiable complaint of violation, filed in writing and approved by at least one level senior to the inspecting officer.
                  </p>
                  <p>
                    In the case of environment laws, startups which fall under the ‘white category’ (as defined by the Central Pollution Control Board (CPCB)) would be able to self-certify compliance and only random checks would be carried out in such cases.
                  </p>
                  <h4>Labour Laws:</h4>
                  <ul>
                    <li>The Building and Other Constructions Workers’ (Regulation of Employment & Conditions of Service) Act, 1996</li>
                    <li>The Inter-State Migrant Workmen (Regulation of Employment & Conditions of Service) Act, 1979</li>
                    <li>The Payment of Gratuity Act, 1972</li>
                    <li>The Contract Labour (Regulation and Abolition) Act, 1970</li>
                    <li>The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952</li>
                    <li>The Employees’ State Insurance Act, 1948</li>
                  </ul>
                  <h4>Environment Laws:</h4>
                  <ul>
                    <li>The Water (Prevention & Control of Pollution) Act, 1974</li>
                    <li>The Water (Prevention & Control of Pollution) Cess (Amendment) Act, 2003</li>
                    <li>The Air (Prevention & Control of Pollution) Act, 1981</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="N009objective">
              <h3 onClick={() => toggleSection('eligibility')}>
                C. Eligibility{' '}
                <button className="N009dropdown-btn">{activeSection === 'eligibility' ? '▲' : '▼'}</button>
              </h3>
              {activeSection === 'eligibility' && <p>Eligibility criteria go here.</p>}
            </div>

            <div className="N009objective">
              <h3 onClick={() => toggleSection('registration')}>
                D. Registration Process{' '}
                <button className="N009dropdown-btn">{activeSection === 'registration' ? '▲' : '▼'}</button>
              </h3>
              {activeSection === 'registration' && <p>Details about the registration process go here.</p>}
            </div>

            <button className="N009get-recognised-btn" onClick={handleDpiit1}>Get Recognised</button>
          </div>
        )}
      </div>
    </div>

      
        <Fade direction="up" triggerOnce>
  <section className="N009useful-links-section">
    <div className="N009logo-container">
      <img src="\images\dd6.png" alt="Logo" className="N009section-logo" />
      <h2>Useful Links</h2>
    </div>
    <div className="N009links-grid">
      {/* Policy Notifications PDF link */}
      <div className="N009link-item">
        <img src="\images\dd7.png" alt="Policy Notifications" className="N009item-logo" />
        <a 
          href="D:\startup\myapp\myapp\public\assets.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Policy Notifications
        </a>
      </div>

      {/* Income Tax Notifications Page Link */}
      <div className="N009link-item">
        <img src="\images\dd8.png" alt="Income Tax Notifications" className="N009item-logo" />
        <a 
          href="https://example.com/income-tax-notifications" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Income Tax Notifications
        </a>
      </div>

      {/* Recognised & Tax Certificates Page Link */}
      <div className="N009link-item">
        <img src="\images\dd9.png" alt="Recognised & Tax Certificates" className="N009item-logo" />
        <a 
          href="https://example.com/recognised-tax-certificates" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Recognised & Tax Certificates
        </a>
      </div>

      {/* Startup India Action Plan PDF link */}
      <div className="N009link-item">
        <img src="\images\dd10.png" alt="Startup India Action Plan" className="N009item-logo" />
        <a 
          href="/path-to-pdf/StartupIndiaActionPlan.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Startup Connect Action Plan
        </a>
      </div>

      {/* List of Facilitators for Patent Page Link */}
      <div className="N009link-item">
        <img src="\images\dd11.png" alt="List of Facilitators for Patent" className="N009item-logo" />
        <a 
          href="https://example.com/list-of-facilitators-patent" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          List of Facilitators for Patent
        </a>
      </div>

      {/* List of Facilitators for TradeMarks Page Link */}
      <div className="N009link-item">
        <img src="\images\dd12.png" alt="List of Facilitators for TradeMarks" className="N009item-logo" />
        <a 
          href="https://example.com/list-of-facilitators-trademarks" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          List of Facilitators for TradeMarks
        </a>
      </div>

      {/* FAQs on Patents Page Link */}
      <div className="N009link-item">
        <img src="\images\dd13.png" alt="FAQs on Patents" className="N009item-logo" />
        <a 
          href="https://example.com/faqs-on-patents" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          FAQs on Patents
        </a>
      </div>

      {/* GeM Startup Runway Page Link */}
      <div className="N009link-item">
        <img src="\images\dd14.png" alt="GeM Startup Runway" className="N009item-logo" />
        <a 
          href="https://example.com/gem-startup-runway" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GeM Startup Runway
        </a>
      </div>
    </div>
  </section>
</Fade>

    </div>
  );
};

export default Dpiit2;
