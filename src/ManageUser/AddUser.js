import React, { useState } from 'react';

const UserForm = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(user || {
    name: '',
    role: '',
    phone: '',
    email: '',
    location: '',
    status: 'Active'
  });

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-form">
        <div className="sidebar-header">
          <h2>{user ? 'Edit User' : 'Add New User'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="form-content">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="sidebar-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={() => onSubmit(formData)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
