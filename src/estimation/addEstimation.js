import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './addEstimation.css';

const AddEstimationSidebar = ({ isOpen, onClose, estimation }) => {
  const [formData, setFormData] = useState({
    client: estimation?.client || '',
    billTo: estimation?.billTo || '',
    shipTo: estimation?.shipTo || '',
    project: estimation?.project || '',
    estimateBy: estimation?.estimateBy || '',
    amount: estimation?.amount || '',
    currency: estimation?.currency || '',
    estimateDate: estimation?.estimateDate || '',
    expiryDate: estimation?.expiryDate || '',
    status: estimation?.status || 'Draft',
    tags: estimation?.tags || [],
    description: estimation?.description || '',
    attachment: null
  });

  const [tags, setTags] = useState([]);

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('sidebar-overlay')) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={handleOverlayClick} />}
      <div className={`add-estimation-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>{estimation ? 'Edit Estimation' : 'Add New Estimation'}</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Client <span className="required">*</span></label>
              <div className="select-wrapper">
                <select 
                  value={formData.client}
                  onChange={(e) => setFormData({...formData, client: e.target.value})}
                >
                  <option value="">Choose</option>
                  {/* Add client options */}
                </select>
                <button type="button" className="add-new-btn">Add New</button>
              </div>
            </div>
          </div>

          <div className="form-row two-columns">
            <div className="form-group">
              <label>Bill To <span className="required">*</span></label>
              <input 
                type="text"
                value={formData.billTo}
                onChange={(e) => setFormData({...formData, billTo: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Ship To <span className="required">*</span></label>
              <input 
                type="text"
                value={formData.shipTo}
                onChange={(e) => setFormData({...formData, shipTo: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Project <span className="required">*</span></label>
              <div className="select-wrapper">
                <select 
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                >
                  <option value="">Choose</option>
                  {/* Add project options */}
                </select>
                <button type="button" className="add-new-btn">Add New</button>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Estimate By <span className="required">*</span></label>
              <select 
                value={formData.estimateBy}
                onChange={(e) => setFormData({...formData, estimateBy: e.target.value})}
              >
                <option value="">Choose</option>
                {/* Add estimator options */}
              </select>
            </div>
          </div>

          <div className="form-row two-columns">
            <div className="form-group">
              <label>Amount <span className="required">*</span></label>
              <input 
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Currency <span className="required">*</span></label>
              <select 
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
              >
                <option value="">Choose</option>
                {/* Add currency options */}
              </select>
            </div>
          </div>

          <div className="form-row two-columns">
            <div className="form-group">
              <label>Estimate Date <span className="required">*</span></label>
              <input 
                type="date"
                value={formData.estimateDate}
                onChange={(e) => setFormData({...formData, estimateDate: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Expiry Date <span className="required">*</span></label>
              <input 
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter description"
                rows={4}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="Draft">Draft</option>
                <option value="Sent">Sent</option>
                <option value="Accepted">Accepted</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tags <span className="required">*</span></label>
              <div className="tags-container">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                    <button onClick={() => handleTagRemove(tag)}>×</button>
                  </span>
                ))}
                <input 
                  type="text"
                  onKeyPress={handleTagAdd}
                  placeholder="Enter tags"
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Attachment <span className="required">*</span></label>
              <div className="file-upload">
                <button type="button" className="upload-btn">
                  <span>Upload File</span>
                </button>
                <input 
                  type="file"
                  onChange={(e) => setFormData({...formData, attachment: e.target.files[0]})}
                  hidden
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {estimation ? 'Update Estimation' : 'Save Estimation'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEstimationSidebar;
