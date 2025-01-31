import React from 'react';

const RecentlyCreatedDeals = ({ deals }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Recently Created Deals</h3>
        <select className="filter-select">
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
        </select>
      </div>

      <div className="deals-table">
        <div className="table-header">
          <div>Deal Name</div>
          <div>Stage</div>
          <div>Deal Value</div>
          <div>Probability</div>
          <div>Status</div>
        </div>

        <div className="table-body">
          {deals.map(deal => (
            <div key={deal.id} className="deal-row">
              <div className="deal-name">{deal.name}</div>
              <div className="deal-stage">{deal.stage}</div>
              <div className="deal-value">${deal.value.toLocaleString()}</div>
              <div className="deal-probability">{deal.probability}%</div>
              <div className="deal-status">
                <span className={`status ${deal.status.toLowerCase()}`}>
                  {deal.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyCreatedDeals;
