import React, { useState } from "react";
import "./MentorRegistration.css";
import { Link } from "react-router-dom";

const citiesByState = {
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
};

const Mentor = () => {
  const [step, setStep] = useState(1);
  const [network, setNetwork] = useState("");
  const [email, setEmail] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [activeMonths, setActiveMonths] = useState("");
  const [state, setState] = useState("");
  const [url, setUrl] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [successStories, setSuccessStories] = useState(false);
  const [startupName, setStartupName] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [hubProfileLink, setHubProfileLink] = useState("");
  const [brief, setBrief] = useState("");
  const [file, setFile] = useState(null);
  const [interest,setInterest] = useState("");
  const [industry,setIndustry] = useState("");
  const [sectors,setSectors] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;

  const handleNext = () => {
    if (step === 1 && !network) {
      alert("Please select a network.");
      return;
    }

    if (step === 2) {
      if (!mentorName || !activeMonths || !file) {
        alert("Please fill in all fields and upload a picture.");
        return;
      }
    }

    if (step === 3) {
      if (!email || !state || !url || !mobile || !city) {
        alert("Please fill in all contact information.");
        return;
      }
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
      }
      if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number (10 digits).");
        return;
      }
    }

    if (step === 4 && successStories) {
      if (!startupName || !websiteLink || !hubProfileLink || !brief) {
        alert("Please fill in all success story details.");
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSuccessStoriesToggle = () => {
    setSuccessStories((prev) => !prev);
  };

  return (
    <div className="mentor-registration62">
      <div className="progress-bar62">
        {["Select Network", "About Mentor", "Contact Info", "Your Interest", "Review Details"].map((label, index) => (
          <div key={index} className={`progress-step62 ${step === index + 1 ? "active" : ""}`}>
            <div className="circle62">{index + 1}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="form-content62">
        {step === 1 && (
          <div>
            <h2>Select Network</h2>
            <div className="network-options62">
              <span>Are you a member of:</span><br /><br />
              <label>
                <input
                  type="radio"
                  name="network"
                  value="TIE"
                  checked={network === "TIE"}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="network-input62"
                />
                TIE
              </label>
              <label>
                <input
                  type="radio"
                  name="network"
                  value="Other"
                  checked={network === "Other"}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="network-input62"
                />
                Other
              </label>
            </div>
            {network === "TIE" && (
              <div className="tie-inputs62">
                <label>
                  Email ID:
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="network-input62"
                  />
                </label><br />
                <label>
                  Password:
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="network-input62"
                  />
                </label>
              </div>
            )}
            {network === "Other" && (
              <div className="tie-inputs162">
                <label>
                  Description:
                  <input type="text" placeholder="Enter a description" className="network-input62" />
                </label>
              </div>
            )}
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>About Mentor</h2>
            <div className="mentor-details62">
              <div className="mentor-left62">
                <label>Upload Picture:</label>
                <input type="file" onChange={handleFileUpload} className="input-field62" />
                <label>Mentor Name:</label>
                <input
                  type="text"
                  placeholder="Enter mentor name"
                  value={mentorName}
                  onChange={(e) => setMentorName(e.target.value)}
                  className="input-field62"
                />
                <label>Number of Months Active:</label>
                <input
                  type="number"
                  placeholder="Months active"
                  value={activeMonths}
                  onChange={(e) => setActiveMonths(e.target.value)}
                  className="input-field62"
                />
                <label>Interest</label>
                <select
                  value={interest}
                  onChange={(e) => {
                    setInterest(e.target.value);
                    
                  }}
                  className="input-field62"
                >
                 <option>Select interest</option>
                  <option>Governments</option>
                  <option>Hyperlocal</option>
                  <option>Discovery</option>
                  <option>Location Based services</option>
                  <option>Manufacturing</option>
                  <option>Marketplace</option>
                  <option>Mobile</option>
                  <option>Offline</option>
                  <option>Online Aggregator</option>
                  <option>Peer to Peer</option>
                  <option>Platform</option>
                  <option>Consulting</option>
                  <option>Consumer Internet</option>
                  <option>Engineering</option>
                  <option>E-Commerce</option>
                  <option>Others</option>
                  <option>Rental</option>
                  <option>Enterprise Mobility</option>
                  <option>Sharing Economy</option>
                  <option>Social Enterprise</option>
                  <option>SaaS</option>
                  <option>Subscription Commerce</option>
                </select>

                <label>Industry</label>
                <select
                  value={industry}
                  onChange={(e) => {
                    setIndustry(e.target.value);
                    
                  }}
                  className="input-field62"
                >
                 <option>Select industry</option>
                  <option>Analytics</option>
                  <option>Adversiting</option>
                  <option>Architecture Interior Design</option>
                  <option>AR VR (Augmented + Virtual Reaality)</option>
                  <option>Automotive</option>
                  <option>Art &Photography</option>
                  <option>AnimTation</option>
                  <option>Chemicals</option>
                  <option>Computer Vision</option>
                  <option>Telecommunication & Networking</option>
                  <option>Construction</option>
                  <option>Agriculture</option>
                  <option>Aeronautics Aerospace & Defence</option>
                  <option>AI</option>
                  <option>Green Technology</option>
                  <option>Events</option>
                  <option>Fashion</option>
                  <option>Finanace Technology</option>
                  <option>Food Beverages</option>
                  <option>Design</option>
                  <option>Dating Matrimonial</option>
                  <option>Renewable Energy</option>
                  <option>Education</option>
                  <option>Technology Hardware</option>
                  <option>HealthCare & LifeSciences</option>
                  <option>Internet Of Things</option>
                  <option>IT Services</option>
                  <option>Human Resources</option>
                  <option>Marketing</option>
                  <option>Nanotechnology</option>
                  <option>Toys and Games</option>
                  <option>Others</option>
                </select>

                <label>Sectors</label>
                <select
                  value={sectors}
                  onChange={(e) => {
                    setSectors(e.target.value);
                    
                  }}
                  className="input-field62"
                >
                 <option>Select Sectors</option>
                  <option>All</option>
                  <option>Others</option>
                  </select>
                
                

              </div>
              <div className="mentor-right62">
                <label>SELECT STAGES OF STARTUP YOU ARE INTERESTED IN WORKING WITH</label>
                <div className="stage-checkboxes62">
                  <label><input type="checkbox"/>Ideation</label>
                  <label><input type="checkbox" /> Validation</label>
                  <label><input type="checkbox" /> Early Traction</label>
                  <label><input type="checkbox" /> Scaling</label>
                </div>
                <label>Brief:</label>
                <input type="text" 
                placeholder="Enter brief" 
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="input-field62"
                 />

              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Contact Info</h2>
            <div className="contact-info62">
              <div className="contact-left62">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field62"
                />
                <label>State:</label>
                <select
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setCity("");
                  }}
                  className="input-field62"
                >
                  <option>Select state</option>
                  <option>TamilNadu</option>
                  <option>Karnataka</option>
                </select>
                <label>LinkedIn Profile:</label>
                <input
                  type="url"
                  placeholder="Enter LinkedIn profile link"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="input-field62"
                />
              </div>
              <div className="contact-right62">
                <label>Mobile:</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="input-field62"
                />
                <label>City:</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field62"
                >
                  <option>Select city</option>
                  {state && citiesByState[state].map((cityOption) => (
                    <option key={cityOption} value={cityOption}>
                      {cityOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Your Interest</h2>
            <label>
              <input
                type="checkbox"
                checked={successStories}
                onChange={handleSuccessStoriesToggle}
              />
              Do you have a success story to share?
            </label>
            {successStories && (
              <div className="success-story62">
                <label>Startup Name:</label>
                <input
                  type="text"
                  placeholder="Enter startup name"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  className="input-field62"
                />
                <label>Website Link:</label>
                <input
                  type="url"
                  placeholder="Enter website link"
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                  className="input-field62"
                />
                <label>Hub Profile Link:</label>
                <input
                  type="url"
                  placeholder="Enter hub profile link"
                  value={hubProfileLink}
                  onChange={(e) => setHubProfileLink(e.target.value)}
                  className="input-field62"
                />
                <label>Brief:</label>
                <textarea
                  placeholder="Enter brief description"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  className="input-field62"
                ></textarea>
              </div>
            )}
          </div>
        )}
        {step === 5 && (
          <div>
            <h2>Review Details</h2>
            <div className="review-section62">
              <h3>Selected Network</h3>
              <p>Network: {network}</p>
              <h3>About Mentor</h3>
              <p>Mentor Name: {mentorName}</p>
              <p>Active Months: {activeMonths}</p>
              <p>Interest:{interest}</p>
              <p>Industry:{industry}</p>
              <p>Sectors:{sectors}</p>
              <p>Brief:{brief}</p>
              <h3>Contact Info</h3>
              <p>Email: {email}</p>
              <p>State: {state}</p>
              <p>City: {city}</p>
             
              <p>Mobile: {mobile}</p>
              <p>LinkedIn Profile: {url}</p>
              <h3>Success Story</h3>
              {successStories && (
                <>
                  <p>Startup Name: {startupName}</p>
                  <p>Website Link: {websiteLink}</p>
                  <p>Hub Profile Link: {hubProfileLink}</p>
                  <p>Brief: {brief}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="navigation-buttons62">
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}
        {step < 5 && <button onClick={handleNext}>Next</button>}
        {step === 5 && (
        <Link to="/dashboard">
          <button onClick={() => alert("Form submitted!")}>Submit</button>
        </Link>
      )}        
      </div>
    </div>
  );
};

export default Mentor;
