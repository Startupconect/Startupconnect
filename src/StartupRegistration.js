import React, { useState } from "react";
import "./StartupRegistration.css";
import { useNavigate } from 'react-router-dom';

const industries = {
  B2B: [
    "Commercial Products",
    "Machinery",
    "Commercial Services",
    "Education and Training Services",
    "Environmental Services",
    "Human Capital Services",
    "Logistics",
    "Commercial Transportation",
    "Other Business Products and Services",
    "Space Technology",
  ],
  B2C: [
    "Apparel and Accessories",
    "Consumer Durables",
    "Personal Products",
    "Media",
    "Restaurants",
    "Hotels and Leisure",
    "Retail",
    "Transportation",
  ],
  Energy: [
    "Energy Equipment",
    "Production and Refining",
    "Energy Services",
    "Utilities",
    "Other Energy",
  ],
  "Financial Services": [
    "Capital Markets/Institutions",
    "Commercial Banks",
    "Insurance",
    "Other Financial Services",
  ],
  Healthcare: [
    "Healthcare Devices /Supplies",
    "Healthcare Services",
    "Healthcare Technology Systems",
    "Pharmaceutical & Biotechnology",
    "Other Healthcare",
  ],
  "Information Technology": [
    "Communications/Networking",
    "Computer Hardware",
    "Semiconductors",
    "IT Services",
    "SaaS",
    "Entertainment Software",
    "Network Management Software",
    "Software Development Applications",
    "Vertical Market Software",
    "Other Information Technology",
  ],
  "Materials and Resources": [
    "Agriculture",
    "Chemicals and Gases",
    "Construction Non-Wood",
    "Containers and Packaging",
    "Forestry",
    "Metals /Minerals and Mining",
    "Textiles",
  ],
};

const StartupRegistration = () => {
  const [step, setStep] = useState(1);
  const [startupName, setStartupName] = useState("");
  const [isValidStartupName, setIsValidStartupName] = useState(true);
  const [brief, setBrief] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [mobile, setMobile] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(true);
  const [mobileTouched, setMobileTouched] = useState(false);
  const [state, setState] = useState("");
  const [isValidState, setIsValidState] = useState(true);
  const [stateTouched, setStateTouched] = useState(false);
  const [city, setCity] = useState("");
  const [isValidCity, setIsValidCity] = useState(true);
  const [cityTouched, setCityTouched] = useState(false);
  const [website, setWebsite] = useState("");
  const [isValidWebsite, setIsValidWebsite] = useState(true);
  const [isValidAppLink, setIsValidAppLink] = useState(true);
  const [appLink, setAppLink] = useState("");
  const [stage, setStage] = useState("");
  const [funding, setFunding] = useState("");
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [otherIndustry, setOtherIndustry] = useState("");
  const [otherSector, setOtherSector] = useState("");
  const [service, setService] = useState("");
  const [entityNature, setEntityNature] = useState("");
  const [udyogAadhaar, setUdyogAadhaar] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [interestAreas, setInterestAreas] = useState({
    all: false,
    investors: false,
    incubators: false,
    otherStartups: false,
    mentors: false,
    accelerators: false,
  });


  const navigate = useNavigate(); // Initialize useNavigate hook

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleInterestChange = (e) => {
    setInterestAreas({
      ...interestAreas,
      [e.target.name]: e.target.checked,
    });
  };

  const handleTermsChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Reset validation message on change
    setIsValidEmail(true);
    setShowValidationMessage(false);
  };

  const handleEmailBlur = () => {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setIsValidEmail(isValid);
    setShowValidationMessage(!isValid); // Show message if not valid
  };
  const handleMobileChange = (e) => {
    const newMobile = e.target.value;
    setMobile(newMobile);
    setIsValidMobile(/^\d{10}$/.test(newMobile));
  };
  
  const handleMobileBlur = () => {
    setMobileTouched(true);
    setIsValidMobile(/^\d{10}$/.test(mobile));
  };
  const handleStateChange = (e) => {
    const newState = e.target.value;
    setState(newState);
    setIsValidState(/^[a-zA-Z\s-]+$/.test(newState));
  };
  
  const handleStateBlur = () => {
    setStateTouched(true);
    setIsValidState(/^[a-zA-Z\s-]+$/.test(state));
  };
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    setIsValidCity(/^[a-zA-Z\s-]+$/.test(newCity)); // Validate city input
  };
  
  const handleCityBlur = () => {
    setCityTouched(true);
    setIsValidCity(/^[a-zA-Z\s-]+$/.test(city)); // Check validity on blur
  };

  // Function to handle Website input and validation
