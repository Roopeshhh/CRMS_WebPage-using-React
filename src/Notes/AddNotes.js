// src/components/AddNoteModal.js
import React, { useState } from 'react';
import './addnotes.css';

const AddNoteModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: '',
    tag: '',
    priority: '',
    dueDate: '',
    status: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Note</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Note Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter title"
              />
            </div>

            {/* Assignee */}
            <div className="mb-3">
              <label className="form-label">Assignee</label>
              <select 
                className="form-select"
                value={formData.assignee}
                onChange={(e) => setFormData({...formData, assignee: e.target.value})}
              >
                <option value="">Choose</option>
                <option value="user1">John Doe</option>
                <option value="user2">Jane Smith</option>
                <option value="user3">Mike Johnson</option>
              </select>
            </div>

            {/* Tag and Priority */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Tag</label>
                <select 
                  className="form-select"
                  value={formData.tag}
                  onChange={(e) => setFormData({...formData, tag: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="social">Social</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Priority</label>
                <select 
                  className="form-select"
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Due Date and Status */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Due Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="12/05/2024 - 12/11/2024"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select 
                  className="form-select"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="new">New</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Maximum 60 Characters"
                maxLength={60}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            {/* Footer Buttons */}
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;