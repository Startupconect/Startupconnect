import React, { useState, useEffect } from "react";
import "./RegistrationPage.css"; // External CSS file for styling
import { Link, useNavigate} from "react-router-dom";

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  // Fields for step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fields for step 2 (OTP)
  const [otp, setOtp] = useState("");
  const [otpValid, setOtpValid] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60); // Timer set to 60 seconds
  const [resendDisabled, setResendDisabled] = useState(true);
  useEffect(() => {
    // Start the countdown when the user reaches step 3
    let countdown;
    if (step === 2 && otpTimer > 0) {
      countdown = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }

    if (otpTimer === 0) {
      clearInterval(countdown);
      setOtpValid(false); // Invalidate OTP after timer ends
      setResendDisabled(false); // Enable resend button
    }

    return () => clearInterval(countdown);
  }, [otpTimer, step]);

  // Handle OTP form submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    
    if (otp === "12345") { // Example OTP for testing purposes
      alert("OTP verified successfully!");
      setStep(3);
      // Proceed with the next steps after OTP verification
    } else {
      alert("Invalid OTP. Please try again.");
    }

    // Replace with your OTP verification logic
    if (!otpValid) {
      alert("OTP is invalid or expired.");
      return;
    }
  };

  // Handle form submission (Step 2)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log("Form data being submitted: ", formData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from server: ", data);

      if (response.ok) {
        alert("Registration successful! OTP has been sent.");
        setStep(2); // Move to OTP step
        setOtpValid(true); // OTP is initially valid
        setOtpTimer(60); // Restart OTP timer
        setResendDisabled(true); // Disable resend button initially
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    // Resend OTP logic goes here (e.g., make an API call to resend the OTP)
    alert("OTP resent successfully!");
    setOtpTimer(60); // Restart the timer
    setOtpValid(true); // OTP is valid again
    setResendDisabled(true); // Disable resend button
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <div className="left-section">
          <img src="/images/logo.png" alt="startup-connect-logo" id="title_logo" height="150px" width="200px" />
          <h2>Connect to Startup</h2>
          <p>Feel Free To Connect</p>
          <p>Already have an account? <a href="/login">Login here</a></p>
          <button className="google-login">Login with Google</button>
          <br></br>
          <Link to="/gstverificationform" style={{ textDecoration: 'none' }}>
            <button className="gst-banner">GST & DPIIT Recognition</button>
          </Link>
        </div>

        <div className="right-cover">
          <div className="right-section">
            <h2>Registration Form</h2>
            {step === 1 && (
              <form onSubmit={handleSubmit}>
                <table border="none">
                  <div className="form-group">
                  <tr>
                      <td><label htmlFor="name">Name</label></td>
                      <td><input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="email">Email Address</label></td>
                      <td><input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      /></td>
                    </tr>
                  </div>
                  <div className="form-group">
                    <tr>
                      <td><label htmlFor="password">Password</label></td>
                      <td><input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      /></td>
                    </tr>
                  </div>
                  <div className="form-group">
                    <tr>
                      <td><label htmlFor="confirmPassword">Confirm Password</label></td>
                      <td><input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      /></td>
                    </tr>
                  </div>
                </table>
                <button type="submit" className="register-button">Register</button>
              </form>
            )}
            {step === 2 && (
              <form onSubmit={handleOtpSubmit} className="otpform">
                
                  <center><div className="form-group">
                    <p id="otp-sent">OTP has been sent to you mail ID !!!</p>
                      <center>
                      <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP here"
                        required
                      /></center>
                  </div></center>
                <button type="submit" className="verify-button">Verify OTP</button>

                <center><p id="otp-p">
                  {otpTimer > 0
                    ? `Resend OTP in ${otpTimer}s`
                    : "Didn't receive an OTP?"}
                </p></center>
                <button
                  type="button"
                  className="resend-button123"
                  onClick={handleResendOtp}
                  disabled={resendDisabled}
                >
                  Resend OTP
                </button>
              </form>
            )}
            {/* Success Message Step 3 */}
        {step === 3 && (
          <div className="success-message">
            <img src="https://media.tenor.com/WsmiS-hUZkEAAAAj/verify.gif" height="200px" width="200px" alt="sucess.gif"/>
            <h3 style={{ color: "green" }}>Registration Successful!</h3>
            <button onClick={() => navigate("/login")} className="login-button">
              Proceed to Login
            </button>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
