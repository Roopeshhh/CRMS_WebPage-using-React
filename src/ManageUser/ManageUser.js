import React, { useState, useEffect, useRef } from 'react';
import './ManageUser.css';
import UserForm from './AddUser';
import DeleteModal from './DeleteUser';

// Dummy data
const userData = [
  {
    id: 1,
    name: "Darlee Robertson",
    role: "Facility Manager",
    phone: "1234567890",
    email: "robertson@example.com",
    location: "Germany",
    created: "25 Sep 2023, 12:12 pm",
    lastActivity: "2 mins ago",
    status: "Active",
    avatar: "/path-to-avatar1.jpg"
  },
  {
    id: 2,
    name: "Sharon Roy",
    role: "Installer",
    phone: "+1 989757485",
    email: "sharon@example.com",
    location: "USA",
    created: "27 Sep 2023, 07:40 am",
    lastActivity: "5 mins ago",
    status: "Inactive",
    avatar: "/path-to-avatar2.jpg"
  },
  {
    id: 1,
    name: "Darlee Robertson",
    role: "Facility Manager",
    phone: "1234567890",
    email: "robertson@example.com",
    location: "Germany",
    created: "25 Sep 2023, 12:12 pm",
    lastActivity: "2 mins ago",
    status: "Active",
    avatar: "/path-to-avatar1.jpg"
  },
  {
    id: 2,
    name: "Sharon Roy",
    role: "Installer",
    phone: "+1 989757485",
    email: "sharon@example.com",
    location: "USA",
    created: "27 Sep 2023, 07:40 am",
    lastActivity: "5 mins ago",
    status: "Inactive",
    avatar: "/path-to-avatar2.jpg"
  },
  // Add more dummy data...
];

const UserList = () => {
  const [users, setUsers] = useState(userData);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('12/08/2024 - 12/14/2024');
  const [actionMenu, setActionMenu] = useState({ visible: false, userId: null, position: { x: 0, y: 0 } });
  const menuRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActionMenu({ visible: false, userId: null, position: { x: 0, y: 0 } });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.addEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleActionClick = (e, userId) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setActionMenu({
      visible: true,
      userId,
      position: { 
        x: rect.left,
        y: rect.bottom
      }
    });
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowSidebar(true);
  };

  const handleEdit = (userId) => {
    const user = users.find(u => u.id === userId);
    setSelectedUser(user);
    setShowSidebar(true);
    setActionMenu({ visible: false, userId: null, position: { x: 0, y: 0 } });
  };

  const handleDelete = (userId) => {
    setSelectedUser(users.find(u => u.id === userId));
    setShowDeleteModal(true);
    setActionMenu({ visible: false, userId: null, position: { x: 0, y: 0 } });
  };

  const handleSubmitUser = (formData) => {
    if (selectedUser) {
      setUsers(users.map(u => u.id === selectedUser.id ? {...formData, id: u.id} : u));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setShowSidebar(false);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setShowDeleteModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="user-list-container">
      <div className="header">
        <div className="left-section">
          <h2>User <span className="user-count">123</span></h2>
        </div>
        <div className="right-section">
          <button className="export-btn">Export</button>
          <button className="add-user-btn" onClick={handleAddUser}>Add user</button>
        </div>
      </div>

      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-options">
          <input
            type="text"
            value={dateRange}
            className="date-range"
            readOnly
          />
          
          <button className="manage-columns-btn">Manage Columns</button>
        </div>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Created</th>
            <th>Last Activity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="user-info">
                  <img src={user.avatar} alt="" className="user-avatar" />
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-role">{user.role}</div>
                  </div>
                </div>
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{user.created}</td>
              <td>{user.lastActivity}</td>
              <td>
                <span className={`status-badge ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td className="action-column">
                <button 
                  className="action-btn"
                  onClick={(e) => handleActionClick(e, user.id)}
                >
                  ⋮
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {actionMenu.visible && (
        <div 
          ref={menuRef}
          className="action-menu"
          style={{
            position: 'fixed',
            top: actionMenu.position.y + 'px',
            left: actionMenu.position.x + 'px',
          }}
        >
          <button onClick={() => handleEdit(actionMenu.userId)}>
            <span className="action-icon">✏️</span> Edit
          </button>
          <button onClick={() => handleDelete(actionMenu.userId)}>
            <span className="action-icon">🗑️</span> Delete
          </button>
        </div>
      )}

      {showSidebar && (
        <UserForm
          user={selectedUser}
          onClose={() => setShowSidebar(false)}
          onSubmit={handleSubmitUser}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default UserList;
