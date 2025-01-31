import React, { useState } from 'react';
import { FaCalendarAlt, FaEnvelope, FaCheckSquare, FaPhone } from 'react-icons/fa';
import AddActivitySidebar from '../Activity/AddActivitySidebar';


const Activities = ({ activities }) => {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const getActivityIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'meeting':
        return <FaCalendarAlt className="activity-icon meeting" />;
      case 'email':
        return <FaEnvelope className="activity-icon email" />;
      case 'task':
        return <FaCheckSquare className="activity-icon task" />;
      case 'calls':
        return <FaPhone className="activity-icon calls" />;
      default:
        return null;
    }
  };

  const handleAddActivity = (newActivity) => {
    // Handle adding new activity to the list
    console.log('New activity:', newActivity);
    setIsAddActivityOpen(false);
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Activities</h3>
        <div className="card-filters">
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
          </select>
          <button 
            className="add-activity-btn"
            onClick={() => {
              setSelectedActivity(null);
              setIsAddActivityOpen(true);
            }}
          >
            Add New Activity
          </button>
        </div>
      </div>

      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-content">
              <h4>{activity.title}</h4>
              <p className="due-date">Due Date: {activity.dueDate}</p>
              <div className="activity-meta">
                {getActivityIcon(activity.type)}
                <span className={`activity-type ${activity.type.toLowerCase()}`}>
                  {activity.type}
                </span>
                <div className="activity-assignee">
                  <img src={activity.assignee.avatar} alt="" />
                  <span>{activity.assignee.name}</span>
                </div>
              </div>
            </div>
            <div className="activity-status">
              <span className={`status ${activity.status.toLowerCase()}`}>
                {activity.status}
              </span>
              <button className="expand-btn">▼</button>
            </div>
          </div>
        ))}
      </div>

      <AddActivitySidebar 
        isOpen={isAddActivityOpen}
        onClose={() => setIsAddActivityOpen(false)}
        activity={selectedActivity}
        onSubmit={handleAddActivity}
      />
    </div>
  );
};

export default Activities;
