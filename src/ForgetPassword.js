import React, { useState } from "react";
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [input, setInput] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending an OTP
    setOtpSent(true);
    setVerificationStatus(`OTP sent to ${isPhone ? "phone" : "email"}.`);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    if (otp === "123456") { // Example OTP for simulation
      setVerificationStatus("OTP verified successfully!");
    } else {
      setVerificationStatus("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="form-container12">
      {!otpSent ? (
        <form className="form12" onSubmit={handleSubmit}>
          <div className="flex-column12">
            <label>
              {isPhone ? "Phone Number" : "Email"}
            </label>
          </div>
          <div className="inputForm12">
            <input
              placeholder={isPhone ? "Enter your Phone Number" : "Enter your Email"}
              className="input12"
              type={isPhone ? "tel" : "email"}
              value={input}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex-row12">
            <div>
              <input
                type="radio"
                checked={!isPhone}
                onChange={() => setIsPhone(false)}
              />
              <label>Email</label>
            </div>
            <div>
              <input
                type="radio"
                checked={isPhone}
                onChange={() => setIsPhone(true)}
              />
              <label>Phone</label>
            </div>
          </div>
          <button className="button-submit12">Send OTP</button>
        </form>
      ) : (
        <form className="form12" onSubmit={handleVerifyOtp}>
          <div className="flex-column12">
            <label>Enter OTP</label>
          </div>
          <div className="inputForm12">
            <input
              placeholder="Enter OTP"
              className="input12"
              type="text"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <button className="button-submit12">Verify OTP</button>
        </form>
      )}

      {verificationStatus && <p className="verification-status12">{verificationStatus}</p>}
    </div>
  );
};

export default ForgetPassword;
