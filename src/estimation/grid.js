import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import AddEstimationSidebar from './addEstimation';

const GridView = ({ filteredEstimations }) => {
  const [actionModalOpen, setActionModalOpen] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [estimationToDelete, setEstimationToDelete] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedEstimation, setSelectedEstimation] = useState(null);

  const handleClickOutside = (e) => {
    if (!e.target.closest('.action-menu') && !e.target.closest('.card-menu-btn')) {
      setActionModalOpen(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleEdit = (estimation) => {
    setSelectedEstimation(estimation);
    setShowSidebar(true);
    setActionModalOpen(null);
  };

  const handleDelete = (estimation) => {
    setEstimationToDelete(estimation);
    setShowDeleteModal(true);
    setActionModalOpen(null);
  };

  const confirmDelete = () => {
    console.log('Deleting estimation:', estimationToDelete);
    setShowDeleteModal(false);
    setEstimationToDelete(null);
  };

  return (
    <>
      <div className="grid-container">
        {['Draft', 'Sent', 'Accepted', 'Declined'].map(status => (
          <div key={`status-${status}`} className="status-section">
            <div className="status-header">
              <h3>
                <span className={`status-dot ${status.toLowerCase()}`}></span>
                {status}
                <span className="count">
                  {filteredEstimations.filter(est => est.status === status).length}
                </span>
              </h3>
              <button className="add-status-btn">+</button>
            </div>
            <div className="status-cards">
              {filteredEstimations
                .filter(est => est.status === status)
                .map((estimation, index) => (
                  <div key={`${estimation.id}-${status}-${index}`} className="estimation-card">
                    <div className="card-header">
                      <div className="project-info">
                        <img src={estimation.project.icon} alt="" />
                        <div>
                          <div className="project-name">{estimation.project.name}</div>
                          <div className="project-type">{estimation.client.name}</div>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button 
                          className="card-menu-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActionModalOpen(actionModalOpen === estimation.id ? null : estimation.id);
                          }}
                        >
                          <FaEllipsisV />
                        </button>
                        {actionModalOpen === estimation.id && (
                          <div className="action-menu">
                            <button onClick={() => handleEdit(estimation)}>Edit</button>
                            <button onClick={() => handleDelete(estimation)}>Delete</button>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="card-description">
                      TruelySell provides a multiple on-demand service based bootstrap html template.
                    </p>
                    <div className="estimation-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <span className="label">Estimate ID</span>
                          <span className="value">{estimation.id}</span>
                        </div>
                        <div className="detail-item">
                          <span className="label">Amount</span>
                          <span className="value">{estimation.amount}</span>
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-item">
                          <span className="label">Created Date</span>
                          <span className="value">{estimation.date}</span>
                        </div>
                        <div className="detail-item">
                          <span className="label">Valid Till</span>
                          <span className="value">{estimation.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="estimator">
                        <img src={estimation.estimatedBy.avatar} alt="" />
                        <div>
                          <div className="estimator-name">{estimation.estimatedBy.name}</div>
                          <div className="estimator-role">{estimation.estimatedBy.role}</div>
                        </div>
                      </div>
                      <span className={`status-badge ${estimation.status.toLowerCase()}`}>
                        {estimation.status}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-backdrop show">
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setShowDeleteModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this estimation?</p>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Sidebar */}
      {showSidebar && (
        <AddEstimationSidebar
          isOpen={showSidebar}
          onClose={() => setShowSidebar(false)}
          estimation={selectedEstimation}
        />
      )}
    </>
  );
};

export default GridView;
