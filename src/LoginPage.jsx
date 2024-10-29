import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(""); // Store the generated alphanumeric CAPTCHA
  const [captchaInput, setCaptchaInput] = useState(""); // Store the user's CAPTCHA input
  const [captchaError, setCaptchaError] = useState(""); // Store CAPTCHA error messages
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // CAPTCHA verification status
  const [errorMessage, setErrorMessage] = useState(""); // Store error messages
  const navigate = useNavigate(); // Hook to navigate after successful login

  // Function to generate a random alphanumeric CAPTCHA
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomCaptcha = "";
    for (let i = 0; i < 6; i++) {
      randomCaptcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(randomCaptcha); // Set the CAPTCHA
    setCaptchaInput(""); // Clear user input on CAPTCHA refresh
    setCaptchaError(""); // Reset error messages
    setIsCaptchaVerified(false); // Reset CAPTCHA verification status
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle CAPTCHA verification
  const handleVerifyCaptcha = () => {
    if (captchaInput === captcha) {
      setCaptchaError("CAPTCHA verified successfully!");
      setIsCaptchaVerified(true);
    } else {
      setCaptchaError("Incorrect CAPTCHA! Please try again.");
      setIsCaptchaVerified(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if CAPTCHA is verified before allowing login
    if (!isCaptchaVerified) {
      setCaptchaError("Please verify the CAPTCHA before submitting.");
      return;
    }

    const formData = { email, password };
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Sucessful:",data);
        navigate("/dashboard"); // Redirect to the dashboard or home page
      } else {
        setErrorMessage(data.message || "Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h1>#StartupConnect</h1>
        <p>
          Startup Connect Portal is a one-of-its-kind online platform for all stakeholders of the startup ecosystem in India.
        </p>
        <div className="connect-logo">
          <img src="/images/logo.png" alt="Connect to Startup" />
          <p>Feel Free To Connect</p>
        </div>
        <h2>Why Join Startup Connect?</h2>
        <p>
          Startup Connect is an online platform designed to bridge the gap between companies, investors, and startups by offering opportunities for collaboration, partnerships, and resource sharing.
        </p>
      </div>

      <div className="right-panel">
        <h1>Welcome to StartupConnect</h1>
        <form onSubmit={handleSubmit} className="login-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email">Email Id/ User Id</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/forgetpassword1" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* CAPTCHA Section */}
          <div className="form-group captcha-section">
            <div className="capchahead1">
            <label>Enter the  CAPTCHA</label>
            </div>
           
            <div className="captcha-display">
              <span className="captcha-box">{captcha}</span>
              <span className="reload-symbol" onClick={generateCaptcha} style={{ cursor: "pointer", marginLeft: "10px" }}>
                🔄
              </span>
            </div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter CAPTCHA"
              required
            />

            <button type="button" className="verify-button" onClick={handleVerifyCaptcha}>
              Verify CAPTCHA
            </button>
            {captchaError && <p className="captcha-error">{captchaError}</p>}
          </div>

          <div className="form-group1">
            <input className="box" type="checkbox" required />
            <label>
              I agree to the <a href="/termsandcondition">Terms of Service</a> and{" "}
              <a href="/privacypolicy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="login-button">
            LOG IN
          </button>

          <div className="register-section">
            <p>
              Don't have an account?<Link to="/register">Register Now</Link>
            </p>
          </div>
        </form>

        <div className="social-login">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
