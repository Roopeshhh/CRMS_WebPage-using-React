import React from 'react';
import './analytics.css';

const RecentContacts = ({ contacts }) => {
  return (
    <div className="recent-contacts">
      <div className="header">
        <h3>Recently Created Contacts</h3>
        <select defaultValue="Last 30 Days">
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <div className="contacts-table">
        <div className="table-header">
          <div>Contact</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Created at</div>
        </div>

        <div className="table-body">
          {contacts.map(contact => (
            <div key={contact.id} className="contact-row">
              <div className="contact-info">
                <img src={contact.avatar} alt="" />
                <div>
                  <div className="name">{contact.name}</div>
                  <div className="role">{contact.role}</div>
                </div>
              </div>
              <div className="email">{contact.email}</div>
              <div className="phone">{contact.phone}</div>
              <div className="created-at">{contact.createdAt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentContacts;
