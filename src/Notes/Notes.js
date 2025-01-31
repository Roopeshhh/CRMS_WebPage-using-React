// src/components/Notes.js
import React, { useState } from 'react';
import notesData from './notes.json';
import AddNoteModal from './AddNotes';
import './notes.css';

const Notes = () => {
  const [notes, setNotes] = useState(notesData.notes);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter(note => {
    const matchesCategory = currentCategory === 'all' || note.category === currentCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="notes-container p-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Notes</h2>
          <p className="text-muted">Manage your notes</p>
        </div>
        <div className="d-flex gap-3">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Sort by Date
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Newest First</button></li>
              <li><button className="dropdown-item">Oldest First</button></li>
            </ul>
          </div>
          <button 
            className="btn btn-add-note"
            onClick={() => setShowAddModal(true)}
          >
            + Add Note
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="notes-sidebar">
            <h5 className="mb-4">Notes</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setCurrentCategory('all')}
                >
                  📝 All Notes <span className="badge bg-danger">2</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentCategory === 'important' ? 'active' : ''}`}
                  onClick={() => setCurrentCategory('important')}
                >
                  ⭐ Important
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentCategory === 'trash' ? 'active' : ''}`}
                  onClick={() => setCurrentCategory('trash')}
                >
                  🗑️ Trash
                </button>
              </li>
            </ul>

            <h6 className="mt-4 mb-3">Tags</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link tag-item tag-pending">Pending</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link tag-item tag-onhold">Onhold</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link tag-item tag-inprogress">Inprogress</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link tag-item tag-done">Done</a>
              </li>
            </ul>

            <h6 className="mt-4 mb-3">Priority</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link priority-item priority-medium">Medium</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link priority-item priority-high">High</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link priority-item priority-low">Low</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9">
          <div className="notes-content">
            {/* Search and Filter Bar */}
            <div className="d-flex gap-3 mb-4">
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button">
                  Bulk Actions
                </button>
              </div>
              <button className="btn btn-secondary">Apply</button>
              <div className="flex-grow-1">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button">
                  Recent
                </button>
              </div>
            </div>

            {/* Notes Grid */}
            <div className="notes-grid">
              {filteredNotes.map(note => (
                <div key={note.id} className="note-card">
                  <div className="note-header">
                    <span className={`badge priority-${note.priority}`}>
                      {note.priority}
                    </span>
                    <button className="btn btn-link">⋮</button>
                  </div>
                  <h5>{note.title}</h5>
                  <p>{note.description}</p>
                  <div className="note-footer">
                    <div className="d-flex align-items-center gap-2">
                      <img 
                        src={note.assignee.avatar} 
                        alt={note.assignee.name}
                        className="rounded-circle"
                        width="32"
                      />
                      <span className={`badge tag-${note.tag}`}>{note.tag}</span>
                    </div>
                    <div className="note-actions">
                      <button className="btn btn-link">⭐</button>
                      <button className="btn btn-link">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AddNoteModal 
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </div>
  );
};

export default Notes;