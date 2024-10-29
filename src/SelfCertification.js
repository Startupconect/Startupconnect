import React from 'react';
import './SelfCertification.css'; // Import the CSS

const SelfCertification = () => {
  return (
    <div className="Z001-self-certification">
      <p>
        The process of conducting inspections shall be made more meaningful and simple! Startups shall be allowed to self-certify
        through the Startup mobile app with <strong>9 Labour Laws</strong> and <strong>3 Environment Laws</strong> listed below. 
        In the case of the labour laws, no inspections will be conducted for a period of <strong>3 to 5 years</strong>. Startups may be inspected on receipt of credible and verifiable complaint of violation, filed in writing and approved by at least one level senior to the inspecting officer:<br></br>
        <br></br><strong>The Startups may self-certify compliance in respect of the following:</strong>
      </p>
      
      <div className="Z001-certification-section">
        <h3 className="Z001-labour-header">Labour Laws</h3>
        <div className="Z001-laws-grid">
          <div className="Z001-law-item">
            <img src="\images\s1.png" alt="Labour Logo" className="Z001-law-logo" />
            Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act, 1996
          </div>
          <div className="Z001-law-item">
            <img src="\images\s2.png" alt="Labour Logo" className="Z001-law-logo" />
            The Inter-State Migrant Workmen (Regulation of Employment & Conditions of Service) Act, 1979
          </div>
          <div className="Z001-law-item">
            <img src="\images\s3.png" alt="Labour Logo" className="Z001-law-logo" />
            The Payment of Gratuity Act, 1972
          </div>
          <div className="Z001-law-item">
            <img src="\images\s4.png" alt="Labour Logo" className="Z001-law-logo" />
            The Contract Labour (Regulation and Abolition) Act, 1970
          </div>
          <div className="Z001-law-item">
            <img src="\images\s5.png" alt="Labour Logo" className="Z001-law-logo" />
            The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952
          </div>
          <div className="Z001-law-item">
            <img src="\images\s6.png" alt="Labour Logo" className="Z001-law-logo" />
            The Employees' State Insurance Act, 1948
          </div>
          <div className="Z001-law-item">
            <img src="\images\s7.png" alt="Labour Logo" className="Z001-law-logo" />
            The Industrial Disputes Act, 1947
          </div>
          <div className="Z001-law-item">
            <img src="\images\s8.png" alt="Labour Logo" className="Z001-law-logo" />
            The Trade Unions Act, 1926
          </div>
          <div className="Z001-law-item">
            <img src="\images\s9.png" alt="Labour Logo" className="Z001-law-logo" />
            The Industrial Employment (Standing Orders), 1946
          </div>
        </div>
      </div>

      <div className="Z001-certification-section">
        <h3 className="Z001-env-header">Environment Laws</h3>
        <p>Ministry of Environment, Forest & Climate Change (MoEF&CC) has published a list of 36 white category industries. Startups falling under the “White category” would be able to self-certify compliance in respect of 3 Environment Acts:</p><br></br>
        <div className="Z001-laws-grid">
          <div className="Z001-law-item">
            <img src="\images\s10.png" alt="Environment Logo" className="Z001-law-logo" />
            The Water (Prevention & Control of Pollution) Act, 1974
          </div>
          <div className="Z001-law-item">
            <img src="\images\s11.png" alt="Environment Logo" className="Z001-law-logo" />
            The Water (Cess Amendment) Act, 2003
          </div>
          <div className="Z001-law-item">
            <img src="\images\s12.png" alt="Environment Logo" className="Z001-law-logo" />
            The Air (Prevention & Control of Pollution) Act, 1981
          </div>
        </div>
      </div>

      <div className="Z001-portal-section">
        <p>To self-certify compliance, visit the 'Shram Suvidha Portal' by clicking below:</p>
        <a href="https://shramsuvidha.gov.in/startUp.action" target="_blank" rel="noopener noreferrer">
          <button className="Z001-portal-button">Shram Suvidha Portal</button>
        </a>
      </div>
    </div>
  );
};

export default SelfCertification;
