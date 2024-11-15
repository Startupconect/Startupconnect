import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./MentorRegistration.css";

const citiesByState = {
  AndhraPradesh:[" Visakhapatnam", "Vijayawada", "Tirupati", "Guntur","Rajahmundry"],
  ArunachalPradesh: ["Itanagar", "Tawang", "Pasighat", "Ziro"],
  Assam:["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
  Bihar:["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  Chhatisgarh:["Raipur", "Bilaspur", "Bhilai", "Korba"],
  Goa:["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  Gujarat:[" Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana:["Gurgaon", "Faridabad", "Panipat", "Ambala"],
  HimachalPradesh:["Shimla", "Manali", "Dharamshala", "Solan"],
  Jharkhand:["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Kerala:["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
  MadhyaPradesh:["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  Maharashtra:[" Mumbai","Pune", "Nagpur"," Nashik"],
  Manipur:["Imphal", "Churachandpur", "Thoubal", "Moirang"],
  Meghalaya:["Shillong", "Tura"," Nongstoin", "Jowai"],
  Mizoram:["Aizawl", "Lunglei", "Champhai"," Serchhip"],
  Nagaland:["Kohima", "Dimapur", "Mokokchung"," Wokha"],
  Odisha:["Bhubaneswar","Cuttack", "Rourkela"," Puri"],
  Punjab:["Chandigarh", "Amritsar", "Ludhiana","Jalandhar"],
  Rajasthan:[" Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  Sikkim:["Gangtok", "Namchi", "Mangan", "Gyalshing"],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  Telangana:["Hyderabad", "Warangal"," Nizamabad"," Karimnagar"],
  Tripura:["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
  UttarPradesh:[" Lucknow", "Kanpur", "Varanasi", "Agra"],
  Uttarakhand:["Dehradun", "Haridwar"," Nainital"," Roorkee"],
  WestBengal:["Kolkata", "Howrah", "Siliguri", "Durgapur"],
  
  
};

const Mentor = () => {
  const [step, setStep] = useState(1);
  const [network, setNetwork] = useState("");
  const [tieEmail,setTieEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [description,setDescription] = useState("");
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
  const [successbrief,setSuccessBrief] = useState("");
  const [file, setFile] = useState(null);
  const [interest,setInterest] = useState("");
  const [industry,setIndustry] = useState("");
  const [sectors,setSectors] = useState("");
  const [stages, setStage]=useState("");
  const [formData,setFormData] = useState("");
  
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('network', network);
    formData.append('tieEmail', tieEmail);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('description', description);
    formData.append('mentorName', mentorName);
    formData.append('activeMonths', activeMonths);
    formData.append('state', state);
    formData.append('url', url);
    formData.append('mobile', mobile);
    formData.append('city', city);
    formData.append('successStories', successStories);
    formData.append('startupName', startupName);
    formData.append('websiteLink', websiteLink);
    formData.append('hubProfileLink', hubProfileLink);
    formData.append('brief', brief);
    formData.append('successbrief', successbrief);
    
    if (file) {
      formData.append('file', file);
    }

    formData.append('interest', interest);
    formData.append('industry', industry);
    formData.append('sectors', sectors);
    formData.append('stages', stages);

    try {
      const response = await fetch('http://localhost:5000/api/mentors/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        navigate('/dashboard');
        console.log(data.message);
        // Handle success (e.g., redirect or display success message)
      } else {
        console.error(data.message);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 


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

  const handleCheckboxChange = (e) => {
    setFormData(prevData => ({ ...prevData, termsAgreed: e.target.checked }));
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
              
                <input
                  type="radio"
                  name="network"
                  value="TIE"
                  checked={network === "TIE"}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="network-input62"
                /><label id="label62">
                TIE
              </label><br></br>
              
                <input
                  type="radio"
                  name="network"
                  value="Other"
                  checked={network === "Other"}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="network-input62"
                /><label id="label62">
                Other
              </label>
            </div>
            {network === "TIE" && (
              <div className="tie-inputs62">
                <label>
                  Email ID:
                  <input
                    type="email"
                    id="tie-email62"
                    placeholder="Enter your email"
                    value={tieEmail}
                    onChange={(e) => setTieEmail(e.target.value)}
                    className="network-input62"
                  />
                </label><br /> <br></br>
                <label>
                  Password:
                  <input
                    type="password"
                    id="tie-passwors62"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="network-input62"
                  />
                </label>
              </div>
            )}
            {network === "Other" && (
              <div className="tie-inputs162">
                <label>
                  Description:
                  <input type="text" 
                  id="tie-email62" 
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description" 
                  className="network-input62" />
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
                  <label><input type="checkbox" value ={"Ideation"}  onChange={(e) => setStage(e.target.value)}/> Ideation</label>
                  <label><input type="checkbox" value={"validation"} onChange={(e) => setStage(e.target.value)}/> Validation</label>
                  <label><input type="checkbox" value={"Early Traction"} onChange={(e) => setStage(e.target.value)}/> Early Traction</label>
                  <label><input type="checkbox" value={"Scaling"} onChange={(e) => setStage(e.target.value)}/> Scaling</label>
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
                  <option>AndhraPradesh</option>
                  <option>ArunachalPradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>HimachalPradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>MadhyaPradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>TamilNadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>UttarPradesh</option>
                  <option>Uttarakhand</option>
                  <option>WestBengal</option>
                  
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
                  value={successbrief}
                  onChange={(e) => setSuccessBrief(e.target.value)}
                  className="input-field62"
                ></textarea>
              </div>
            )}
             <div className="checkbox-container62">
              
              <label>
                <input
                  type="checkbox"
                  className="terms-checkbox60"
                  checked={formData.termsAgreed}
                  onChange={handleCheckboxChange}
                />
                I agree to the <a href="/termsandcondition">terms and conditions</a></label>
              </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2>Review Details</h2>
            <div className="review-section62">
              <h3>Selected Network</h3>
              <p><strong>Network:</strong> {network}</p>
      {network === "TIE" && (
        <>
          <p><strong>Email:</strong> {tieEmail}</p>
          <p><strong>Password:</strong> {password}</p>
        </>
      )}
      {network === "Other" && (
        <p><strong>Description:</strong> {description}</p>
      )}
              <h3>About Mentor</h3>
              <p><strong>Mentor Name:</strong>  {mentorName}</p>
              <p><strong>Active Months:</strong>  {activeMonths}</p>
              <p><strong>Interest:</strong> {interest}</p>
              <p><strong>Industry:</strong> {industry}</p>
              <p><strong>Sectors:</strong> {sectors}</p>
              <p><strong>Stages:</strong> {stages}</p>
              <p><strong>Brief:</strong> {brief}</p>
              <h3>Contact Info</h3>
              <p><strong>Email:</strong>  {email}</p>
              <p><strong>State:</strong>  {state}</p>
              <p><strong>City: </strong> {city}</p>
             
              <p><strong>Mobile:</strong> {mobile}</p>
              <p><strong>LinkedIn Profile:</strong>  {url}</p>
              <h3>Success Story</h3>
              {successStories && (
                <>
                  <p><strong>Startup Name:</strong> {startupName}</p>
                  <p><strong>Website Link: </strong>{websiteLink}</p>
                  <p><strong>Hub Profile Link: </strong> {hubProfileLink}</p>
                  <p><strong>SuccessBrief: </strong> {successbrief}</p>
                </>
              )}
              <p><strong>Terms Agreed:</strong> {formData.termsAgreed ? "Yes" : "No"}</p><br />
            </div>
          </div>
        )}
      </div>
      <div className="navigation-buttons62">
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}
        {step < 5 && <button onClick={handleNext}>Next</button>}
        {step === 5 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Mentor;
