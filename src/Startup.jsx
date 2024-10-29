import React, { useState } from 'react';
import './Startup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
// Data for the filters and startups
const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail'];
const sectors = ['Public', 'Private', 'Non-profit'];
const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
const cities = ['Los Angeles', 'Houston', 'New York City', 'Miami', 'Chicago'];

const startups = [
    {
        id: 1,
        logo: '/images/logo startup.jpg',
        name: 'NANO NEXUS LIMITED',
        stage: 'Ideation',
        rating: 4.5,
        location: 'Bangalore, Karaganda',
        category: 'IT Services',
    },
    {
        id: 2,
        logo: '/images/logo startup.jpg',
        name: 'Qumir Nano',
        stage: 'Early Traction',
        rating: 3,
        location: 'Bangalore, Karaganda',
        category: 'Real Estate',
    },
    {
        id: 3,
        logo: '/images/logo startup.jpg',
        name: 'Krilltech NanoAgtech',
        stage: 'Scaling',
        rating: 4,
        location: 'Bangalore, Karaganda',
        category: 'Security Solutions',
    },
    {
        id: 4,
        logo: '/images/logo startup.jpg',
        name: 'NanoPhoenix',
        stage: 'Validation',
        rating: 3.5,
        location: 'Bangalore, Karaganda',
        category: 'IT Services',
    },
    {
        id: 5,
        logo: '/images/logo startup.jpg',
        name: 'ADJ Nanotechnology',
        stage: 'Ideation',
        rating: 4.2,
        location: 'Bangalore, Karaganda',
        category: 'Textiles & Apparel',
    },
    {
        id: 6,
        logo: '/images/logo startup.jpg',
        name: 'NaDeNonix',
        stage: 'Early Traction',
        rating: 3.9,
        location: 'Bangalore, Karaganda',
        category: 'Food & Beverages',
    },
];



// Function to render the rating stars based on rating value
const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? <FontAwesomeIcon icon={faStarHalfAlt} className="half-star" /> : null;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="rating">
            {Array(fullStars)
                .fill()
                .map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="full-star" />
                ))}
            {halfStar}
            {Array(emptyStars)
                .fill()
                .map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStarEmpty} className="empty-star" />
                ))}
        </div>
    );
};

// Startup card to display the startup information
const StartupCard = ({ logo, name, stage, rating, location, category }) => (
    
    <Link to="/Startup1"  style={{ textDecoration: 'none' }}className="startup-card81">
    <div>
        <img src={logo} alt={`${name} logo`} className="startup-logo" />
        <div className="startup-details">
            <h3>{name}</h3>
            <p className="stage19">{stage}</p>
            <p className="location19">{location}</p>
            {renderRatingStars(rating)}
            <p className="category19">{category}</p>
        </div>
    </div>
</Link>
);

// Filter component for each filter category like Industry, Sector, etc.
const Filter = ({ title, items, isActive, onClick, searchQuery, onSearchChange }) => (
    <div className="filter">
        <div className="filter-header" onClick={onClick}>
            <span>{title}</span>
            <span>{isActive ? '-' : '+'}</span>
        </div>
        {isActive && (
            <div className="filter-content">
                <input
                    type="text"
                    placeholder={`Search ${title}`}
                    value={searchQuery}
                    onChange={onSearchChange}
                    className="filter-search"
                />
                {items
                    .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())) // Search filter
                    .map((item, index) => (
                        <div key={index} className="filter-item">
                            <input type="checkbox" id={`${title}-${item}`} name={item} />
                            <label htmlFor={`${title}-${item}`}>{item}</label>
                        </div>
                    ))}
            </div>
        )}
    </div>
);

// Filter container for handling the display of multiple filter categories
const FilterContainer = ({
    activeFilter,
    handleFilterClick,
    industries,
    sectors,
    states,
    cities,
    searchQueries,
    handleSearchChange,
}) => (
    <div className="filter-container">
        <h2>FILTERS</h2>
        <Filter
            title="Industry"
            items={industries}
            isActive={activeFilter === 'industry'}
            onClick={() => handleFilterClick('industry')}
            searchQuery={searchQueries.industry}
            onSearchChange={e => handleSearchChange('industry', e.target.value)}
        />
        <Filter
            title="Sector"
            items={sectors}
            isActive={activeFilter === 'sector'}
            onClick={() => handleFilterClick('sector')}
            searchQuery={searchQueries.sector}
            onSearchChange={e => handleSearchChange('sector', e.target.value)}
        />
        <Filter
            title="State"
            items={states}
            isActive={activeFilter === 'state'}
            onClick={() => handleFilterClick('state')}
            searchQuery={searchQueries.state}
            onSearchChange={e => handleSearchChange('state', e.target.value)}
        />
        <Filter
            title="City"
            items={cities}
            isActive={activeFilter === 'city'}
            onClick={() => handleFilterClick('city')}
            searchQuery={searchQueries.city}
            onSearchChange={e => handleSearchChange('city', e.target.value)}
        />
    </div>
);

// Main component for Startup page
const Startup = () => {
    const [activeFilter, setActiveFilter] = useState(null);
    const [searchQueries, setSearchQueries] = useState({
        industry: '',
        sector: '',
        state: '',
        city: '',
    });

    const handleFilterClick = filter => {
        setActiveFilter(activeFilter === filter ? null : filter);
    };

    const handleSearchChange = (filter, query) => {
        setSearchQueries(prevState => ({
            ...prevState,
            [filter]: query,
        }));
    };

    return (
        <div>
            {/* Top section: Search and Sort */}
            <div className="search-sort-container">
                <header>
                    <img src="\images\merchanthand.jpg" alt="merchantim"></img>
                    <h1>STARTUPS</h1>
                    <div className="search-sort">
                        <input type="text" placeholder="Search" className="search-bar2" />
                        <select className="sort-dropdown">
                            <option value="select">Sort By: Select</option>
                            <option value="rating">Rating</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </header>
            </div>
            {/* Bottom section: Filter and Startup List */}
            <div className="content-container">
                <FilterContainer
                    activeFilter={activeFilter}
                    handleFilterClick={handleFilterClick}
                    industries={industries}
                    sectors={sectors}
                    states={states}
                    cities={cities}
                    searchQueries={searchQueries}
                    handleSearchChange={handleSearchChange}
                />
                <div className="startup-page">
                    <div className="startup-list56">
                        {startups.map(startup => (
                            <StartupCard
                                key={startup.id}
                                logo={startup.logo}
                                name={startup.name}
                                stage={startup.stage}
                                location={startup.location}
                                rating={startup.rating}
                                category={startup.category}
                            />
                        ))}
                    </div>

                    <button className="load-more">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Startup;
