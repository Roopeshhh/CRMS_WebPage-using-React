import React, { useState, useMemo, useEffect } from 'react';
import { FaEllipsisV, FaEdit, FaTrash, FaSort, FaTable, FaThLarge, FaFilter } from 'react-icons/fa';
import AddEstimationSidebar from './addEstimation';
import GridView from './grid';
import estimationsData from './estimation.json';
import './estimation.css';

const Estimation = () => {
  // Initial states
  const [estimations, setEstimations] = useState(estimationsData.estimations);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('table');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isAddEstimationOpen, setIsAddEstimationOpen] = useState(false);
  const [selectedEstimation, setSelectedEstimation] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [estimationToDelete, setEstimationToDelete] = useState(null);

  // Filtered estimations
  const filteredEstimations = useMemo(() => {
    return estimations.filter(est => 
      est.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      est.client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [estimations, searchTerm]);

  // Action handlers
  const handleActionClick = (action, estimation) => {
    switch (action) {
      case 'edit':
        setSelectedEstimation(estimation);
        setIsAddEstimationOpen(true);
        setOpenMenuId(null);
        break;
      case 'delete':
        setEstimationToDelete(estimation);
        setShowDeleteModal(true);
        setOpenMenuId(null);
        break;
      default:
        break;
    }
  };

  const handleDeleteConfirm = (id) => {
    setEstimations(prevEstimations => 
      prevEstimations.filter(est => est.id !== id)
    );
    setShowDeleteModal(false);
    setEstimationToDelete(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.action-column')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="estimations-container">
      <div className="header">
        <h2>
          Estimations <span className="count">123</span>
        </h2>
        <div className="actions">
          <input type="search" placeholder="Search estimations..." />
          <button className="export-btn">Export</button>
        </div>
      </div>

      <div className="controls">
        <div className="left-controls">
          <button className="sort-button">
            <FaSort /> Sort
          </button>
          <div className="date-range">
            <input type="date" value="2024-12-06" />
            <span>-</span>
            <input type="date" value="2024-12-12" />
          </div>
        </div>
        
        <div className="right-controls">
          <button 
            className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
          >
            <FaTable />
          </button>
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FaThLarge />
          </button>
          <button className="filter-btn">
            <FaFilter /> Filter
          </button>
          <button 
            className="add-estimation-btn"
            onClick={() => setIsAddEstimationOpen(true)}
          >
            Add Estimations
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <GridView 
          filteredEstimations={filteredEstimations}
          handleActionClick={handleActionClick}
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
        />
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Estimation ID</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Project</th>
                <th>Date</th>
                <th>Expiry Date</th>
                <th>Estimated By</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEstimations.map(estimation => (
                <tr key={estimation.id}>
                  <td><input type="checkbox" /></td>
                  <td>{estimation.id}</td>
                  <td className="client-cell">
                    <img src={estimation.client.logo} alt="" />
                    <span>{estimation.client.name}</span>
                  </td>
                  <td>{estimation.amount}</td>
                  <td className="project-cell">
                    <img src={estimation.project.icon} alt="" />
                    <span>{estimation.project.name}</span>
                  </td>
                  <td>{estimation.date}</td>
                  <td>{estimation.expiryDate}</td>
                  <td className="estimator-cell">
                    <img src={estimation.estimatedBy.avatar} alt="" />
                    <div>
                      <div>{estimation.estimatedBy.name}</div>
                      <div className="role">{estimation.estimatedBy.role}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`status ${estimation.status.toLowerCase()}`}>
                      {estimation.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-column">
                      <button 
                        className="action-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenMenuId(current => current === estimation.id ? null : estimation.id);
                        }}
                      >
                        <FaEllipsisV />
                      </button>
                      {openMenuId === estimation.id && (
                        <div className="action-menu">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleActionClick('edit', estimation);
                            }}
                          >
                            <FaEdit /> Edit
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleActionClick('delete', estimation);
                            }}
                          >
                            <FaTrash /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <AddEstimationSidebar 
        isOpen={isAddEstimationOpen}
        onClose={() => {
          setIsAddEstimationOpen(false);
          setSelectedEstimation(null);
        }}
        estimation={selectedEstimation}
      />

      {showDeleteModal && (
        <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Delete Estimation</h3>
            <p>Are you sure you want to delete estimation #{estimationToDelete?.id}? 
               This action cannot be undone.</p>
            <div className="modal-actions">
              <button 
                className="cancel-btn" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteConfirm(estimationToDelete.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estimation;
