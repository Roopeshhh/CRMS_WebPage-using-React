import React, { useState } from 'react';
import AddPipelineSidebar from './addPipelineSidebar';

const RecentlyCreatedCampaign = ({ campaigns }) => {
  const [isAddPipelineOpen, setIsAddPipelineOpen] = useState(false);

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Recently Created Campaign</h3>
        <div className="card-filters">
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
          </select>
          <button 
            className="add-pipeline-btn"
            onClick={() => setIsAddPipelineOpen(true)}
          >
            Add Pipeline
          </button>
        </div>
      </div>

      <div className="campaigns-list">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="campaign-item">
            <div className="campaign-header">
              <div className="campaign-title">
                <h4>{campaign.name}</h4>
                <span className="campaign-type">{campaign.type}</span>
              </div>
              <span className={`status ${campaign.status.toLowerCase()}`}>
                {campaign.status}
              </span>
            </div>

            <div className="campaign-stats">
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-label">Opened</span>
                  <span className="stat-value">{campaign.stats.opened}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Closed</span>
                  <span className="stat-value">{campaign.stats.closed}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Unsubscribe</span>
                  <span className="stat-value">{campaign.stats.unsubscribe}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Delivered</span>
                  <span className="stat-value">{campaign.stats.delivered}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Conversation</span>
                  <span className="stat-value">{campaign.stats.conversation}%</span>
                </div>
              </div>
            </div>

            <div className="campaign-footer">
              <div className="due-date">Due Date: {campaign.dueDate}</div>
              <div className="assignees">
                {campaign.assignees.map((assignee, index) => (
                  <img key={index} src={assignee.avatar} alt="" />
                ))}
                <span className="assignee-count">+{campaign.assignees.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddPipelineSidebar 
        isOpen={isAddPipelineOpen}
        onClose={() => setIsAddPipelineOpen(false)}
      />
    </div>
  );
};

export default RecentlyCreatedCampaign; 