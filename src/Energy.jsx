import React, { useState,useEffect, useMemo } from 'react';
import './energy.css';

const Energy = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const mainSliderImages  = useMemo(() => [
    'https://t3.ftcdn.net/jpg/07/87/98/76/240_F_787987657_JZW7vHDuzUTfoXZPO2lpKnGb0AlsZkw6.jpg', // Main slider images
    'https://t3.ftcdn.net/jpg/08/24/16/48/240_F_824164854_igwaP3vHJgdbGVRk3jjoDe77GOngxC5E.jpg',
    'https://t3.ftcdn.net/jpg/05/99/05/50/240_F_599055078_EqFj6xIUxUzoIOgsduQIfGg3qemcv2Nw.jpg',
    'https://t4.ftcdn.net/jpg/03/13/78/53/240_F_313785321_nrEKO8cuuD6CHqqQID9sWVAkHNdCw3Na.jpg',
    'https://t3.ftcdn.net/jpg/05/77/98/46/240_F_577984639_9WM57IxILryz3UuR6HXdYogdNq3RvxIZ.jpg'
  ], []);

  const boxSliderImages  = useMemo(() =>  [
    [ 'https://t3.ftcdn.net/jpg/05/77/98/46/240_F_577984639_9WM57IxILryz3UuR6HXdYogdNq3RvxIZ.jpg','https://t3.ftcdn.net/jpg/07/87/98/76/240_F_787987657_JZW7vHDuzUTfoXZPO2lpKnGb0AlsZkw6.jpg','https://t3.ftcdn.net/jpg/08/24/16/48/240_F_824164854_igwaP3vHJgdbGVRk3jjoDe77GOngxC5E.jpg','https://t3.ftcdn.net/jpg/05/99/05/50/240_F_599055078_EqFj6xIUxUzoIOgsduQIfGg3qemcv2Nw.jpg','https://t4.ftcdn.net/jpg/03/13/78/53/240_F_313785321_nrEKO8cuuD6CHqqQID9sWVAkHNdCw3Na.jpg'],
    [ 'https://t4.ftcdn.net/jpg/03/13/78/53/240_F_313785321_nrEKO8cuuD6CHqqQID9sWVAkHNdCw3Na.jpg','https://t3.ftcdn.net/jpg/05/77/98/46/240_F_577984639_9WM57IxILryz3UuR6HXdYogdNq3RvxIZ.jpg','https://t3.ftcdn.net/jpg/07/87/98/76/240_F_787987657_JZW7vHDuzUTfoXZPO2lpKnGb0AlsZkw6.jpg','https://t3.ftcdn.net/jpg/08/24/16/48/240_F_824164854_igwaP3vHJgdbGVRk3jjoDe77GOngxC5E.jpg','https://t3.ftcdn.net/jpg/05/99/05/50/240_F_599055078_EqFj6xIUxUzoIOgsduQIfGg3qemcv2Nw.jpg'],
    [ 'https://t3.ftcdn.net/jpg/08/24/16/48/240_F_824164854_igwaP3vHJgdbGVRk3jjoDe77GOngxC5E.jpg','https://t3.ftcdn.net/jpg/05/99/05/50/240_F_599055078_EqFj6xIUxUzoIOgsduQIfGg3qemcv2Nw.jpg','https://t4.ftcdn.net/jpg/03/13/78/53/240_F_313785321_nrEKO8cuuD6CHqqQID9sWVAkHNdCw3Na.jpg','https://t3.ftcdn.net/jpg/05/77/98/46/240_F_577984639_9WM57IxILryz3UuR6HXdYogdNq3RvxIZ.jpg','https://t3.ftcdn.net/jpg/07/87/98/76/240_F_787987657_JZW7vHDuzUTfoXZPO2lpKnGb0AlsZkw6.jpg']
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
    <div className="container3">
      <div className="top-section3">
        <div className="main-slider3">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        <div className="parag3">
          <p> Energy </p>
          </div>
          </div>
        <div className="box-sliders3">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider3">
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

export default Energy;