const handleWebsiteChange = (e) => {
  const websiteValue = e.target.value;
  setWebsite(websiteValue);
  setIsValidWebsite(true); // Reset validity on change
};

const handleWebsiteBlur = () => {
  if (website) {
    const isValid = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(website);
    setIsValidWebsite(isValid);
  } else {
    setIsValidWebsite(true); // Mark as valid if empty (optional)
  }
};

// Function to handle Mobile App Link input and validation
const handleAppLinkChange = (e) => {
  const appLinkValue = e.target.value;
  setAppLink(appLinkValue);
  setIsValidAppLink(true); // Reset validity on change
};

const handleAppLinkBlur = () => {
  if (appLink) {
    const isValid = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(appLink);
    setIsValidAppLink(isValid);
  } else {
    setIsValidAppLink(true); // Mark as valid if empty (optional)
  }
};

const handleSubmit = () => {
  // Here you can perform additional validation or data saving
  if (isValidEmail && isValidMobile && isValidState && isValidCity && isValidWebsite && isValidAppLink && agreeToTerms) {
    // If all validations pass, navigate to the dashboard
    setSuccessMessage(true);

    setTimeout(() => {

    navigate('/dashboard'); // Use navigate instead of window.location.href
  }, 3000); // 
  } else {
    // Optionally, handle errors here
    alert("Please fill all the Fields Before submitting."); // Example error handling
  }
};
 

const handleStartupNameChange = (e) => {
  const startupNameValue = e.target.value;
  setStartupName(startupNameValue);
  // Reset validity if the user is typing
  setIsValidStartupName(true);
};

