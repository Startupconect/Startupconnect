import React, { useState } from 'react';
import './RegulationsTable.css'; // Import the enhanced CSS

const regulationsData = [
  {
    id: 1,
    date: 'August 2024',
    department: 'Central Board of Direct Taxes',
    description:
      'The Finance Act (No. 2) 2024 removed Section 56 (2) (viib) (angel tax provisions) from the Income Tax Act effective 1st April 2025. This removes the income tax on the issuance of shares above their fair market value, enabling startups to raise equity funding at valuations above their fair market value.',
    downloadLink: '#',
  },
  {
    id: 2,
    date: 'August 2024',
    department: 'Central Board of Direct Taxes',
    description:
      'The Finance Act (No. 2) 2024 harmonized the income tax rates on the long-term capital gains (LTCG) from investments in listed and unlisted shares. The amendment in Section 112 of the Income Tax Act lowered the LTCG tax on unlisted company shares from 20% to 12.5%. This is expected to encourage greater investment and startups.',
    downloadLink: '#',
  },
  {
    id: 3,
    date: 'February 2024',
    department: 'Central Board of Direct Taxes',
    description:
      "The Finance Act 2024 extended the tax holiday for startups by extending the eligible Startups' incorporation period by one more year up to 31st March 2025. Eligible startups incorporated until 31st March 2025 will be provided with a tax incentive for three consecutive years out of ten years from the date of incorporation.",
    downloadLink: '#',
  },
];

const RegulationsTable = () => {
  const [yearFilter, setYearFilter] = useState('All Years');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  // Filter data based on selected year and department
  const filteredData = regulationsData.filter((item) => {
    return (
      (yearFilter === 'All Years' || item.date.includes(yearFilter)) &&
      (departmentFilter === 'All' || item.department === departmentFilter)
    );
  });

  return (
    <div className="y002-table-container">
      <h2>STARTUP RELATED REGULATIONS AND NOTIFICATIONS</h2>
      <p>
        Regulatory reforms initiated since 2016 to enhance ease of doing
        business, ease of raising capital, and reduce compliance burden for the
        startup ecosystem.
      </p>

      {/* Table structure */}
      <table className="y002-regulations-table">
        <thead>
          <tr>
            <th>S No.</th>
            <th>
              Date of Amendment
              {/* Year filter dropdown */}
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="All Years">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </th>
            <th>
              Ministry/Department
              {/* Department filter dropdown */}
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Central Board of Direct Taxes">
                  Central Board of Direct Taxes
                </option>
              </select>
            </th>
            <th>Description</th>
            <th>Know More</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping over the filtered regulations data */}
          {filteredData.map((regulation) => (
            <tr key={regulation.id}>
              <td>{regulation.id}</td>
              <td>{regulation.date}</td>
              <td>{regulation.department}</td>
              <td>{regulation.description}</td>
              <td>
                <a
                  href={regulation.downloadLink}
                  className="y002-download-link"
                  download
                >
                  <button className="y002-download-btn">
                    <img
                      src="\images\r1.jpg"
                      alt="Download Logo"
                      className="y002-download-logo"
                    />
                    Download
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* If no data is found based on the filters */}
      {filteredData.length === 0 && (
        <p>No regulations found for the selected filters.</p>
      )}
    </div>
  );
};

export default RegulationsTable;
