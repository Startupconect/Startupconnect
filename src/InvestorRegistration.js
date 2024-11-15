import React, { useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./InvestorRegistration.css";

const InvestorRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
    },
    category: '',
    interest: {
      investmentAmount: '',
      focusAreas: [],
      investmentStage: '',
    },
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNext = () => {
    if (step === 1) {
      if (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.phone || !formData.contactInfo.location) {
        setError("Please fill in all contact information fields.");
        return;
      }
    } else if (step === 2) {
      if (!formData.category) {
        setError("Please select a category.");
        return;
      }
    } else if (step === 3) {
      if (!formData.interest.investmentAmount || formData.interest.focusAreas.length === 0 || !formData.interest.investmentStage) {
        setError("Please fill in all interest fields.");
        return;
      }
    }
    setError('');
    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        interest: {
          ...formData.interest,
          focusAreas: checked
            ? [...formData.interest.focusAreas, value]
            : formData.interest.focusAreas.filter((area) => area !== value),
        },
      });
    } else if (step === 1) {
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [name]: value },
      });
    } else if (step === 2) {
      setFormData({ ...formData, category: value });
    } else if (step === 3) {
      setFormData({
        ...formData,
        interest: { ...formData.interest, [name]: value },
      });
    }
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/investors/register", formData);
      console.log(response.data); // Use the response data if needed
      setSuccessMessage("Registration successful!");
      setStep(5); // Move to the final step
    } 
    catch (error) {
      setError("Error submitting the form. Please try again.");
      console.error("Form submission error:", error.response ? error.response.data : error.message);
    }
  };
  
  

  return (
    <div className="investor-registration5566">
      <div className="progress-bar5566">
        {["Contact Info", "Category", "Your Interest", "Confirmation"].map((label, index) => (
          <div key={index} className={`progress-step5566 ${step === index + 1 ? "active5566" : ""}`}>
            <div className="circle5566">{index + 1}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="form-content5566">
        {error && <div className="error-message5566">{error}</div>}
        {successMessage && <div className="success-message5566">{successMessage}</div>}

        {step === 1 && (
          <div>
            <h2>Contact Info</h2>
            <input
              type="text"
              name="name"
              value={formData.contactInfo.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="input-field5566"
            />
            <input
              type="email"
              name="email"
              value={formData.contactInfo.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="input-field5566"
            />
            <input
              type="tel"
              name="phone"
              value={formData.contactInfo.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="input-field5566"
            />
            <input
              type="text"
              name="location"
              value={formData.contactInfo.location}
              onChange={handleChange}
              placeholder="Location (City, State, Country)"
              required
              className="input-field5566"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Category</h2>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="select-field5566"
              aria-label="Investment Category"
            >
              <option value="">Select Category</option>
              <option value="Angel Investor">Angel Investor</option>
              <option value="Venture Capitalist">Venture Capitalist</option>
              <option value="Corporate Investor">Corporate Investor</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Your Interest</h2>
            <input
              type="number"
              name="investmentAmount"
              value={formData.interest.investmentAmount}
              onChange={handleChange}
              placeholder="Preferred Investment Amount"
              required
              className="input-field5566"
            />
            <label>Focus Areas:</label>
            <div className="focus-areas5566">
              {["Technology", "Healthcare", "Finance", "Consumer Goods", "Energy"].map((area) => (
                <label key={area} className="focus-area-label5566">
                  <input
                    type="checkbox"
                    name="focusAreas"
                    value={area}
                    checked={formData.interest.focusAreas.includes(area)}
                    onChange={handleChange}
                    className="checkbox5566"
                  /> {area}
                </label>
              ))}
            </div>

            <label>Preferred Investment Stage:</label>
            <div className="investment-stages5566">
              {["Seed", "Series A", "Series B", "Growth"].map((stage) => (
                <label key={stage} className="investment-stage-label5566">
                  <input
                    type="radio"
                    name="investmentStage"
                    value={stage}
                    checked={formData.interest.investmentStage === stage}
                    onChange={handleChange}
                    className="radio5566"
                  /> {stage}
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Confirmation</h2>
            <p><strong>Full Name:</strong> {formData.contactInfo.name}</p>
            <p><strong>Email:</strong> {formData.contactInfo.email}</p>
            <p><strong>Phone:</strong> {formData.contactInfo.phone}</p>
            <p><strong>Location:</strong> {formData.contactInfo.location}</p>
            <p><strong>Investment Category:</strong> {formData.category}</p>
            <p><strong>Preferred Investment Amount:</strong> {formData.interest.investmentAmount}</p>
            <p><strong>Focus Areas:</strong> {formData.interest.focusAreas.join(', ')}</p>
            <p><strong>Investment Stage:</strong> {formData.interest.investmentStage}</p>
            <button className="confirm-button5566" onClick={handleConfirm}>Confirm & Submit</button>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2>Congratulations!</h2>
            <p>Your registration has been successfully submitted. Thank you for your interest in connecting with startups!</p>
            <button className="dashboard-button5566">Go to Dashboard</button>
          </div>
        )}
      </div>

      <div className="navigation-buttons5566">
        <button className="navigation-button5566" onClick={handlePrevious} disabled={step === 1}>
          <FaArrowLeft /> Previous
        </button>
        <button className="navigation-button5566" onClick={handleNext} disabled={step === 5}>
          <FaArrowRight /> Next
        </button>
      </div>
    </div>
  );
};

export default InvestorRegistration;
