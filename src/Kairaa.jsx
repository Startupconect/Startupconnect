import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPencilAlt, faIdBadge, faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import './Kairaa.css';
import { Link } from 'react-router-dom';

const Kairaa = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const arrayValues = ['Value 1', 'Value 2', 'Value 3'];
  const [activeCard, setActiveCard] = useState(null);

  // Card details
  const cards = [
    { id: 1, title: 'Industry Alliances', content: 'Bringing together stakeholders from various sectors to create opportunities for cross-collaboration.', additionalContent: 'More details about Industry Alliances.' },
    { id: 2, title: 'Dynamic Networking', content: 'Enabling effective networking with industry peers and experts across geographical regions.', additionalContent: 'More details about Dynamic Networking.' },
    { id: 3, title: 'Enhanced Visibility', content: 'Increase your business\'s visibility within the industry with strategic alliances.', additionalContent: 'More details about Enhanced Visibility.' },
    { id: 4, title: 'Personalized ID', content: 'Get your personalized identification number for easy recognition in industry events and platforms.', additionalContent: 'More details about Personalized ID.' },
  ];

  // Function to handle flip card click
  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Slideshow settings
  const slideshowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="x003-kairaa-container">
      {/* Community Section */}
      <div className="x003-community-section">
        <div className="x003-community-banner">
          <h2>KAIRAA Community</h2>
          <p>
            With the aim to foster collaboration and create impact, <b>KAIRAA</b> connects entrepreneurs, investors, mentors, policymakers, and other startup ecosystem players on a single platform.
          </p>
          <Link to="/aboutus" style={{ textDecoration: 'none' }} >
          <button className="x003-btn-know-more">Know more</button>
          </Link>
          <div className="x003-user-stats">
            <p>The No. of Users Registered</p>
            <button
              className="x003-btn-browse-network"
              onClick={() => alert(arrayValues.join(','))}
            >
              Browse Network
            </button>
          </div>
        </div>
      </div>

      {/* Flip Cards Section */}
      <div className="x003-flip-cards-section">
        <div className="x003-grid-container">
          {cards.map((card) => (
            <div key={card.id} className={`x003-flip-card ${activeCard === card.id ? 'x003-active' : ''}`} onClick={() => handleCardClick(card.id)}>
              <div className="x003-flip-card-inner">
                <div className="x003-flip-card-front">
                  <h2>{card.id.toString().padStart(2, '0')}</h2>
                  <p>{card.title}</p>
                </div>
                <div className="x003-flip-card-back">
                  <p>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Card Content */}
        {activeCard && (
          <div className="x003-active-card-content">
            <h2>{cards[activeCard - 1].title}</h2>
            <p>{cards[activeCard - 1].content}</p>
            <p>{cards[activeCard - 1].additionalContent}</p>
          </div>
        )}
      </div>

      {/* How It Works Section */}
      <section className="x003-how-it-works-section">
        <h2>How it Works</h2>
        <div className="x003-steps">
          <div className="x003-step">
            <div className="x003-icon-container">
              <FontAwesomeIcon icon={faUserPlus} className="x003-icon" />
            </div>
            <p>Sign-up</p>
            <span>Select profile type</span>
          </div>
          <div className="x003-step">
            <div className="x003-icon-container">
              <FontAwesomeIcon icon={faPencilAlt} className="x003-icon" />
            </div>
            <p>Add your details</p>
          </div>
          <div className="x003-step">
            <div className="x003-icon-container">
              <FontAwesomeIcon icon={faIdBadge} className="x003-icon" />
            </div>
            <p>Generate Bhaskar ID</p>
          </div>
          <div className="x003-step">
            <div className="x003-icon-container">
              <FontAwesomeIcon icon={faUserCircle} className="x003-icon" />
            </div>
            <p>Complete public profile and publish</p>
          </div>
          <div className="x003-step">
            <div className="x003-icon-container">
              <FontAwesomeIcon icon={faComments} className="x003-icon" />
            </div>
            <p>Start connecting!</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Stakeholders Section */}
      <section className="x003-ecosystem-stakeholders-section">
        <h2>Ecosystem Stakeholders</h2>
        <p>KAIRAA captures the entire ecosystem over one channel through the following persona options</p>
        
        {/* Tab Buttons */}
        <div className="x003-tab-buttons">
          <button
            className={activeTab === 'individual' ? 'x003-active' : ''}
            onClick={() => handleTabClick('individual')}
          >
            Individual
          </button>
          <button
            className={activeTab === 'organisation' ? 'x003-active' : ''}
            onClick={() => handleTabClick('organisation')}
          >
            Organisation
          </button>
        </div>

        {/* Content for Tabs */}
        <div className="x003-content-container">
          {activeTab === 'individual' && (
            <div className="x003-individual-content x003-flip-animation">
              <Slider {...slideshowSettings}>
                <div className="x003-card">
                  <img src="/images/s1.png" alt="Entrepreneurs & Founder" className="x003-flip-image" />
                  <h3>Entrepreneurs & Founders</h3>
                  <p>The driving force behind startups, founders are innovators and risk-takers who create and build businesses from the ground up. They identify market gaps, develop solutions, and inspire their teams to execute a shared vision.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s2.png" alt="Investors & Angel Investors" className="x003-flip-image" />
                  <h3>Investors & Angel Investors</h3>
                  <p>Investors provide the financial lifeline to startups, especially in the early stages. Angel investors, in particular, not only invest capital but often offer mentorship and industry connections, helping startups secure future funding and growth opportunities.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s3.png" alt="Mentors & Advisors" className="x003-flip-image" />
                  <h3>Mentors & Advisors</h3>
                  <p>These are industry veterans who provide guidance, share their experiences, and offer strategic advice to founders. They help startups navigate through challenges, whether it’s refining a business model, scaling operations, or preparing for market entry.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s4.png" alt="Developers & Engineers" className="x003-flip-image" />
                  <h3>Developers & Engineers</h3>
                  <p>Individuals responsible for building the technology that drives innovation in startups. From software developers to data scientists, they bring technical expertise that turns ideas into products and services, ensuring scalability and reliability.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s5.png" alt="Freelancers & Consultants" className="x003-flip-image" />
                  <h3>Freelancers & Consultants</h3>
                  <p>Flexibility is crucial for startups. Freelancers and consultants provide expert services in specialized areas such as marketing, legal, and design, allowing startups to tap into expertise without the need for full-time hires.</p>
                </div>
              </Slider>
            </div>
          )}
          {activeTab === 'organisation' && (
            <div className="x003-organisation-content x003-flip-animation">
              <Slider {...slideshowSettings}>
                <div className="x003-card">
                  <img src="/images/s11.png" alt="Corporates" className="x003-flip-image" />
                  <h3>Corporates</h3>
                  <p>Large corporations are looking to partner with startups for innovation, talent acquisition, and new market opportunities. They bring resources, experience, and market reach to the table, facilitating mutual growth.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s7.png" alt="Government & NGOs" className="x003-flip-image" />
                  <h3>Government & NGOs</h3>
                  <p>Government agencies and non-profit organizations support the startup ecosystem through grants, incubators, and regulatory frameworks. They play a crucial role in policy advocacy and funding, helping startups to thrive.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s8.png" alt="Incubators & Accelerators" className="x003-flip-image" />
                  <h3>Incubators & Accelerators</h3>
                  <p>These entities provide startups with resources, mentorship, and networking opportunities. They help startups refine their business models, connect with investors, and accelerate their growth trajectory.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s9.png" alt="Investors & Funds" className="x003-flip-image" />
                  <h3>Investors & Funds</h3>
                  <p>Venture capitalists, private equity firms, and angel networks are essential for startup financing. They provide the necessary capital and strategic guidance to help startups scale and succeed.</p>
                </div>
                <div className="x003-card">
                  <img src="/images/s10.png" alt="Academic Institutions" className="x003-flip-image" />
                  <h3>Academic Institutions</h3>
                  <p>Universities and research institutions contribute to the ecosystem by fostering innovation, conducting research, and providing startups with access to talent and resources.</p>
                </div>
              </Slider>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Kairaa;
