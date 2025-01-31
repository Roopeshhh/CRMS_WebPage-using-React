import React from 'react';

const DeleteModal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this user?</p>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="delete-btn" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
