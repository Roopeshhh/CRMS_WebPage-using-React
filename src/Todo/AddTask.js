// AddTaskModal.js
import React, { useState } from 'react';
import './addtask.css';

const AddTaskModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    tag: '',
    priority: '',
    dueDate: '',
    status: '',
    description: ''
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
          <h5 className="modal-title">Add Todo</h5>
          <button type="button" className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Todo Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div className="form-group mb-3">
              <label>Assignee</label>
              <select 
                className="form-select"
                value={formData.assignee}
                onChange={(e) => setFormData({...formData, assignee: e.target.value})}
              >
                <option value="">Choose</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
              </select>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Tag</label>
                <select 
                  className="form-select"
                  value={formData.tag}
                  onChange={(e) => setFormData({...formData, tag: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="pending">Pending</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Priority</label>
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

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Due Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="12/05/2024 - 12/11/2024"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                />
              </div>
              <div className="col-md-6">
                <label>Status</label>
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

            <div className="form-group mb-3">
              <label>Descriptions</label>
              <textarea
                className="form-control"
                placeholder="Maximum 60 Characters"
                maxLength={60}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;