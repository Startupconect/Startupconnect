import React, { useState} from 'react';
import './SearchComponent4334.css';
import axios from 'axios';

const SearchComponent4334 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All", "Startup Founder", "Traditional Business Owner", 
    "Individual Investor", "Mentor", "Enabler", 
    "Explorer", "Student", "Startup"
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(`Searching for ${category}`);
    performSearch();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const performSearch = async () => {
    try {
      const response = await axios.get('/api/search', {
        params: {
          category: selectedCategory,
          query: searchQuery
        }
      });
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-container4334">
      <div className="header4334">
        <h1>Who are you looking for?</h1>
      </div>
      <div className="category-bar4334">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button4334 ${selectedCategory === category ? "selected4334" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="filter-section4334">
        <span>Filter by:</span>
        <select className="filter-dropdown4334">
          <option>State</option>
          {/* Add more state options */}
        </select>
        <select className="filter-dropdown4334">
          <option>District</option>
          {/* Add more district options */}
        </select>
        <select className="filter-dropdown4334">
          <option>Sectors</option>
          {/* Add more sector options */}
        </select>
        <button className="more-filters-button4334" onClick={togglePopup}>+ More Filters</button>
      </div>

      <div className="search-bar4334">
        <input 
          type="text" 
          placeholder="Who are you looking for?" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button4334" onClick={performSearch}>Search 🔍</button>
      </div>

      {showPopup && (
        <div className="popup-box4334">
          <span className="close-icon4334" onClick={togglePopup}>✖</span>
          <h3>Area of Expertise</h3>
          <ul>
            <li><input type="checkbox" /> Business Strategy</li>
            <li><input type="checkbox" /> Human Resources</li>
            <li><input type="checkbox" /> Fund Raising</li>
            <li><input type="checkbox" /> Accounting, Financial & Treasury</li>
            <li><input type="checkbox" /> Legal & Compliances</li>
            <li><input type="checkbox" /> Auditing, Regulatory & Tax</li>
            <li><input type="checkbox" /> Pre-sales & Sales</li>
            <li><input type="checkbox" /> Marketing, Branding & Advertisement</li>
            <li><input type="checkbox" /> Partnerships & Alliances</li>
            <li><input type="checkbox" /> Design</li>
            <li><input type="checkbox" /> Supply Chain</li>
            <li><input type="checkbox" /> Any Other</li>
          </ul>
          <h3>Primary Area of Expertise - Technology</h3>
          <ul>
            <li><input type="checkbox" /> Advanced Materials</li>
            <li><input type="checkbox" /> Artificial Intelligence & Gen AI</li>
            <li><input type="checkbox" /> Big Data & HPC</li>
            <li><input type="checkbox" /> Bio-informatics & Genetics</li>
            <li><input type="checkbox" /> Blockchain</li>
            {/* Add more technology expertise options as needed */}
          </ul>
          <h3>Number of Startups Supported Till Date</h3>
          <ul>
            <li><input type="checkbox" /> &lt;10</li>
            <li><input type="checkbox" /> 50-100</li>
            <li><input type="checkbox" /> 100-200</li>
            <li><input type="checkbox" /> 200-350</li>
            <li><input type="checkbox" /> 350-500</li>
            <li><input type="checkbox" /> &gt;500</li>
          </ul>
        </div>
      )}

      <div className="results-container4334">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="result-item4334">
              <h3>{result.name}</h3>
              <p>{result.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent4334;
