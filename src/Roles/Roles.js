import React, { useState } from 'react';
import './Roles.css';

// Dummy data for roles
const rolesData = [
  { id: 1, name: 'Admin', createdAt: '25 Sep 2023, 12:12 pm' },
  { id: 2, name: 'Company Owner', createdAt: '27 Sep 2023, 07:40 am' },
  { id: 3, name: 'Deal Owner', createdAt: '29 Sep 2023, 08:20 am' },
  { id: 4, name: 'Project Manager', createdAt: '25 Sep 2023, 12:12 pm' },
  { id: 5, name: 'Client', createdAt: '15 Oct 2023, 06:18 pm' },
  { id: 6, name: 'Lead', createdAt: '29 Oct 2023, 03:10 pm' },
];

const Roles = () => {
  const [roles, setRoles] = useState(rolesData);

  const handleDelete = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div className="roles-container">
      <div className="header">
        <h2>Roles</h2>
        <button className="add-role-btn">Add New Roles</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Roles" />
      </div>
      <table className="roles-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Role Name</th>
            <th>Created at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td><input type="checkbox" /></td>
              <td>{role.name}</td>
              <td>{role.createdAt}</td>
              <td>
                <button onClick={() => handleDelete(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Show 10 entries</span>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Roles;
