import React, { useState } from "react";
import axios from "axios";
import "./GstVerificationForm.css";

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
    shareholdersFile: null,
  });

  const [taxOption, setTaxOption] = useState("gst");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { gstNumber, panNumber, tinNumber, bankAccount, initialCapital, shareholders } = formData;

    // Validation checks
    if (taxOption === "gst" && gstNumber.length !== 15) {
      setError("Please enter a valid GST number.");
      return;
    } else if (taxOption === "tin" && tinNumber.length !== 11) {
      setError("Please enter a valid TIN number.");
      return;
    } else if (panNumber.length !== 10) {
      setError("Please enter a valid PAN number.");
      return;
    } else if (bankAccount.length < 9) {
      setError("Please enter a valid bank account number (minimum 9 digits).");
      return;
    } else if (isNaN(initialCapital)) {
      setError("Please enter a valid amount for initial capital.");
      return;
    } else if (shareholders.length === 0) {
      setError("Please enter shareholder details.");
      return;
    }

    setError(""); // Clear previous errors

    const data = new FormData();
    data.append("gstNumber", gstNumber);
    data.append("panNumber", panNumber);
    data.append("tinNumber", tinNumber);
    data.append("bankAccount", bankAccount);
    data.append("initialCapital", initialCapital);
    data.append("shareholders", shareholders);

    // Append files to FormData if available
    if (fileData.gstFile) data.append("gstFile", fileData.gstFile);
    if (fileData.panFile) data.append("panFile", fileData.panFile);
    if (fileData.tinFile) data.append("tinFile", fileData.tinFile);
    if (fileData.bankFile) data.append("bankFile", fileData.bankFile);
    if (fileData.shareholdersFile) data.append("shareholdersFile", fileData.shareholdersFile);

    try {
      const response = await axios.post("http://localhost:5000/api/gst", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess(response.data.message);
      setError(""); // Clear error messages on success

      // Reset form data on success
      setFormData({
        gstNumber: "",
        panNumber: "",
        tinNumber: "",
        bankAccount: "",
        initialCapital: "",
        shareholders: "",
      });
      setFileData({
        gstFile: null,
        panFile: null,
        tinFile: null,
        bankFile: null,
        shareholdersFile: null,
      });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "An error occurred while submitting the form.");
      } else if (err.request) {
        setError("Unable to reach the backend. Please check your network or server.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="containerA011">
      <div className="form-containerA011">
        <h2 className="titleA011">Tax Details</h2>
        {error && <p className="error-messageA011">{error}</p>}
        {success && <p className="success-messageA011">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="tax-optionA011">
            <label>
              <input
                type="radio"
                name="taxOption"
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
                value={formData.gstNumber}
                onChange={handleChange}
              />
              <input type="file" className="file-inputA011" name="gstFile" onChange={handleFileChange} />
            </div>
          )}

          {taxOption === "tin" && (
            <div className="input-groupA011">
              <input
                type="text"
                className="input-fieldA011"
                placeholder="Enter TIN Number"
                name="tinNumber"
                value={formData.tinNumber}
                onChange={handleChange}
              />
              <input type="file" className="file-inputA011" name="tinFile" onChange={handleFileChange} />
            </div>
          )}

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter PAN Number"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="panFile" onChange={handleFileChange} />
          </div>

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter Bank Account Number"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="bankFile" onChange={handleFileChange} />
          </div>

          <div className="input-groupA011">
            <input
              type="text"
              className="input-fieldA011"
              placeholder="Enter Initial Capital"
              name="initialCapital"
              value={formData.initialCapital}
              onChange={handleChange}
            />
          </div>

          <div className="input-groupA011">
            <textarea
              className="input-fieldA011"
              placeholder="Enter Shareholders"
              name="shareholders"
              value={formData.shareholders}
              onChange={handleChange}
            />
            <input type="file" className="file-inputA011" name="shareholdersFile" onChange={handleFileChange} />
          </div>

          <button type="submit" className="submit-buttonA011">Submit Details</button>
        </form>
      </div>
      <div className="image-containerA011">
        <img src="/images/tax.png" alt="Startup Illustration" />
      </div>
    </div>
  );
};

export default GstVerificationFormA011;
