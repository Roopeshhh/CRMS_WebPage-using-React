import React, { useState } from 'react';
import AddCompanySidebar from './addCompanySidebar';

const RecentlyAddedCompanies = ({ companies }) => {
  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false);

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Recently Added Companies</h3>
        <div className="card-filters">
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
          </select>
          <button 
            className="add-btn"
            onClick={() => setIsAddCompanyOpen(true)}
          >
            Add Company
          </button>
        </div>
      </div>

      <div className="companies-table">
        <div className="table-header">
          <div>Company Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Created at</div>
        </div>

        <div className="table-body">
          {companies.map(company => (
            <div key={company.id} className="company-row">
              <div className="company-info">
                <img src={company.logo} alt="" />
                <span>{company.name}</span>
              </div>
              <div className="company-email">{company.email}</div>
              <div className="company-phone">{company.phone}</div>
              <div className="company-date">{company.createdAt}</div>
            </div>
          ))}
        </div>
      </div>

      <AddCompanySidebar 
        isOpen={isAddCompanyOpen}
        onClose={() => setIsAddCompanyOpen(false)}
      />
    </div>
  );
};

export default RecentlyAddedCompanies;
