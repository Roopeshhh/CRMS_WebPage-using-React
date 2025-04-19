import "./analytics.css";

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

  {/* Rest of the grid items... */}
</div>;
