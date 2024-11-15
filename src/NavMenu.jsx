import React, { useState } from 'react';
import { FaCheck, FaFileAlt, FaClipboard } from 'react-icons/fa';  // FontAwesome icons
import './NavMenu.css';
import Form from './Form';
import SelfCertification from './SelfCertification';
import RegulationsTable from './RegulationsTable';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState('recognition');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="containerT006">
      <div className="sidebar-navT006">
        <ul>
          <li
            className={activeTab === 'recognition' ? 'activeT006' : ''}
            onClick={() => handleTabClick('recognition')}
          >
            <span>Recognition & Tax Certificate</span>
            <img src="\images\n1.png" alt="Recognition Logo" />
          </li>
          <li
            className={activeTab === 'incomeTaxExemption' ? 'activeT006' : ''}
            onClick={() => handleTabClick('incomeTaxExemption')}
          >
            <span>Income Tax Exemption</span>
            <img src="\images\n1.png" alt="Tax Logo" />
          </li>
          <li
            className={activeTab === 'selfCertification' ? 'activeT006' : ''}
            onClick={() => handleTabClick('selfCertification')}
          >
            <span>Self Certification</span>
            <img src="\images\n1.png" alt="Self Cert Logo" />
          </li>
          <li
            className={activeTab === 'regulatoryUpdates' ? 'activeT006' : ''}
            onClick={() => handleTabClick('regulatoryUpdates')}
          >
            <span>Regulatory Updates</span>
            <img src="\images\n1.png" alt="Updates Logo" />
          </li>
        </ul>
      </div>

      <div className="contentT006">
  {activeTab === 'incomeTaxExemption' && (
    <div className="tab-contentT006">
      <h1>Income Tax Exemption Notifications</h1>
      <div className="main-contentT006">
        <div className="text-contentT006">
          <p>
            The Inter-Ministerial Board (IMB), set up by the Department of Industrial Policy and Promotion (DIPP), is dedicated to granting tax-related benefits to startups. These benefits are designed to ease financial burdens and promote innovation among budding entrepreneurs.
          </p>
          <h2><FaClipboard /> Key Points</h2>  {/* Icon replaced with FaClipboard */}
          <ul>
            <li>
              <FaCheck /> <strong>Objective:</strong> The IMB's primary goal is to provide tax incentives to startups recognized by the Department for Promotion of Industry and Internal Trade (DPIIT).
            </li>
            <li>
              <FaCheck /> <strong>Eligibility:</strong> Startups must be recognized by DPIIT, have an annual turnover of less than INR 100 crore, and be incorporated within the last 10 years.
            </li>
            <li>
              <FaCheck /> <strong>Income Tax Exemption:</strong> Startups can claim tax exemptions for three consecutive financial years out of the first ten years since incorporation.
            </li>
            <li>
              <FaCheck /> <strong>Angel Tax Exemption:</strong> Investments from angel investors at higher valuations are exempt from taxation.
            </li>
            <li>
              <FaCheck /> <strong>Capital Gains Tax Exemption:</strong> Startups can benefit from exemptions on capital gains tax under specific circumstances.
            </li>
          </ul>
          <br></br>
          <h2><FaClipboard /> Application Process for IMB Validation</h2>
          <ol>
            <li>Ensure your startup is recognized by DPIIT on the Startup India portal.</li>
            <li>Submit an application for tax benefits to the IMB through the portal, along with necessary documentation.</li>
            <li>The IMB reviews the application and grants tax exemption eligibility upon approval.</li>
          </ol>
          <br></br>
          <h2><FaFileAlt /> Documents Required</h2>  {/* Icon replaced with FaFileAlt */}
          <ul>
            <li><FaFileAlt /> DPIIT Recognition Certificate</li>
            <li><FaFileAlt /> Financial statements proving turnover and income</li>
            <li><FaFileAlt /> Proof of innovation (e.g., patents, technical drawings)</li>
          </ul>
          <p>
            By obtaining IMB validation, your startup can significantly reduce its tax burden, allowing for more resources to fuel growth and innovation.
          </p>
        </div>
        <Link to="/gstverificationform" style={{ textDecoration: 'none' }}>
            <button className="incomebut1">GST & DPIIT Recognition</button>
          </Link>
      </div>
    </div>
  )}

        {activeTab === 'recognition' && (
          <div className="tab-contentT006">
            <h1>Tax Exemption Certificate</h1>
            <Form />
          </div>
        )}

        {activeTab === 'selfCertification' && (
          <div className="tab-contentT006">
            <h1>Self Certification</h1>
            <SelfCertification />
          </div>
        )}

        {activeTab === 'regulatoryUpdates' && (
          <div className="tab-contentT006">
            <h1>Regulatory Updates Content</h1>
            <RegulationsTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
