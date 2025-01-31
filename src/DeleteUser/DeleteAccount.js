import React, { useState, useEffect } from 'react';
import './DeleteAccount.css';
import dummyData from './DeleteUser.json';

const DeleteAccountRequest = () => {
  const [requests, setRequests] = useState(dummyData);
  const [filter, setFilter] = useState('All');

  const filteredRequests = requests.filter(request => {
    if (filter === 'Confirmed') return request.status === 'Confirmed';
    if (filter === 'Pending') return request.status === 'Pending';
    return true; // Show all
  });

  return (
    <div className="delete-account-request-container">
      <h2>Delete Account Request</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search User" />
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <table className="requests-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Requisition Date</th>
            <th>Delete Request Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map(request => (
            <tr key={request.id}>
              <td>{request.userName} <br /><span>{request.role}</span></td>
              <td>{request.requisitionDate}</td>
              <td>{request.deleteRequestDate}</td>
              <td>
                <button className="confirm-btn">{request.status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteAccountRequest;
