import React from 'react';
import './Dpiit1.css';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Dpiit1 = () => {
  const navigate = useNavigate();
  const handleForm = () =>{
    navigate('/form');  
};
  const handleApplication= () =>{
    navigate('/application');

  };

  return (
    <div className="L0010dpiit-container">
      <div className="L0010dpiit-background"></div> {/* Background for left and right */}
      <Fade direction="up" duration={100} triggerOnce>
        <div className="L0010dpiit-content">
          <Fade cascade damping={0.2} direction="up" duration={100} triggerOnce>
            <h1>DPIIT Startup Recognition & Tax Exemption</h1>
            <p>
              Startups that meet the criteria under the Startup India Action Plan are eligible to apply for recognition under this prestigious program. Recognition unlocks numerous benefits, including tax exemptions, simplified compliance, and access to funding opportunities.
            </p>
          </Fade>

          <Fade delay={100} duration={100} triggerOnce>
            <h2>
              <img src="/images/d1.png" alt="Logo" className="L0010title-logo" />
              Eligibility Criteria for Startup Recognition
            </h2>

            <div style={{ textAlign: 'left' }}>
              <ul>
                <Fade cascade damping={0.3} triggerOnce>
                  <li>
                    <strong>Legal Structure</strong><br /><br />
                    <img src="/images/d2.webp" alt="logo" style={{ width: '15px', marginTop: '5px' }} />
                    The startup must be incorporated as a Private Limited Company, or registered as a Partnership Firm or Limited Liability Partnership (LLP).
                  </li>
                  <li>
                    <strong>Turnover</strong><br /><br />
                    <img src="/images/d2.webp" alt="logo" style={{ width: '15px', marginTop: '5px' }} />
                    The startup's annual turnover should be less than INR 100 crores in any of the previous financial years.
                  </li>
                  <li>
                    <strong>Age Of The Entity</strong><br /><br />
                    <img src="/images/d2.webp" alt="logo" style={{ width: '15px', marginTop: '5px' }} />
                    The entity should not be older than 10 years from the date of incorporation.
                  </li>
                  <li>
                    <strong>Innovation & Impact</strong><br /><br />
                    <img src="/images/d2.webp" alt="logo" style={{ width: '15px', marginTop: '5px' }} />
                    The startup must focus on innovation, improvement of products, services, or processes, with the potential to generate employment or create wealth.
                  </li>
                </Fade>
                <p>Here is the reference detail, 
                  {/* Make the PDF image clickable */}
                  <a href="/path/to/your/pdf-file.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="/images/d3.webp" alt="PDF logo" style={{ width: '50px', marginBottom: '10px' }} />
                  </a>
                </p>
              </ul>
            </div>
          </Fade>

          <Fade delay={100} duration={100} triggerOnce>
            <a href="https://www.nsws.gov.in" target="_blank" rel="noopener noreferrer">
              <button className="L0010apply-button">Apply Now</button>
            </a>
            <p className="L0010nsws-info">
              Eligible startups (Companies, LLPs, and Registered Partnerships) can now apply for DPIIT Recognition seamlessly through the National Single Window System (NSWS). By creating an account on <a href="https://nsws.gov.in">nsws.gov.in</a> and adding the form titled 'Registration as a Startup', you can initiate the recognition process with ease. Once approved, startups are entitled to a tax holiday for 3 consecutive financial years out of their first ten years since incorporation.
            </p>
          </Fade>

          <Fade delay={100} duration={1000} triggerOnce>
            <h2>Startup India: 80 IAC Tax Exemption</h2>
            <p>
              After securing DPIIT recognition, startups can apply for tax exemption under Section 80 IAC of the Income Tax Act. 
              Eligibility Criteria for 80 IAC Tax Exemption:
              <ul>
                <li>The entity must be a recognized startup.</li>
                <li>Only Private Limited Companies or Limited Liability Partnerships (LLPs) are eligible.</li>
                <li>The startup should have been incorporated on or after 1st April, 2016.</li>
              </ul>
              For further details, please refer to the attached notification details.
              {/* Clickable PDF image */}
              <a href="/path/to/your/pdf-file.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/images/d3.webp" alt="PDF logo" style={{ width: '50px', marginTop: '10px' }} />
              </a>
            </p>
          </Fade>

          <div className="L0010buttons">
            <Fade delay={100} duration={100} triggerOnce>
              <button className="L0010tax-button" onClick={handleApplication}>Application Status</button>
            </Fade>
          </div>

          <Fade delay={100} duration={100} triggerOnce>
            <h2>Startup Connect: Angel Tax Exemption (Section 56 of the Income Tax Act)</h2>
            <p>
              Once a startup obtains DPIIT recognition, it can apply for Angel Tax Exemption under Section 56 of the Income Tax Act. 
              This exemption protects startups from taxation on investments that exceed the fair market value.
              Eligibility Criteria for Angel Tax Exemption:
              <ul>
                <li>The entity must be a DPIIT-recognized startup.</li>
                <li>The aggregate amount of paid-up share capital and share premium of the startup, after the proposed issue of shares (if any), should not exceed INR 25 Crore.</li>
              </ul>
              For further details, please refer to the attached notification for details.
              {/* Clickable PDF image */}
              <a href="/path/to/your/pdf-file.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/images/d3.webp" alt="PDF logo" style={{ width: '50px', marginTop: '10px' }} />
              </a>
            </p>
            <div className="L0010buttons">
              <button className="L0010tax-button" onClick={handleForm}>Certificate Number/Entity Name</button>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

export default Dpiit1;
