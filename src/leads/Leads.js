import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./LeadsDashboard.css"; // Custom styles for specific adjustments

const LeadsDashboard = () => {
  const [showAddLead, setShowAddLead] = useState(false);
  const [filter, setFilter] = useState("");
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Collins",
      company: "NovaWave LLC",
      phone: "+1 875455453",
      email: "robertson@example.com",
      status: "Closed",
      date: "25 Sep 2023, 01:22 pm",
      owner: "Hendry Milner",
    },
    {
      id: 2,
      name: "Konopelski",
      company: "BlueSky Industries",
      phone: "+1 989757485",
      email: "sharon@example.com",
      status: "Not Contacted",
      date: "29 Sep 2023, 04:15 pm",
      owner: "Guilory Berggren",
    },
    {
      id: 3,
      name: "Adams",
      company: "SilverHawk",
      phone: "+1 546555455",
      email: "vaughan12@example.com",
      status: "Closed",
      date: "04 Oct 2023, 10:18 am",
      owner: "Jami Carlile",
    },
    {
      id: 4,
      name: "Schumm",
      company: "SummitPeak",
      phone: "+1 454478787",
      email: "jessica13@example.com",
      status: "Contacted",
      date: "17 Oct 2023, 03:31 pm",
      owner: "Theresa Nelson",
    },
    // Add other rows as shown in the image
  ]);

  const filteredLeads = filter
    ? leads.filter((lead) => lead.status.toLowerCase() === filter.toLowerCase())
    : leads;

  const handleAddLeadSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      id: leads.length + 1,
      name: e.target.name.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      status: e.target.status.value,
      date: new Date().toLocaleString(),
      owner: e.target.owner.value,
    };
    setLeads([...leads, newLead]);
    setShowAddLead(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("add-lead-overlay")) {
      setShowAddLead(false);
    }
  };

  return (
    <div className="container-fluid leads-dashboard">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center py-3">
          <h1>
            Leads <span className="badge bg-secondary">{leads.length}</span>
          </h1>
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="Search Leads"
              className="form-control"
              style={{ width: "250px" }}
            />
            <select
              className="form-select"
              onChange={(e) => setFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Closed">Closed</option>
              <option value="Not Contacted">Not Contacted</option>
              <option value="Contacted">Contacted</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={() => setShowAddLead(true)}>
              Add Leads
            </button>
          </div>
        </div>

        <div className="col-12">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Lead Name</th>
                <th>Company Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Lead Status</th>
                <th>Created Date</th>
                <th>Lead Owner</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.company}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.email}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        lead.status === "Closed"
                          ? "success"
                          : lead.status === "Contacted"
                          ? "warning"
                          : "secondary"
                      }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td>{lead.date}</td>
                  <td>{lead.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddLead && (
        <div
          className="add-lead-overlay position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 1040, background: "rgba(0,0,0,0.5)" }}
          onClick={handleOutsideClick}>
          <div
            className="add-lead-form position-fixed top-0 end-0 bg-light shadow p-4"
            style={{
              width: "50%",
              height: "100vh",
              transition: "transform 0.3s ease-in-out",
              transform: "translateX(0)",
            }}>
            <h2>Add Lead</h2>
            <form onSubmit={handleAddLeadSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select name="status" className="form-select" required>
                  <option value="Closed">Closed</option>
                  <option value="Not Contacted">Not Contacted</option>
                  <option value="Contacted">Contacted</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Lead Owner</label>
                <input
                  type="text"
                  name="owner"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowAddLead(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsDashboard;
