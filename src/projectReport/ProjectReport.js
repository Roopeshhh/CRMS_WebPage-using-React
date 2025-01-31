import React from 'react';
import { ProjectsByYear, ProjectsByStage } from './ProjectChart';
import ProjectList from './ProjectList';
import './ProjectReport.css';

const ProjectReport = () => {
  return (
    <div className="project-report">
      <div className="project-report-header">
        <h1>Project Report</h1>
      </div>
      <div className="report-content">
        <div className="charts-grid">
          <div className="chart-card">
            <ProjectsByYear />
          </div>
          <div className="chart-card">
            <ProjectsByStage />
          </div>
        </div>
        <div className="list-section">
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default ProjectReport;
