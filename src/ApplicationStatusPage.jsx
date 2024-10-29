import React from 'react';
import './ApplicationStatusPage.css';
import { FaUser, FaClipboardList, FaInfoCircle, FaBell, FaHeadset, FaTasks, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { MdForward, MdFileUpload } from 'react-icons/md';

const ApplicationStatusPage = ({ userType }) => {
  const applicationData = {
    applicationId: "",
    applicantName: "",
    email: "",
    phoneNumber: "",
    submissionDate: "",
    status: "",
    progressSteps: [
      { step: "Submission Received", completed: true },
      { step: "Document Verification", completed: true },
      { step: "Business Review", completed: false },
      { step: "Final Decision", completed: false },
    ],
    nextSteps: [
      "Provide additional business documents.",
      "Await final decision from review committee."
    ],
    notifications: [
      "Your application is under review.",
      "Please check your email for any updates."
    ],
    supportContact: {
      email: "support@kairaatech.com",
      phone: "+1234567890",
    },
  };

  const handleDownload = () => {
    const data = `
      Application ID: ${applicationData.applicationId}
      Name: ${applicationData.applicantName}
      Email: ${applicationData.email}
      Phone Number: ${applicationData.phoneNumber}
      Date of Submission: ${applicationData.submissionDate}
      Status: ${applicationData.status}
      Progress Steps:
      ${applicationData.progressSteps.map(step => `${step.step} - ${step.completed ? 'Completed' : 'In Progress'}`).join('\n')}
      Next Steps:
      ${applicationData.nextSteps.join('\n')}
      Notifications:
      ${applicationData.notifications.join('\n')}
      Support Contact:
      Email: ${applicationData.supportContact.email}
      Phone: ${applicationData.supportContact.phone}
    `;
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'application_status.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="application-statusK0012">
      <h1 className="K0012"><FaClipboardList /> Application Status</h1>

      {/* Applicant Details */}
      <div className="applicant-detailsK0012">
        <h2 className="K0012"><FaUser /> Applicant Details</h2>
        <p><strong>Application ID:</strong> {applicationData.applicationId}</p>
        <p><strong>{userType === 'startup' ? 'Startup' : userType === 'investor' ? 'Investor' : 'Merchant'} Name:</strong> {applicationData.applicantName}</p>
        <p><strong>Email:</strong> {applicationData.email}</p>
        <p><strong>Phone Number:</strong> {applicationData.phoneNumber}</p>
        <p><strong>Date of Application Submission:</strong> {applicationData.submissionDate}</p>
      </div>

      {/* Status Overview */}
      <div className="status-overviewK0012">
        <h2 className="K0012"><FaInfoCircle /> Status</h2>
        <p><strong>Application Status:</strong> <span className={`status-${applicationData.status.toLowerCase()}K0012`}>{applicationData.status}</span></p>
      </div>

      {/* Progress Tracker */}
      <div className="progress-trackerK0012">
        <h2 className="K0012"><FaTasks /> Progress Tracker</h2>
        <div className="roadmapK0012">
          {applicationData.progressSteps.map((step, index) => (
            <div
              key={index}
              className={`roadmap-stepK0012 ${step.completed ? 'completedK0012' : 'in-progressK0012'}`}
              title={step.step}
            >
              <div className="step-circleK0012">{index + 1}</div>
              <div className="step-labelK0012">{step.step}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="next-stepsK0012">
        <h2 className="K0012"><MdForward /> Next Steps</h2>
        <ul className="K0012">
          {applicationData.nextSteps.map((step, index) => (
            <li className="K0012" key={index}>{step}</li>
          ))}
        </ul>

        <div className="additional-optionsK0012">
          <h3>Additional Actions</h3>
          <a href="your-link-url" target="_blank" rel="noopener noreferrer">
            Click here for more details
          </a>
          <div className="upload-fileK0012">
            <label htmlFor="file-upload" className="K0012"><MdFileUpload /> Upload a file:</label>
            <input type="file" id="file-upload" />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="notificationsK0012">
        <h2 className="K0012"><FaBell /> Notifications</h2>
        <ul className="K0012">
          {applicationData.notifications.map((notification, index) => (
            <li className="K0012" key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      {/* Support Contact */}
      <div className="support-contactK0012">
        <h2 className="K0012"><FaHeadset /> Contact Support</h2>
        <p>If you need further assistance, please contact us:</p>
        <p><strong>Email:</strong> {applicationData.supportContact.email}</p>
        <p><strong>Phone:</strong> {applicationData.supportContact.phone}</p>
      </div>

      {/* Download Button */}
      <div className="download-buttonK0012">
        <button className="K0012" onClick={handleDownload}><FaDownload /> Download Application Status</button>
      </div>

      {/* Back Button */}
      <div className="back-buttonK0012">
        <button className="K0012" onClick={() => window.history.back()}><FaArrowLeft /> Back to Dashboard</button>
      </div>
    </div>
  );
};

export default ApplicationStatusPage;
