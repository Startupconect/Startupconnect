import React, { useState } from 'react';
import './RegistrationHome.css';
import { useNavigate } from 'react-router-dom';

const roles = [
  { name: 'Startup', description: 'Already started your entrepreneurial journey as an idea or newly established business.', color: '#f3922b',boxShadow: 'inset 0 0 8px orange' },
  { name: 'Mentor', description: 'A mentor may share with a mentee (protege) information about...', color: '#64a3ff' },
  { name: 'Individual', description: 'If you just want to explore things, like Blogs, Govt Schemes etc...', color: '#ff75a0' },
  { name: 'Individual Investor', description: 'An individual investor is a non-professional investor who buys and sells securities.', color: '#ad76ff' },
];

const RegistrationHome = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role.name);
  };

  const handleNextClick = () => {
    if (!selectedRole) {
      alert("Please select a role before proceeding.");
      return;
    }

    switch (selectedRole) {
      case 'Startup':
        navigate('/StartupRegistration');
        break;
      case 'Mentor':
        navigate('/MentorRegistration');
        break;
      case 'Individual':
        navigate('/Individual');
        break;
      case 'Individual Investor':
        navigate('/InvestorRegistration');
        break;
      default:
        break;
    }
  };

  return (
    <div className="registration-container459">
      <img src="/images/Modern Office with Natural Light.jpeg ">
      </img>
      <p className="registration-header459">TELL US WHO YOU ARE! SELECT ONE OF THESE</p>

      <div className="roles-container459">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`role-section459 ${selectedRole === role.name ? 'selected459' : ''}`}
            onClick={() => handleRoleClick(role)}
            style={{ borderColor: role.color }}
          >
            <h3 style={{ color: role.color }}>{role.name}</h3>
            <p>{role.description}</p>
            <div className={`radio-button459 ${selectedRole === role.name ? 'checked459' : ''}`}>
              {selectedRole === role.name && <span className="checkmark459">➔</span>}
            </div>
          </div>
        ))}
      </div>

      <button className="next-step-button459" onClick={handleNextClick}>Next Step</button>
    </div>
  );
};

export default RegistrationHome;
