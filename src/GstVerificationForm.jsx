import React, { useState } from "react";
import "./GstVerificationForm.css"; // Import the CSS file

const GstVerificationFormA011 = () => {
  const [formData, setFormData] = useState({
    gstNumber: "",
    panNumber: "",
    tinNumber: "",
    bankAccount: "",
    initialCapital: "",
    shareholders: "",
  });

  const [fileData, setFileData] = useState({
    gstFile: null,
    panFile: null,
    tinFile: null,
    bankFile: null,
    capitalFile: null,
    shareholdersFile: null,
  });

  const [taxOption, setTaxOption] = useState("gst"); // Default selection is GST
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFileData({
      ...fileData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { gstNumber, panNumber, tinNumber, bankAccount, initialCapital, shareholders } = formData;

    // Validation logic for the selected tax option
    if (taxOption === "gst" && gstNumber.length !== 15) {
      setError("Please enter a valid GST number.");
    } else if (taxOption === "tin" && tinNumber.length !== 11) {
      setError("Please enter a valid TIN number.");
    } else if (panNumber.length !== 10) {
      setError("Please enter a valid PAN number.");
    } else if (bankAccount.length < 9) {
      setError("Please enter a valid bank account number (minimum 9 digits).");
    } else if (isNaN(initialCapital)) {
      setError("Please enter a valid amount for initial capital.");
    } else if (shareholders.length === 0) {
      setError("Please enter shareholder details.");
    } else {
      setError("");
      // Here you can send the form data and files for further validation or submission
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="containerA011">
      <div className="form-containerA011">
        <h2 className="titleA011">Tax Details</h2>
        {error && <p className="error-messageA011">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="tax-optionA011">
            <label>
              <input
                type="radio"
                name="taxOption"
                id="taxOption_gst"
                value="gst"
                checked={taxOption === "gst"}
                onChange={() => setTaxOption("gst")}
              />
              GST Number
            </label>
            <label>
              <input
                type="radio"
                name="taxOption"
                id="taxOption_tin"
                value="tin"
                checked={taxOption === "tin"}
                onChange={() => setTaxOption("tin")}
              />
              TIN Number
            </label>
          </div>

          {taxOption === "gst" && (
            <div className="input-groupA011">
              <input
                type="text"
                className="input-fieldA011"
                placeholder="Enter GST Number"
                name="gstNumber"
                id="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
              />
              <input type="file" className="file-inputA011" name="gstFile" id="gstFile" onChange={handleFileChange} />
            </div>
          )}

          {taxOption === "tin" && (
            <div className="input-groupA011">
              <input
                type="text"
                className="input-fieldA011"
                placeholder="Enter TIN Number"
                name="tinNumber"
                id="tinNumber"
                value={formData.tinNumber}
                onChange={handleChange}
              />
              <input type="file" className="file-inputA011" name="tinFile" id="tinFile" onChange={handleFileChange} />
            </div>
          )}

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter PAN Number"
              name="panNumber"
              id="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="panFile" id="panFile" onChange={handleFileChange} />
          </div>

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter Bank Account Number"
              name="bankAccount"
              id="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="bankFile" id="bankFile" onChange={handleFileChange} />
          </div>

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter Initial Capital (in currency)"
              name="initialCapital"
              id="initialCapital"
              value={formData.initialCapital}
              onChange={handleChange}
            />
          </div>

          <div className="input-groupA011">
            <textarea
              className="input-fieldA011"
              placeholder="Enter Shareholders and Ownership Percentages"
              name="shareholders"
              id="shareholders"
              value={formData.shareholders}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="shareholdersFile" id="shareholdersFile" onChange={handleFileChange} />
          </div>

          <button type="submit" className="submit-buttonA011">
            Submit Details
          </button>
        </form>
      </div>
      <div className="image-containerA011">
        <img
          src="/images/tax.png" // Replace with your image URL
          alt="Startup Illustration"
        />
      </div>
    </div>
  );
};

export default GstVerificationFormA011;
