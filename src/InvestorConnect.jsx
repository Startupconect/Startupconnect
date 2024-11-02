import React, { useState } from 'react';
import './InvestorConnect.css';
import { Link } from 'react-router-dom';


const InvestorConnect = () => {
  const investorsData = [
    { name: "Robert Andrew", location: "Bangalore, India", phone: "+91 98789 98767", email: "robert345@gmail.com" },
    { name: "Alice Bennett", location: "New York, USA", phone: "+1 234 567 8901", email: "alice123@gmail.com" },
    { name: "Chris Douglas", location: "London, UK", phone: "+44 1234 567890", email: "chris123@gmail.com" },
    { name: "Emma Watson", location: "Bangalore, India", phone: "+91 98789 98767", email: "emma.w@gmail.com" },
    { name: "Michael Johnson", location: "California, USA", phone: "+1 345 678 9012", email: "michael.j@gmail.com" },
    { name: "Johnson", location: "Tokyo, USA", phone: "+1 345 678 9012", email: "johnson@gmail.com" }
  ];

  const services = [
    {
      title: "Market Research",
      description: "Market research is the process of gathering, analyzing, and interpreting information about a market, including customer needs, preferences, and trends, to guide business decisions and strategies.",
      icon: "/images/images (2).png",
    },
    {
      title: "Investment Management",
      description: "Investment management is the professional handling of financial assets and portfolios, aiming to achieve specific investment goals through strategies like asset allocation, risk management, and monitoring.",
      icon: "/images/images (1).png",
    },
    {
      title: "Sales & Trading",
      description: "Sales and trading involve buying and selling financial securities, such as stocks, bonds, and derivatives, to generate profits for clients or financial institutions.",
      icon: "/images/images.png",
    },
  ];

  const keyPoints = [
    {
      title: 'Wealth Growth',
      description: 'Wealth growth is the increase in financial assets over time, achieved through investments, savings, and asset appreciation.',
      icon: '/images/png-clipart-passive-income-investment-service-business-company-business-idea-company-service.png'
    },
    {
      title: 'Income Generation',
      description: 'Income generation is the process of earning money through various activities, such as employment, investments, or business ventures.',
      icon: '/images/income.jpg',
    },
    {
      title: 'Tax Benefits',
      description: 'Tax benefits are financial advantages provided by the government to reduce an individuals or businesss tax liability.',
      icon: '/images/eee-eet-ete-tax-saving-investment-guide.jpg'
    }
  ];

  const [investors, setInvestors] = useState(investorsData);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search

  // Sorting function
  const handleSort = (option) => {
    let sortedInvestors = [...investors];
    if (option === "name") {
      sortedInvestors.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "location") {
      sortedInvestors.sort((a, b) => a.location.localeCompare(b.location));
    }
    setInvestors(sortedInvestors);
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    handleSort(selectedOption);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter investors based on search query
  const filteredInvestors = investors.filter((investor) =>
    investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    investor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  

  return (
    <>
      <div className="app4">
        <div className="top-banner4">
          <img
            src="/images/black-checkers-linkedin-cover-sgmi46higko9itnj.jpg"
            alt="Top Banner"
            className="banner-image4"
          />
          <div className="banner-text4">
            <h1>INVESTOR CONNECT</h1>
          </div>
        </div>

        <div className="main-container4">
          {/* Sidebar */}
          <div className="sidebar4">
            <div className="investor-count-card4">
              <h2>No. of Investors</h2>
              <h2>76+</h2>
            </div>
            <div className="invest-4">
            <Link to="/startup" style={{textDecoration:"none" , color:'white' }}> <h3 className='investment4'>For Your Investment</h3></Link>
            </div>
            <div className="investor-info4">
              <h2>Why do investors invest in startups?</h2>
              <p> Investors are drawn to startups for several reasons, primarily the potential for high returns and rapid growth. Startups often operate in emerging markets or introduce disruptive innovations, offering early investors a chance to profit significantly if the company scales or gets acquired. Additionally, many investors look to diversify their portfolios by backing startups, which can offer exposure to industries or technologies not available through traditional investments. Beyond financial motivations, some investors are passionate about entrepreneurship and want to support founders who are solving meaningful problems or driving societal change. Strategic investors may also invest to align with their own business goals or gain access to new technologies. Despite the high risk of failure, the potential for outsized rewards, combined with opportunities for networking, influence, and impact, makes startups an attractive investment choice for those willing to take the gamble.</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-container4">
            {/* Search and Sort Section */}
            <div className="search-bar4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange} // Bind to search input
              />
              <div className="sort-container4">
                <label>Sort By</label>
                <select className="sort4" value={sortOption} onChange={handleSortChange}>
                  <option value="">Select</option>
                  <option value="name">Name</option>
                  <option value="location">Location</option>
                </select>
              </div>
            </div>

            {/* Investor List */}
            <div className="investor-list34">
  {filteredInvestors.map((investor, index) => (
    <Link to="/Investorprofile" style={{ textDecoration: 'none' }} className="investor-card34" key={index}>
      <div className="investor-card-content34">
        <div className="avatar34">
          <img src="/images/avator.png" alt="avatar" />
        </div>
        <div className="investor-details34">
          <h3 className="kar1">{investor.name}</h3>
          <p className='kar2'>{investor.location}</p>
          <p className='kar3'>{investor.phone}</p>
          <p className='kar4'>{investor.email}</p>
          <hr></hr>
          <p className='kar5'>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</p>
          
        </div>
      </div>
    </Link>
  ))}
</div>


            {/* Load More Button */}
            <div className="load-more-container4">
              <button className="load-more-btn43">LOAD MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="key-points-container4">
        <h2 className="key-points-title4">Key Benefits of Investment</h2>
        <div className="key-points-grid4">
          {keyPoints.map((point, index) => (
            <div className="key-point4" key={index}>
              <div className="key-point-icon4">
                <img src={point.icon} alt={point.title} />
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container4">
        <h2 className="services-title4">Our Services</h2>
        <div className="services-grid4">
          {services.map((service, index) => (
            <div key={index} className="service-item4">
              <img src={service.icon} alt={service.title} className="service-icon4" />
              <h3>{service.title}</h3>
              <div className="service-divider4"></div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default InvestorConnect;
