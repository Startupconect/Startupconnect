import React, { useState } from "react";
import "./Individual.css";
import { useNavigate } from "react-router-dom";

const IndividualRegistration = () => {
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    interest: '',
    brief:'',
    email: '',
    state: '',
    mobile: '',
    city: '',
    termsAgreed: false
  });

  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file); // Store the uploaded file
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData(prevData => ({ ...prevData, termsAgreed: e.target.checked }));
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate Step 1
      if (!uploadedFile || !formData.name || !formData.age || !formData.occupation || !formData.interest) {
        alert("Please fill in all fields and upload a profile picture.");
        return;
      }
    }

    if (step === 2) {
      // Validate Step 2
      if (!formData.email || !formData.state || !formData.mobile || !formData.city || !formData.termsAgreed) {
        alert("Please fill in all contact information and agree to the terms.");
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
  
    // Append form data
    formDataToSend.append('name', formData.name);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('occupation', formData.occupation);
    formDataToSend.append('interest', formData.interest);
    formDataToSend.append('brief', formData.brief);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('termsAgreed', formData.termsAgreed);
  
    // Append the uploaded file if it exists
    if (uploadedFile) {
      formDataToSend.append('profilePicture', uploadedFile);
    }

    console.log("Form Data:", formDataToSend.get("name"), formDataToSend.get("profilePicture"));
  
    try {
      const response = await fetch('http://localhost:5000/api/individual/register', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Registration successful!');
        navigate('/dashboard');
        // Clear form data or redirect as needed
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert('Error submitting form.');
    }
  };
  

  return (
    <div className="individual-registration60">
      <div className="progress-bar60">
        {["About Individual", "Contact Info", "Confirmation"].map((label, index) => (
          <div key={index} className={`progress-step60 ${step === index + 1 ? "active" : ""}`}>
            <div className="circle60">{index + 1}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="form-content60">
        {step === 1 && (
          <div>
            <h2>About Individual</h2>
            <div className="mentor-details60">
              <div className="mentor-left60">
                <label>Upload Profile Picture:</label>
                <input type="file" onChange={handleFileUpload} className="input-field60" required />

                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
                <label>Age (In Years)</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />

                <label>Occupation:</label>
                <select
                  name="occupation"
                  className="input-field60"
                  onChange={handleChange}
                  required
                >
                  <option>Select Occupation</option>
                  <option>Startup</option>
                  <option>Mentor</option>
                  <option>Individual</option>
                  <option>Investor</option>
                </select>
              </div>

              <div className="mentor-right60">
                <label>Interest:</label>
                <select
                  name="interest"
                  className="input-field60"
                  onChange={handleChange}
                  required
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

                <label>Brief:</label>
                <input
                  type="text"
                  name="brief"
                  placeholder="Enter brief"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Contact Info</h2>
            <div className="mentor-details60">
              <div className="mentor-left60">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mentor-right60">
                <label>Mobile:</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="input-field60"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="terms-container60">
              <div className="terms60">
                <h3>Terms and Conditions</h3>
                <p>
                  Please read the following terms and conditions carefully. By using this service, you agree to abide by these terms.
                </p>
                <p>
                  1. You must be at least 18 years of age to use this service.<br />
                  2. All information provided must be accurate and up to date.<br />
                  3. Any misuse of the service may result in termination of your account.<br />
                  4. You are responsible for keeping your login credentials secure.
                </p>
              </div>

              <div className="checkbox-container60">
                <input
                  type="checkbox"
                  className="terms-checkbox60"
                  checked={formData.termsAgreed}
                  onChange={handleCheckboxChange}
                />
                <label>I agree to the terms and conditions</label>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="Lastcont67">
            <h2>Confirmation</h2>
            <div className="mentor-details60">
              <h3>Review your information:</h3><br />
              <p><strong>Name:</strong> {formData.name}</p><br />
              <p><strong>Age:</strong> {formData.age}</p><br />
              <p><strong>Occupation:</strong> {formData.occupation}</p><br />
              <p><strong>Interest:</strong> {formData.interest}</p><br />
              <p><strong>Brief:</strong>{formData.brief}</p><br></br>
              <p><strong>Email:</strong> {formData.email}</p><br />
              <p><strong>State:</strong> {formData.state}</p><br />
              <p><strong>Mobile:</strong> {formData.mobile}</p><br />
              <p><strong>City:</strong> {formData.city}</p><br />
              <p><strong>Terms Agreed:</strong> {formData.termsAgreed ? "Yes" : "No"}</p><br />
            </div>
          </div>
        )}
      </div>

      <div className="navigation-buttons60">
        <button onClick={handlePrevious} disabled={step === 1}>
          Previous
        </button>
        {step === 3 ? (
           
            <button onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button onClick={handleNext} disabled={step === 4}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default IndividualRegistration;
