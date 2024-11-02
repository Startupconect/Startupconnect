import React, { useState } from 'react';
import './Form.css';
import { FaCertificate, FaUser } from 'react-icons/fa';

const Form = () => {
  const [certificateType, setCertificateType] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [entityName, setEntityName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!certificateType || !certificateNumber && !entityName) {
      setError('Please fill in the required fields.');
      return;
    }

    setError(''); // Clear previous error

    const formData = {
      certificateType,
      certificateNumber,
      entityName,
    };

    try {
      const response = await fetch('http://localhost:5000/api/certificates/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message); // Show success message
        // Clear the form fields
        setCertificateType('');
        setCertificateNumber('');
        setEntityName('');
      } else {
        const error = await response.json();
        setError(error.error); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError('There was an issue submitting the form.');
    }
  };

  return (
    <div className="V004-form-container">
      <h3>
        Instructions: <img src="/images/f1.png" alt="Logo" className="V004-logo-image" />
      </h3>
      <div className="V004-instructions">
        <ul>
          <li><span>&#8226;</span> Please select certificate type</li>
          <li><span>&#8226;</span> Enter correct certificate no. as per described format, e.g., COR: DIPP260 and for COE: DIPP260/IMB</li>
          <li><span>&#8226;</span> For better results, please provide Certificate number and Entity name, or you can provide single information</li>
          <li><span>&#8226;</span> Startup Recognition certificate can be accessed through DigiLocker. Here is a <a href="https://www.startupindia.gov.in/content/dam/invest-india/SUi%20DigiLocker.pdf">quick guide</a></li>
        </ul>
      </div>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="V004-form-content">
        <div className="V004-form-group">
          <label>Select certificate type <span className="V004-required">*</span></label>
          <div className="V004-radio-group">
            <input 
              type="radio" 
              id="recognition" 
              name="certificateType" 
              value="recognition" 
              checked={certificateType === 'recognition'}
              onChange={(e) => setCertificateType(e.target.value)} 
            />
            <label htmlFor="recognition"><FaCertificate /> Certificate of Recognition</label>

            <input 
              type="radio" 
              id="eligibility" 
              name="certificateType" 
              value="eligibility" 
              checked={certificateType === 'eligibility'}
              onChange={(e) => setCertificateType(e.target.value)} 
            />
            <label htmlFor="eligibility"><FaCertificate /> Certificate of Eligibility</label>
          </div>
        </div>

        <div className="V004-form-group">
          <label><FaCertificate /> Certificate number <span className="V004-required">*</span></label>
          <input 
            type="text" 
            className="V004-form-input" 
            placeholder="Enter certificate number" 
            value={certificateNumber}
            onChange={(e) => setCertificateNumber(e.target.value)}
            required 
          />
        </div>

        <div className="V004-form-separator">OR</div>

        <div className="V004-form-group">
          <label><FaUser /> Complete Entity Name <span className="V004-required">*</span></label>
          <input 
            type="text" 
            className="V004-form-input" 
            placeholder="Enter complete entity name" 
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="V004-submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
