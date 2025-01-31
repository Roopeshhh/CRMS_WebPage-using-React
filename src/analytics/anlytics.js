import React, { useState } from 'react';
import './analytics.css';
import RecentContacts from './recentContact';
import DealsByStage from './dealsByStage';
import analyticsData from './analytics.json';
import Activities from './activities';
import WonDeals from './wonDeals';
import RecentDeals from './recentDeals';
import LostLeads from './lostLeads';
import LeadsStage from './leadsStage';
import RecentLeads from './recentLeads';
import RecentCompanies from './recentCompanies';
import RecentCampaign from './recentlyCreatedCampaign';
import AddCompanySidebar from './addCompanySidebar';
import AddPipelineSidebar from './addPipelineSidebar';
import AddActivitySidebar from '../Activity/AddActivitySidebar';

function Analytics() {
  const [activeSidebar, setActiveSidebar] = useState(null);

  const handleSidebarClose = () => {
    setActiveSidebar(null);
  };

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h1>Analytics</h1>
      </div>
      
      <div className="analytics-grid">
        {/* Row 1 */}
        <div className="grid-item">
          <RecentContacts contacts={analyticsData.recentContacts} />
        </div>
        <div className="grid-item">
          <DealsByStage dealsData={analyticsData.dealsByStage} />
        </div>
        
        {/* Row 2 */}
        <div className="grid-item">
          <LostLeads lostLeadsData={analyticsData.lostLeads} />
        </div>
        <div className="grid-item">
          <WonDeals wonDealsData={analyticsData.wonDeals} />
        </div>
        <div className="grid-item">
          <RecentCampaign 
            campaigns={analyticsData.recentCampaigns}
            onAddClick={() => setActiveSidebar('pipeline')}
          />
        </div>
        <div className="grid-item">
          <Activities 
            activities={analyticsData.activities}
            onAddClick={() => setActiveSidebar('activity')}
          />
        </div>

        {/* Row 3 */}
        {/* <div className="grid-item">
          <LostLeads lostLeadsData={analyticsData.lostLeads} />
        </div> */}
        <div className="grid-item">
          <LeadsStage leadsStageData={analyticsData.leadsStage} />
        </div>

        {/* Row 4 */}
        <div className="grid-item">
          <RecentCompanies 
            companies={analyticsData.recentCompanies}
            onAddClick={() => setActiveSidebar('company')}
          />
        </div>
        {/* <div className="grid-item">
          <RecentCampaign 
            campaigns={analyticsData.recentCampaigns}
            onAddClick={() => setActiveSidebar('pipeline')}
          />
        </div> */}
      </div>

      {/* Sidebars with fixed positioning */}
      <div className="sidebars-container" style={{ display: activeSidebar ? 'block' : 'none' }}>
        {activeSidebar === 'company' && (
          <AddCompanySidebar 
            isOpen={true}
            onClose={handleSidebarClose}
          />
        )}
        {activeSidebar === 'pipeline' && (
          <AddPipelineSidebar 
            isOpen={true}
            onClose={handleSidebarClose}
          />
        )}
        {activeSidebar === 'activity' && (
          <AddActivitySidebar 
            isOpen={true}
            onClose={handleSidebarClose}
          />
        )}
      </div>
    </div>
  );
}

export default Analytics;