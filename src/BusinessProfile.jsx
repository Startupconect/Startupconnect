import React, { useState,useEffect, useMemo } from 'react';
import './BusinessProfile.css';

const BusinessProfile = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const mainSliderImages = useMemo(() =>[
    'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg', // Main slider images
    'https://t3.ftcdn.net/jpg/07/26/18/18/240_F_726181811_dAY6bYiZVD2gbmq3dN8lkHw9TiRAsGkB.jpg',
    'https://t3.ftcdn.net/jpg/08/04/35/10/240_F_804351018_uPhn9pdAxxAPFco8CyIRsgJapBrre28n.jpg',
    'https://t4.ftcdn.net/jpg/08/74/66/93/240_F_874669354_1BPwYEax1X3JoNEmAujXSVb8YG6ctDbk.jpg',
    'https://t4.ftcdn.net/jpg/06/01/82/25/240_F_601822505_ttnhpxxOgPRIasGA3ud8O5PrOhoXlGBb.jpg'
  ], []);

  const boxSliderImages = useMemo(() => [
    [ 'https://t4.ftcdn.net/jpg/06/01/82/25/240_F_601822505_ttnhpxxOgPRIasGA3ud8O5PrOhoXlGBb.jpg','https://t4.ftcdn.net/jpg/06/22/38/19/240_F_622381985_ECJi9hVHGlyogXCYVjSLFHm1MYdpt3VS.jpg','https://t3.ftcdn.net/jpg/07/26/18/18/240_F_726181811_dAY6bYiZVD2gbmq3dN8lkHw9TiRAsGkB.jpg','https://t3.ftcdn.net/jpg/08/04/35/10/240_F_804351018_uPhn9pdAxxAPFco8CyIRsgJapBrre28n.jpg','https://t4.ftcdn.net/jpg/08/74/66/93/240_F_874669354_1BPwYEax1X3JoNEmAujXSVb8YG6ctDbk.jpg'],
    [ 'https://t4.ftcdn.net/jpg/08/74/66/93/240_F_874669354_1BPwYEax1X3JoNEmAujXSVb8YG6ctDbk.jpg','https://t4.ftcdn.net/jpg/06/01/82/25/240_F_601822505_ttnhpxxOgPRIasGA3ud8O5PrOhoXlGBb.jpg','https://t4.ftcdn.net/jpg/06/22/38/19/240_F_622381985_ECJi9hVHGlyogXCYVjSLFHm1MYdpt3VS.jpg','https://t3.ftcdn.net/jpg/07/26/18/18/240_F_726181811_dAY6bYiZVD2gbmq3dN8lkHw9TiRAsGkB.jpg','https://t3.ftcdn.net/jpg/08/04/35/10/240_F_804351018_uPhn9pdAxxAPFco8CyIRsgJapBrre28n.jpg'],
    [ 'https://t3.ftcdn.net/jpg/07/26/18/18/240_F_726181811_dAY6bYiZVD2gbmq3dN8lkHw9TiRAsGkB.jpg','https://t3.ftcdn.net/jpg/08/04/35/10/240_F_804351018_uPhn9pdAxxAPFco8CyIRsgJapBrre28n.jpg','https://t4.ftcdn.net/jpg/08/74/66/93/240_F_874669354_1BPwYEax1X3JoNEmAujXSVb8YG6ctDbk.jpg','https://t4.ftcdn.net/jpg/06/01/82/25/240_F_601822505_ttnhpxxOgPRIasGA3ud8O5PrOhoXlGBb.jpg','https://t4.ftcdn.net/jpg/06/22/38/19/240_F_622381985_ECJi9hVHGlyogXCYVjSLFHm1MYdpt3VS.jpg']
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
    <div className="container1">
      <div className="top-section1">
        <div className="main-slider1">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        <div className="parag1">
          <p> Business Products and Services</p>
          </div>
          </div>
        <div className="box-sliders1">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider1">
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
          <input type="text2" placeholder="Search..." />
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

export default BusinessProfile;
