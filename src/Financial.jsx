import React, { useState,useEffect, useMemo } from 'react';
import './Financial.css';

const Finance = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const mainSliderImages  = useMemo(() => [
    'https://t3.ftcdn.net/jpg/05/68/07/72/240_F_568077260_aTi9HXGVd8QwHIun8tARgqlDVMAjCdDL.jpg', // Main slider images
    'https://t4.ftcdn.net/jpg/08/65/34/01/240_F_865340132_cF1slznLdv7DTy2XTelIhNu1qOdlvapo.jpg',
    'https://t4.ftcdn.net/jpg/07/12/77/73/240_F_712777344_vrhWNPGXa0Ch7K97lvipSj3EUC0YBKWk.jpg',
    'https://t3.ftcdn.net/jpg/07/20/77/82/240_F_720778209_2rXnIFZUfaHAeMZLef2YMMammfIK4GBd.jpg',
    'https://t3.ftcdn.net/jpg/04/04/75/62/240_F_404756219_EtfntQxqBbpeqaXZWnkRvxW2AfMCAvCF.jpg'
  ], []);

  const boxSliderImages  = useMemo(() => [
    [ 'https://t3.ftcdn.net/jpg/04/04/75/62/240_F_404756219_EtfntQxqBbpeqaXZWnkRvxW2AfMCAvCF.jpg','https://t3.ftcdn.net/jpg/05/68/07/72/240_F_568077260_aTi9HXGVd8QwHIun8tARgqlDVMAjCdDL.jpg','https://t4.ftcdn.net/jpg/08/65/34/01/240_F_865340132_cF1slznLdv7DTy2XTelIhNu1qOdlvapo.jpg','https://t4.ftcdn.net/jpg/07/12/77/73/240_F_712777344_vrhWNPGXa0Ch7K97lvipSj3EUC0YBKWk.jpg','https://t3.ftcdn.net/jpg/07/20/77/82/240_F_720778209_2rXnIFZUfaHAeMZLef2YMMammfIK4GBd.jpg'],
    [ 'https://t3.ftcdn.net/jpg/07/20/77/82/240_F_720778209_2rXnIFZUfaHAeMZLef2YMMammfIK4GBd.jpg','https://t3.ftcdn.net/jpg/04/04/75/62/240_F_404756219_EtfntQxqBbpeqaXZWnkRvxW2AfMCAvCF.jpg','https://t3.ftcdn.net/jpg/05/68/07/72/240_F_568077260_aTi9HXGVd8QwHIun8tARgqlDVMAjCdDL.jpg','https://t4.ftcdn.net/jpg/08/65/34/01/240_F_865340132_cF1slznLdv7DTy2XTelIhNu1qOdlvapo.jpg','https://t4.ftcdn.net/jpg/07/12/77/73/240_F_712777344_vrhWNPGXa0Ch7K97lvipSj3EUC0YBKWk.jpg'],
    [ 'https://t4.ftcdn.net/jpg/08/65/34/01/240_F_865340132_cF1slznLdv7DTy2XTelIhNu1qOdlvapo.jpg','https://t4.ftcdn.net/jpg/07/12/77/73/240_F_712777344_vrhWNPGXa0Ch7K97lvipSj3EUC0YBKWk.jpg','https://t3.ftcdn.net/jpg/07/20/77/82/240_F_720778209_2rXnIFZUfaHAeMZLef2YMMammfIK4GBd.jpg','https://t3.ftcdn.net/jpg/04/04/75/62/240_F_404756219_EtfntQxqBbpeqaXZWnkRvxW2AfMCAvCF.jpg','https://t3.ftcdn.net/jpg/05/68/07/72/240_F_568077260_aTi9HXGVd8QwHIun8tARgqlDVMAjCdDL.jpg']
  ], []);

  const [mainSliderIndex, setMainSliderIndex] = useState(0);
  const [boxSliderIndices, setBoxSliderIndices] = useState([0, 0, 0, 0]);

  // Auto-slide effect for the main slider
  useEffect(() => {
    const interval = setInterval(() => {
      setMainSliderIndex((prev) => (prev === mainSliderImages.length - 1 ? 0 : prev + 1));
    }, 2300); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [mainSliderImages.length]);

  // Auto-slide effect for each box slider
  useEffect(() => {
    const intervals = boxSliderImages.map((_, index) => {
      return setInterval(() => {
        setBoxSliderIndices((prev) => {
          const updated = [...prev];
          updated[index] = (updated[index] + 1) % boxSliderImages[index].length;
          return updated;
        });
      }, 2000); // Slide every 3 seconds for each slider
    });

    // Cleanup function to clear intervals
    return () => intervals.forEach(clearInterval);
  }, [boxSliderImages]);


  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail'];
  const sectors = ['Public', 'Private', 'Non-profit'];
  const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
  const cities = ['Los Angeles', 'Houston', 'New York City', 'Miami', 'Chicago'];

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="container4">
      <div className="top-section4">
        <div className="main-slider4">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        <div className="parag4">
          <p> Financial Services </p>
          </div>
          </div>
        <div className="box-sliders4">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider4">
              <img src={slider[boxSliderIndices[index]]} alt={`Box Slider ${index}`} />
            </div>
            
          ))}
        </div>
      </div>
      {/* Middle Row */}
      <div className="middle-row">
      <div className="filter-container">
      <h2>FILTERS</h2>

      <div className="filter">
        <div className="filter-header" onClick={() => handleFilterClick('industry')}>
          <span>Industry</span>
          <span>{activeFilter === 'industry' ? '-' : '+'}</span>
        </div>
      </div>
      {activeFilter === 'industry' && (
        <div className="filter-content">
          {industries.map((industry, index) => (
            <div key={index} className="filter-item">
              {industry}
            </div>
          ))}
        </div>
      )}

      <div className="filter">
        <div className="filter-header" onClick={() => handleFilterClick('sector')}>
          <span>Sector</span>
          <span>{activeFilter === 'sector' ? '-' : '+'}</span>
        </div>
      </div>
      {activeFilter === 'sector' && (
        <div className="filter-content">
          {sectors.map((sector, index) => (
            <div key={index} className="filter-item">
              {sector}
            </div>
          ))}
        </div>
      )}

      <div className="filter">
        <div className="filter-header" onClick={() => handleFilterClick('state')}>
          <span>State</span>
          <span>{activeFilter === 'state' ? '-' : '+'}</span>
        </div>
      </div>
      {activeFilter === 'state' && (
        <div className="filter-content">
          {states.map((state, index) => (
            <div key={index} className="filter-item">
              {state}
            </div>
          ))}
        </div>
      )}

      <div className="filter">
        <div className="filter-header" onClick={() => handleFilterClick('city')}>
          <span>City</span>
          <span>{activeFilter === 'city' ? '-' : '+'}</span>
        </div>
      </div>
      {activeFilter === 'city' && (
        <div className="filter-content">
          {cities.map((city, index) => (
            <div key={index} className="filter-item">
              {city}
            </div>
          ))}
        </div>
      )}
    </div>

        <div className="search-profile-container">
          <input type="text" placeholder="Search..." />
          <div className="profiles">

          <div className="profile">
          <img src="\images\boy-icon.jpg" alt="Company Logo" className="profile-image" />
            <div className="company-name">Kairaa Techserve</div>
            <div className="location">Chennai, Gowrivakkam</div>
            <div className="divider"></div>
            <div className="company-details">
                <strong>Company</strong><br />
                Blockchain development, mobile app development, and web development. We offer the best technology
                solutions to our clients...
            </div>
          </div>
          <div className="profile">
          <img src="\images\boy-icon.jpg" alt="Company Logo" className="profile-image" />
            <div className="company-name">Kairaa Techserve</div>
            <div className="location">Chennai, Gowrivakkam</div>
            <div className="divider"></div>
            <div className="company-details">
                <strong>Company</strong><br />
                Blockchain development, mobile app development, and web development. We offer the best technology
                solutions to our clients...
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        <div className="profile-container">
        <div className="profile">
          <img src="\images\boy-icon.jpg" alt="Company Logo" className="profile-image" />
            <div className="company-name">Kairaa Techserve</div>
            <div className="location">Chennai, Gowrivakkam</div>
            <div className="divider"></div>
            <div className="company-details">
                <strong>Company</strong><br />
                Blockchain development, mobile app development, and web development. We offer the best technology
                solutions to our clients...
            </div>
          </div>
          <div className="profile">
          <img src="\images\boy-icon.jpg" alt="Company Logo" className="profile-image" />
            <div className="company-name">Kairaa Techserve</div>
            <div className="location">Chennai, Gowrivakkam</div>
            <div className="divider"></div>
            <div className="company-details">
                <strong>Company</strong><br />
                Blockchain development, mobile app development, and web development. We offer the best technology
                solutions to our clients...
            </div>
          </div>
          <div className="profile">
            <img src="\images\boy-icon.jpg" alt="Company Logo" className="profile-image" />
            <div className="company-name">Kairaa Techserve</div>
            <div className="location">Chennai, Gowrivakkam</div>
            <div className="divider"></div>
            <div className="company-details">
                <strong>Company</strong><br />
                Blockchain development, mobile app development, and web development. We offer the best technology
                solutions to our clients...
            </div>
          </div>
          <div className="load-more3">
          <button>LOAD MORE</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Finance;
