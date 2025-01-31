import React, { useState } from 'react';
import './AddActivitySidebar.css';

const AddActivitySidebar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    activityType: '',
    dueDate: '',
    time: '',
    reminder: '',
    owner: '',
    guests: [],
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <div className={`activity-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h5 className="m-0 fw-bold">Add New Activity</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>

        <div className="sidebar-body">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">
                Title <span className="text-danger">*</span>
              </label>
              <input 
                type="text" 
                className="form-control" 
                required
              />
            </div>

            {/* Activity Type */}
            <div className="mb-3">
              <label className="form-label">
                Activity Type <span className="text-danger">*</span>
              </label>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-secondary">
                  📞 Calls
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  ✉️ Email
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  📋 Task
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  👥 Meeting
                </button>
              </div>
            </div>

            {/* Date and Time */}
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">
                  Due Date <span className="text-danger">*</span>
                </label>
                <input 
                  type="date" 
                  className="form-control" 
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">
                  Time <span className="text-danger">*</span>
                </label>
                <input 
                  type="time" 
                  className="form-control" 
                  required
                />
              </div>
            </div>

            {/* Reminder */}
            <div className="mb-3">
              <label className="form-label">
                Reminder <span className="text-danger">*</span>
              </label>
              <select className="form-select">
                <option value="">Select reminder time</option>
                <option value="5">5 minutes before</option>
                <option value="15">15 minutes before</option>
                <option value="30">30 minutes before</option>
              </select>
            </div>

            {/* Owner */}
            <div className="mb-3">
              <label className="form-label">
                Owner <span className="text-danger">*</span>
              </label>
              <select className="form-select">
                <option value="">Select owner</option>
                <option value="1">Adrian Davies</option>
                <option value="2">Darlee Robertson</option>
              </select>
            </div>

            {/* Guests */}
            <div className="mb-3">
              <label className="form-label">
                Guests <span className="text-danger">*</span>
              </label>
              <select className="form-select">
                <option value="">Select guests</option>
                <option value="1">Darlee Robertson</option>
                <option value="2">Adrian Davies</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <div className="rich-text-toolbar mb-2">
                <button type="button" className="btn btn-outline-secondary btn-sm">B</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">I</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">U</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">A</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">≡</button>
              </div>
              <textarea 
                className="form-control" 
                rows="4"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddActivitySidebar;