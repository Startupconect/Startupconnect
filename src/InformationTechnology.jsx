import React, { useState,useEffect, useMemo } from 'react';
import './InformationTechnology.css';

const InformationTechnology = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const mainSliderImages = [
    'https://t3.ftcdn.net/jpg/09/08/33/60/240_F_908336039_3BhK1VPjkkrgvHTH6z0s86I3RlzKAfjg.jpg', // Main slider images
    'https://t3.ftcdn.net/jpg/07/66/78/74/240_F_766787453_GbipHVGKBZdcGZPGi4vE1sHPU19XfCbl.jpg',
    'https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg',
    'https://t3.ftcdn.net/jpg/08/68/12/20/240_F_868122068_u3HnVHlp8ZH281ivA1GHj4FsoK31f2XX.jpg',
    'https://t3.ftcdn.net/jpg/09/93/39/94/240_F_993399455_HegOYdjoJKspil0ZZPpsnJJA5wmY6cV7.jpg'
  ];

  const boxSliderImages = useMemo(() => [
    [ 'https://t3.ftcdn.net/jpg/09/93/39/94/240_F_993399455_HegOYdjoJKspil0ZZPpsnJJA5wmY6cV7.jpg','https://t3.ftcdn.net/jpg/09/08/33/60/240_F_908336039_3BhK1VPjkkrgvHTH6z0s86I3RlzKAfjg.jpg','https://t3.ftcdn.net/jpg/07/66/78/74/240_F_766787453_GbipHVGKBZdcGZPGi4vE1sHPU19XfCbl.jpg','https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg','https://t3.ftcdn.net/jpg/08/68/12/20/240_F_868122068_u3HnVHlp8ZH281ivA1GHj4FsoK31f2XX.jpg'],
    [ 'https://t3.ftcdn.net/jpg/08/68/12/20/240_F_868122068_u3HnVHlp8ZH281ivA1GHj4FsoK31f2XX.jpg','https://t3.ftcdn.net/jpg/09/93/39/94/240_F_993399455_HegOYdjoJKspil0ZZPpsnJJA5wmY6cV7.jpg','https://t3.ftcdn.net/jpg/09/08/33/60/240_F_908336039_3BhK1VPjkkrgvHTH6z0s86I3RlzKAfjg.jpg','https://t3.ftcdn.net/jpg/07/66/78/74/240_F_766787453_GbipHVGKBZdcGZPGi4vE1sHPU19XfCbl.jpg','https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg'],
    [ 'https://t3.ftcdn.net/jpg/07/66/78/74/240_F_766787453_GbipHVGKBZdcGZPGi4vE1sHPU19XfCbl.jpg','https://t4.ftcdn.net/jpg/04/26/71/99/360_F_426719952_WtHWVePXzO2iBOdAX5IjGyCumcgj467Q.jpg','https://t3.ftcdn.net/jpg/08/68/12/20/240_F_868122068_u3HnVHlp8ZH281ivA1GHj4FsoK31f2XX.jpg','https://t3.ftcdn.net/jpg/09/93/39/94/240_F_993399455_HegOYdjoJKspil0ZZPpsnJJA5wmY6cV7.jpg','https://t3.ftcdn.net/jpg/09/08/33/60/240_F_908336039_3BhK1VPjkkrgvHTH6z0s86I3RlzKAfjg.jpg']
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
  const sectors = ['', 'Private', 'Non-profit'];
  const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
  const cities = ['Los Angeles', 'Houston', 'New York City', 'Miami', 'Chicago'];

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="container6">
      <div className="top-section6">
        <div className="main-slider6">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        <div className="parag6">
          <p> Information Technology </p>
          </div>
          </div>
        <div className="box-sliders6">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider6">
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
          <img src="/images/boy-icon.jpg" alt="Company Logo" className="profile-image" />
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
          <img src="/images/boy-icon.jpg" alt="Company Logo" className="profile-image" />
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
          <img src="/images/boy-icon.jpg" alt="Company Logo" className="profile-image" />
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
          <img src="/images/boy-icon.jpg" alt="Company Logo" className="profile-image" />
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
            <img src="/images/boy-icon.jpg" alt="Company Logo" className="profile-image" />
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

export default InformationTechnology;
