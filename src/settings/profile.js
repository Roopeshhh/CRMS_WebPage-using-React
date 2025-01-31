import React from "react";
// import "./Settings.css"; // Custom CSS for animations
// import "./src/Project/Setting.js";

const Settings = () => {
  return (
    <div >
      <div className="settings-container">
        <div className="container mt-3">
          <h3 className="mb-4">Profile</h3>
          <div className="d-flex justify-content-between">
            {/* Tabs */}
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#setting">
                  General Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setting">
                  Website Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setting">
                  App Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setting">
                  System Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setting">
                  Financial Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#setting">
                  Other Settings
                </a>
              </li>
            </ul>

            {/* Top-right buttons */}
            <div>
              <button className="btn btn-light btn-hover mx-2">
                <i className="bi bi-arrow-clockwise"></i>
              </button>
              <button className="btn btn-light btn-hover">
                <i className="bi bi-gear settings-icon"></i>
              </button>
            </div>
          </div>

          <div className="row mt-4">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="list-group">
                <a
                  href="#setting"
                  className="list-group-item list-group-item-action active">
                  Profile
                </a>
                <a href="#setting" className="list-group-item list-group-item-action">
                  Security
                </a>
                <a href="#setting" className="list-group-item list-group-item-action">
                  Notifications
                </a>
                <a href="#setting" className="list-group-item list-group-item-action">
                  Connected Apps
                </a>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profile Settings</h5>
                  <p className="card-text">Employee Information</p>

                  {/* File Upload */}
                  <div className="mb-3">
                    <label className="form-label">Upload File</label>
                    <input type="file" className="form-control" />
                    <small className="text-muted">
                      JPG, GIF, or PNG. Max size 800K
                    </small>
                  </div>

                  <div className="row">
                    {/* Name Fields */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name *</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name *</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">User Name *</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  {/* Address Fields */}
                  <h6 className="mt-4">Address</h6>
                  <div className="mb-3">
                    <label className="form-label">Address *</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Country *</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">State / Province *</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">City *</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Postal Code *</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-start">
                    <button className="btn btn-light me-2">Cancel</button>
                    <button className="btn btn-warning">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;