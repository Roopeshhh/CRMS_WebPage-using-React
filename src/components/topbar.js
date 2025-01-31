import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar d-flex justify-content-between align-items-center">
      <h5>Deals Dashboard</h5>
      <div>
        <button className="btn btn-sm btn-outline-secondary">Theme</button>
      </div>
    </div>
  );
};

export default TopBar;
