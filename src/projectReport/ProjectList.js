import React, { useState } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';
import projectStats from './projectStats.json';

const ProjectList = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const getPriorityClass = (priority) => {
    const classes = {
      High: 'priority-high',
      Medium: 'priority-medium',
      Low: 'priority-low'
    };
    return classes[priority] || '';
  };

  const getPipelineStageClass = (stage) => {
    const classes = {
      Plan: 'pipeline-plan',
      Develop: 'pipeline-develop',
      Completed: 'pipeline-completed',
      Design: 'pipeline-design'
    };
    return classes[stage] || '';
  };

  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <div className="header-left">
          <button className="sort-button">
            <FaSort /> Sort
          </button>
          <div className="date-range">12/07/2024 - 12/13/2024</div>
        </div>
        <div className="header-right">
          <button className="manage-columns">Manage Columns</button>
          <button className="filter-button">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      <div className="project-table-container">
        <table className="project-table">
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(projectStats.projectList.map(p => p.name));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                />
              </th>
              <th></th>
              <th>Name</th>
              <th>Client</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Pipeline Stage</th>
              <th>Budget Value</th>
              <th>Currently Spend</th>
            </tr>
          </thead>
          <tbody>
            {projectStats.projectList.map((project, index) => (
              <tr key={index}>
                <td>
                  <input 
                    type="checkbox"
                    checked={selectedRows.includes(project.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows([...selectedRows, project.name]);
                      } else {
                        setSelectedRows(selectedRows.filter(name => name !== project.name));
                      }
                    }}
                  />
                </td>
                <td>
                  <button className="star-button">⭐</button>
                </td>
                <td className="project-name">
                  <span className="project-logo">{project.logo}</span>
                  {project.name}
                </td>
                <td className="client-cell">
                  <div className="client-info">
                    <span className="client-logo">{project.client.logo}</span>
                    {project.client.name}
                  </div>
                </td>
                <td>
                  <span className={`priority-badge ${getPriorityClass(project.priority)}`}>
                    {project.priority}
                  </span>
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.type}</td>
                <td>
                  <div className={`pipeline-stage ${getPipelineStageClass(project.pipelineStage)}`}>
                    {project.pipelineStage}
                  </div>
                </td>
                <td>{formatCurrency(project.budgetValue)}</td>
                <td>{formatCurrency(project.currentlySpend)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
