import React from 'react';

const RecentlyCreatedLeads = ({ leads }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Recently Created Leads</h3>
        <select className="filter-select">
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
        </select>
      </div>

      <div className="leads-table">
        <div className="table-header">
          <div>Lead Name</div>
          <div>Company Name</div>
          <div>Phone</div>
          <div>Lead Status</div>
        </div>

        <div className="table-body">
          {leads.map(lead => (
            <div key={lead.id} className="lead-row">
              <div className="lead-name">{lead.name}</div>
              <div className="company-info">
                <img src={lead.company.logo} alt="" />
                <div>
                  <div className="company-name">{lead.company.name}</div>
                  <div className="company-location">{lead.company.location}</div>
                </div>
              </div>
              <div className="lead-phone">{lead.phone}</div>
              <div className="lead-status">
                <span className={`status ${lead.status.toLowerCase()}`}>
                  {lead.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyCreatedLeads;
