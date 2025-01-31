import React, { useState } from 'react';

const AddPipelineSidebar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    dueDate: '',
    assignees: [],
    description: '',
    targets: {
      opened: '',
      closed: '',
      unsubscribe: '',
      delivered: '',
      conversation: ''
    }
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
          <h3>Add New Pipeline</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Pipeline Name <span className="required">*</span></label>
            <input 
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Type <span className="required">*</span></label>
            <select 
              value={formData.type}
              onChange={e => setFormData({...formData, type: e.target.value})}
              required
            >
              <option value="">Select Type</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="content">Content</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date <span className="required">*</span></label>
            <input 
              type="date" 
              value={formData.dueDate}
              onChange={e => setFormData({...formData, dueDate: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Assignees <span className="required">*</span></label>
            <select 
              multiple
              value={formData.assignees}
              onChange={e => setFormData({
                ...formData,
                assignees: Array.from(e.target.selectedOptions, option => option.value)
              })}
              required
            >
              <option value="">Select Assignees</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Targets</label>
            <div className="targets-group">
              <div className="target-group">
                <label>Opened</label>
                <input 
                  type="number" 
                  value={formData.targets.opened}
                  onChange={e => setFormData({
                    ...formData,
                    targets: {
                      ...formData.targets,
                      opened: e.target.value
                    }
                  })}
                />
              </div>

              <div className="target-group">
                <label>Closed</label>
                <input 
                  type="number" 
                  value={formData.targets.closed}
                  onChange={e => setFormData({
                    ...formData,
                    targets: {
                      ...formData.targets,
                      closed: e.target.value
                    }
                  })}
                />
              </div>

              <div className="target-group">
                <label>Unsubscribe</label>
                <input 
                  type="number" 
                  value={formData.targets.unsubscribe}
                  onChange={e => setFormData({
                    ...formData,
                    targets: {
                      ...formData.targets,
                      unsubscribe: e.target.value
                    }
                  })}
                />
              </div>

              <div className="target-group">
                <label>Delivered</label>
                <input 
                  type="number" 
                  value={formData.targets.delivered}
                  onChange={e => setFormData({
                    ...formData,
                    targets: {
                      ...formData.targets,
                      delivered: e.target.value
                    }
                  })}
                />
              </div>

              <div className="target-group">
                <label>Conversation</label>
                <input 
                  type="number" 
                  value={formData.targets.conversation}
                  onChange={e => setFormData({
                    ...formData,
                    targets: {
                      ...formData.targets,
                      conversation: e.target.value
                    }
                  })}
                />
              </div>
            </div>
          </div>

          <button type="submit">Add Pipeline</button>
        </form>
      </div>
    </div>
  );
};

export default AddPipelineSidebar; 