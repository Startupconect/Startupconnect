import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios for HTTP requests
import './ContactForm.css'; // Import the CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    gender: '',
    profession: '',
    state: '',
    city: '',
    queryType: '',
    comments: '',
    fileUpload: null, // Holds the file
  });

  const [file, setFile] = useState(null); // State to store file separately for easier management
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fileUpload') {
      setFile(files[0]); // Set the file in a separate state
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send as 'multipart/form-data'
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('contactNumber', formData.contactNumber);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('profession', formData.profession);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('queryType', formData.queryType);
    formDataToSend.append('comments', formData.comments);
    if (file) {
      formDataToSend.append('fileUpload', file); // Append the file to the form data
    }

    try {
      // Send the form data to the backend API (http://localhost:5000)
      const response = await axios.post('http://localhost:5000/api/contact/submit', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.status >= 200 && response.status < 300){
        alert(`Thank you, ${formData.firstName}! Your Response has been received.`);
      }
     
      
      // Reset the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        gender: '',
        profession: '',
        state: '',
        city: '',
        queryType: '',
        comments: '',
        fileUpload: null,
      });
      setFile(null);
      document.querySelector('input[type="file"]').value = null; // Clear the file input manually

    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  const handleClick = () => {
    navigate("/Faq12"); // Replace with your actual FAQ page route
  };

  return (
    <div className="contact-us-page1">
      {/* First Section */}
      <div className="section first-section1">
        <div className="text90">
          <h1>Get in Touch with Us</h1>
          <div className='mailfig1'>
            <img src="/images/mail.png" alt="Mail icon" />
            <p>We'd love to hear from you</p>
          </div>
        </div>
        <button className="faq-floating-button" onClick={handleClick}>
          <img src="/images/faq-img8.jpeg" alt="FAQ Icon" className="faq-icon" />
        </button>
        <div className="image2">
          <img src="/images/contact-us.png" alt="Contact Us Illustration" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="section middle-section1">
        <div className="form-container1">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-row1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row1">
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row1">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row1">
              <input
                type="text"
                name="queryType"
                placeholder="Query Type"
                value={formData.queryType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row1">
              <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-row1">
              <input 
                type="file" 
                name="fileUpload" 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" id="contact-submit1">Submit</button>
          </form>
        </div>
        <div className="form-image1">
          <img src="/images/contatact.jpg" alt="Form Illustration" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="section bottom-section1">
        <div className="contact-info1">
          <p>For Queries and Feedback</p>
          <p>Toll-Free Number: 070927 74077</p>
          <p>
            Office Address: 10, Easwari Nagar, Gowrivakkam, Sembakkam, Chennai, Tamil Nadu 600073
          </p>
          <p>Working Hours: 10:00 AM - 6:00 PM</p>
        </div>
        <div className="image1">
          <img src="/images/customer-feedback.png" alt="Footer Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