const handleStartupNameBlur = () => {
  // Validation: Only allow alphanumeric characters and spaces
  const isValid = /^[a-zA-Z0-9\s]*$/.test(startupName); // Change to * to allow empty input
  setIsValidStartupName(isValid);
};
  const renderStep = () => {
    <div className="maincont710">
    </div>
    switch (step) {
      case 1:
        return (
          <div className="form-step710">
            <h2>About Startup</h2>
            <div className="form-group710">
        <label>Startup Name</label>
        <input
          type="text"
          placeholder="👤Enter startup name"
          value={startupName}
          onChange={handleStartupNameChange}
          onBlur={handleStartupNameBlur}
          title="Alphanumeric characters only"
        />
        {!isValidStartupName && (
          <p style={{ color: 'red', marginTop: '5px' }}>
            Only alphanumeric characters and spaces are allowed.
          </p>
        )}
      </div>

            <div className="form-group710">
              <label>Company Logo</label>
              <input type="file" accept="image/*" />
            </div>
            <div className="form-group funding-options710">
               <label>Funding Status</label> 
               <br></br>
               <label>
                <input
                  type="radio"
                  value="Funded"
                  checked={funding === "Funded"}
                  onChange={() => setFunding("Funded")}
                />
                Funded
              </label>
              <label>
                <input
                  type="radio"
                  value="Bootstrapped"
                  checked={funding === "Bootstrapped"}
                  onChange={() => setFunding("Bootstrapped")}
                />
                Bootstrapped
              </label>
            </div>
            <div className="form-group710">
              <label>Stage</label>
              <div className="stage-options710">
                {["Ideation", "Validation", "Early Traction", "Scaling"].map(
                  (option) => (
                    <button
                      type="button"
                      key={option}
                      className={stage === option ? "selected" : ""}
                      onClick={() => setStage(option)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="form-group710">
              <label>Brief</label>
              <textarea
                placeholder="🕮Provide a brief description"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                 pattern="^[\s\S]{10,500}$"
                title="Brief should be between 10 and 500 characters"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step710">
            <h2>Contact Info</h2>
            <div className="form-group710">
            <label>Email</label>
          <input
           type="email"
           placeholder="📧Enter your email"
           value={email}
           onChange={handleEmailChange}
           onBlur={handleEmailBlur}
           title="Please enter a valid email address"
           />
         {showValidationMessage && (
        <p style={{ color: 'red', marginTop: '5px' }}>
          Please enter a valid email address.
        </p>
      )}
         </div>
    <div className="form-group710">
    <label>Mobile</label>
    <input
      type="tel"
      placeholder="📞Enter your mobile number"
      value={mobile}
      onChange={handleMobileChange}
      onBlur={handleMobileBlur}
      title="Enter a 10-digit mobile number"
    />
    {!isValidMobile && mobileTouched && (
      <p style={{ color: 'red', marginTop: '5px' }}>
        Please enter a valid 10-digit mobile number.
      </p>
    )}
  </div>
  <div className="form-group710">
  <label>State</label>
  <input
    type="text"
    placeholder="🌐Enter state"
    value={state}
    onChange={handleStateChange}
    onBlur={handleStateBlur}
    pattern="^[a-zA-Z\s-]+$"
    title="Letters only"
  />
  {!isValidState && stateTouched && (
    <p style={{ color: 'red', marginTop: '5px' }}>
      Please enter a valid state name using only letters and spaces.
    </p>
  )}
</div>
<div className="form-group710">
  <label>City</label>
  <input
    type="text"
    placeholder="📍Enter city"
    value={city}
    onChange={handleCityChange}
    onBlur={handleCityBlur}
    pattern="^[a-zA-Z\s-]+$"
    title="Letters only"
  />
  {!isValidCity && cityTouched && (
    <p style={{ color: 'red', marginTop: '5px' }}>
      Please enter a valid city name using only letters and spaces.
    </p>
  )}
</div>

<div className="form-group710">
  <label>Website (Optional)</label>
  <input
    type="text"
    placeholder="💻Enter website"
    value={website}
    onChange={handleWebsiteChange}
    onBlur={handleWebsiteBlur}
    title="Please enter a valid website URL"
  />
  {!isValidWebsite && website && (
    <p style={{ color: 'red', marginTop: '5px' }}>
      Please enter a valid website URL.
    </p>
  )}
</div>

<div className="form-group710">
  <label>Mobile App Link (Optional)</label>
  <input
    type="text"
    placeholder="🔗Enter mobile app link"
    value={appLink}
    onChange={handleAppLinkChange}
    onBlur={handleAppLinkBlur}
    title="Please enter a valid mobile app link URL"
  />
  {!isValidAppLink && appLink && (
    <p style={{ color: 'red', marginTop: '5px' }}>
      Please enter a valid mobile app link URL.
    </p>
  )}
</div>
          </div>
        );
      case 3:
        return (
          <div className="form-step710">
            <h2>Category</h2>
            <div className="form-group710">
              <label>Industry</label>
              <select
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  setSector("");
                  setOtherIndustry("");
                }}
              >
                <option value="">Select</option>
                {Object.keys(industries).map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
              {industry === "Other" && (
                <input
                  type="text"
                  placeholder="Specify other industry"
                  value={otherIndustry}
                  onChange={(e) => setOtherIndustry(e.target.value)}
                   pattern="^[a-zA-Z\s]+$"
                  title="Letters only"
                />
              )}
            </div>
            <div className="form-group710">
              <label>Sector</label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                <option value="">Select</option>
                {industry &&
                  industries[industry]?.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                <option value="Other">Other</option>
              </select>
              {sector === "Other" && (
                <input
                  type="text"
                  placeholder="Specify other sector"
                  value={otherSector}
                  onChange={(e) => setOtherSector(e.target.value)}
                   pattern="^[a-zA-Z\s]+$"
                  title="Letters only"
                />
              )}
            </div>
            <div className="form-group710">
              <label>Services</label>
              <select className="input-field62710"
              value={service}
              onChange={(e) => setService(e.target.value)}
              
              >
                  <option>Select</option>
                  <option>Governments</option>
                  <option>Hyperlocal</option>
                  <option>Discovery</option>
                  <option>Location Based services</option>
                  <option>Manufacturing</option>
                  <option>Marketplace</option>
                  <option>mobile</option>
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
                  <option>Research</option>
                  <option>Sharing Economy</option>
                  <option>Social Enterprise</option>
                  <option>SaaS</option>
                  <option>Subscription Commerce</option>
                </select>
                
            </div>
            <div className="form-group710">
              <label>Nature of Entity</label>
              <select
                value={entityNature}
                onChange={(e) => setEntityNature(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Proprietorship">Registered partnership</option>
                <option value="Limited Liability Partnership">
                  Limited Liability Partnership
                </option>
                <option value="Private Limited">Private Limited</option>
              </select>
            </div>
            <div className="form-group710">
              <label>Udyog Aadhaar</label>
              <input
                type="text"
                placeholder="🆔Enter Udyog Aadhaar number"
                value={udyogAadhaar}
                onChange={(e) => setUdyogAadhaar(e.target.value)}
                 pattern="^[0-9]{12}$"
                title="Udyog Aadhaar number should be 12 digits"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step712">
            <h2>Your Interest</h2>
            <div className="form-group710">
              <label>Interest Areas</label>
              <div className="labtom1">
                <label>
                  <input
                    type="checkbox"
                    name="all"
                    checked={interestAreas.all}
                    onChange={handleInterestChange}
                  />
                  All<br></br>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="investors"
                    checked={interestAreas.investors}
                    onChange={handleInterestChange}
                  />
                  Investors<br></br>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="incubators"
                    checked={interestAreas.incubators}
                    onChange={handleInterestChange}
                  />
                  Incubators<br></br>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="otherStartups"
                    checked={interestAreas.otherStartups}
                    onChange={handleInterestChange}
                  />
                  Other Startups<br></br>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="mentors"
                    checked={interestAreas.mentors}
                    onChange={handleInterestChange}
                  />
                  Mentors<br></br>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="accelerators"
                    checked={interestAreas.accelerators}
                    onChange={handleInterestChange}
                  />
                  Accelerators<br></br>
                </label>
              </div>
            </div>
            <div className="form-group710">
              
              <p>Please read and agree to the <a href="/termsandcondition">terms and conditions</a></p>
              <label>
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={handleTermsChange}
                />
                I agree to the terms and conditions
              </label>
            </div>
          </div>
        );
        case 5:
          return (
            <div className="form-step12710">
              <h2>Confirmation</h2>
              <ul type="none">
                <h3>About</h3>
                <li>Startup Name: {startupName || "Not provided"}</li>
                <li>Funding: {funding || "Not provided"}</li>
                <li>Stage: {stage || "Not provided"}</li>
                <li>Brief: {brief || "Not provided"}</li>
                <br></br>
                <h3>Contact Info</h3>
                <li>Email: {email || "Not provided"}</li>
                <li>Mobile: {mobile || "Not provided"}</li>
                <li>State: {state || "Not provided"}</li>
                <li>City: {city || "Not provided"}</li>
                <li>Website: {website || "Not provided"}</li>
                <li>App Link: {appLink || "Not provided"}</li>
                <br></br>
                <h3>Category</h3>
                <li>
                  Industry: {industry === "Other" ? otherIndustry || "Other specified" : industry || "Not provided"}
                </li>
                <li>
                  Sector: {sector === "Other" ? otherSector || "Other specified" : sector || "Not provided"}
                </li>
                <li>Services: {service || "Not provided"}</li>
                <li>Nature of Entity: {entityNature || "Not provided"}</li>
                <li>Udyog Aadhaar: {udyogAadhaar || "Not provided"}</li>
                <br></br>
                <h3>Your Intrest</h3>
                <li>
                  Collaborate With:{" "}
                  {Object.keys(interestAreas)
                    .filter((area) => interestAreas[area])
                    .map((area) => area.charAt(0).toUpperCase() + area.slice(1))
                    .join(", ") || "None selected"}
                </li>
                <li>Agree to Terms: {agreeToTerms ? "Yes" : "No"}</li>
              </ul>
            
              {successMessage ? (
                 <p className="success-message">Submitted successfully! Redirecting to dashboard...</p>
                ) : (
                  <div className="butsub710">
              <button onClick={handleSubmit}>Submit</button>
                  </div>
            )}

      

            </div>
          );
        

      default:
        return null;
    }
  };

  return (
    <div className="startup-registration710">
      <div className="steps-header710">
        {["About Startup", "Contact Info", "Categories", "Your Interest", "Confirmation"].map(
          (label, index) => (
            <div
              className={`step ${step >= index + 1 ? "active" : ""}`}
              key={index}
            >
              <div className="circle710">{step > index + 1 ? "✔" : index + 1}</div>
              <p>{label}</p>
            </div>
          )
        )}
      </div>

      <form>
        {renderStep()}
        <div className="buttons710">
          <button type="button" onClick={prevStep} disabled={step === 1}>
            Previous
          </button>
          <button type="button" onClick={nextStep} disabled={step === 5}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartupRegistration;
