import React, { useState } from 'react';

const AddCompanySidebar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    description: '',
    logo: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="sidebar-content" onClick={e => e.stopPropagation()}>
        <div className="sidebar-header">
          <h3>Add New Company</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name <span className="required">*</span></label>
            <input 
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input 
              type="email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone <span className="required">*</span></label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input 
              type="url" 
              value={formData.website}
              onChange={e => setFormData({...formData, website: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Industry <span className="required">*</span></label>
            <select 
              value={formData.industry}
              onChange={e => setFormData({...formData, industry: e.target.value})}
              required
            >
              <option value="">Select Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Company Logo</label>
            <input 
              type="file" 
              onChange={e => setFormData({...formData, logo: e.target.files[0]})}
              accept="image/*"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompanySidebar; 