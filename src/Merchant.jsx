import React, { useState } from 'react';
import './Merchant.css';
import { Link } from 'react-router-dom';

function Merchant() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState([
    { id: 1, image: '/images/bicon.jpeg', name: 'John Doe', place: 'New York', product: 'Product 1' },
    { id: 2, image: '/images/bicon.jpeg', name: 'Jane Smith', place: 'California', product: 'Product 2' },
    { id: 3, image: '/images/bicon.jpeg', name: 'Robert Brown', place: 'Texas', product: 'Product 3' },
    { id: 4, image: '/images/bicon.jpeg', name: 'Emily Davis', place: 'Florida', product: 'Product 4' },
    { id: 5, image: '/images/bicon.jpeg', name: 'Mark', place: 'Texas', product: 'Product 5' },
    { id: 6, image: '/images/bicon.jpeg', name: 'Emily Davis', place: 'Florida', product: 'Product 6' },
  ]);

  const handleSearch = () => {
    alert(`Search for: ${searchQuery}`);
  };

  const loadMore = () => {
    alert('Load more products');
  };

  const [activeFilter, setActiveFilter] = useState(null);

  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail'];
  const sectors = ['Public', 'Private', 'Non-profit'];
  const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
  const cities = ['Los Angeles', 'Houston', 'New York City', 'Miami', 'Chicago'];

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getRightContainerColor = (index) => {
    const colors = [
      '#CCCCFF', // Color for left-container-1
      '#B2D6FF', // Color for left-container-2
      '#A8C8FF', // Color for left-container-3
      '#A8B6E5', // Color for left-container-4
      '#8aaee2', // Color for left-container-5
      '#9ab7e2', // Color for left-container-6
    ];
    return colors[index];
  };

  const getBackContent = (index) => {
    const content = [
      'Establishing and maintaining an online presence to reach a wider audience and facilitate easier transactions.',
      'Improving customer service, offering personalized experiences, and addressing customer feedback to build loyalty.',
      'Engaging in marketing activities such as advertising, discounts, and loyalty programs to attract and retain customers.',
      'Streamlining logistics, ensuring timely procurement, and managing efficient delivery systems to enhance operational efficiency.',
      'Some merchants focus on eco-friendly practices, such as sourcing sustainable products or reducing the carbon footprint in operations.',
      'Adopting new technologies, such as AI-driven customer support, inventory management systems, or digital payment solutions.',
    ];
    return content[index];
  };

  return (
    <>
      <div className='main'>
        <div className="video-container">
          <video className="video-player" controls autoPlay loop muted>
            <source src="/images/Taking on the World Together.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='logo1'>
          <img src="/images/logomerchant.jpg" alt="merchant-logo" />
          <h1>Merchant</h1>
        </div>
      </div>

      <div className="merchant-container">
        {/* Filters section */}
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

        {/* Product section */}
        <div className="product-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              id="search_for"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src="/images/search_icon.png" onClick={handleSearch} alt="search" height="100px" width="100px" />
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <Link to="/MerchantProfile" style={{ textDecoration: 'none' }} className="product-card" key={product.id}>
                <div>
                  <div className="product-img">
                    <img src="/images/avatar.jpeg" alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>{product.place}</p>
                    <p>{product.product}</p>
                    <br />
                    <button id="merchant-profile-btn">View Profile</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <center>
        <button onClick={loadMore} className="load-more90">
          <b>Load More</b>
        </button>
      </center>

      <center>
        <div className="Top78">KEY INITIATIVES OF MERCHANT</div>
      </center>

      <div className="main-container105">
        <div className="left-side105">
          {['E-commerce Integration', 'Customer Experience Enhancement', 'Marketing & Promotion', 'Supply Chain Optimization', 'Sustainability Initiatives', 'Technological Advancements'].map((title, index) => (
            <div
              key={index}
              className={`left-container105 left-container105-${index + 1}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="content front-content105">{title}</div>
            </div>
          ))}
        </div>
        <div className="right-side105">
          <div
            className="container right-container105"
            style={{
              backgroundColor: hoveredIndex !== null ? getRightContainerColor(hoveredIndex) : 'darkgray',
              transition: 'background-color 0.5s ease-in-out',
            }}
          >
            {hoveredIndex !== null ? (
              <div className="content back-content105">{getBackContent(hoveredIndex)}</div>
            ) : (
              <div className="content back-content-placeholder105">Key Initiatives Of Merchant</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Merchant;
