import React, { useState, useEffect, useRef } from 'react';
import { FaEllipsisV, FaEdit, FaTrash, FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import AddInvoiceSidebar from './addInvoice';
import invoicesData from './invoice.json';
import './invoice.css';

const Invoices = () => {
  const [displayInvoices, setDisplayInvoices] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isAddInvoiceSidebarOpen, setIsAddInvoiceSidebarOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All Invoices');
  const [searchQuery, setSearchQuery] = useState('');
  const sidebarRef = useRef(null);

  useEffect(() => {
    setDisplayInvoices(invoicesData.invoices || []);
  }, []);

  // Filter invoices based on status and search
  useEffect(() => {
    let filtered = invoicesData.invoices || [];
    
    if (statusFilter !== 'All Invoices') {
      filtered = filtered.filter(invoice => invoice.status === statusFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(invoice => 
        invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.client.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setDisplayInvoices(filtered);
  }, [statusFilter, searchQuery]);

  const handleActionClick = (e, invoiceId) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === invoiceId ? null : invoiceId);
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setIsAddInvoiceSidebarOpen(true);
    setOpenMenuId(null);
  };

  const handleDelete = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDeleteModal(true);
    setOpenMenuId(null);
  };

  const handleAddNewInvoice = () => {
    setSelectedInvoice(null);
    setIsAddInvoiceSidebarOpen(true);
  };

  const renderProject = (project) => {
    if (typeof project === 'object' && project !== null) {
      return project.name || '';
    }
    return project;
  };

  return (
    <div className="invoices-section">
      {/* Header Section */}
      <div className="invoices-header">
        <h1>Invoices</h1>
        <button 
          className="add-invoice-btn"
          onClick={handleAddNewInvoice}
        >
          Add New Invoice
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="controls-section">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Invoices"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <select 
            className="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Invoices</option>
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Partially Paid</option>
            <option>Overdue</option>
          </select>

          <button className="sort-btn">
            <FaSort /> Sort
          </button>

          <input type="date" className="date-filter" />

          <button className="manage-columns-btn">
            Manage Columns
          </button>

          <button className="filter-btn">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="invoices-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input type="checkbox" />
              </th>
              <th>Invoice ID</th>
              <th>Client</th>
              <th>Project</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Paid Amount</th>
              <th>Balance Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayInvoices.map((invoice, index) => (
              <tr key={`${invoice.id}-${index}`}>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td className="invoice-id">#{invoice.id}</td>
                <td className="client-cell">
                  <div className="client-info">
                    <div className="client-logo" style={{ backgroundColor: invoice.client?.logoColor || '#EEF2FF' }}>
                      {typeof invoice.client === 'string' 
                        ? invoice.client.charAt(0) 
                        : invoice.client?.name?.charAt(0) || ''}
                    </div>
                    <span>
                      {typeof invoice.client === 'string' 
                        ? invoice.client 
                        : invoice.client?.name || ''}
                    </span>
                  </div>
                </td>
                <td>{renderProject(invoice.project)}</td>
                <td>{invoice.dueDate}</td>
                <td className="amount">₹{invoice.amount}</td>
                <td className="amount">₹{invoice.paidAmount}</td>
                <td className="amount">₹{invoice.balanceAmount}</td>
                <td>
                  <span className={`status-badge ${invoice.status?.toLowerCase().replace(' ', '-')}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="action-cell">
                  <button 
                    className="action-btn"
                    onClick={(e) => handleActionClick(e, invoice.id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenuId === invoice.id && (
                    <div className="action-menu">
                      <button onClick={() => handleEdit(invoice)}>
                        <FaEdit /> Edit
                      </button>
                      <button onClick={() => handleDelete(invoice)}>
                        <FaTrash /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AddInvoiceSidebar */}
      {isAddInvoiceSidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={() => setIsAddInvoiceSidebarOpen(false)} />
          <div className="add-invoice-sidebar" ref={sidebarRef}>
            <AddInvoiceSidebar 
              isOpen={isAddInvoiceSidebarOpen}
              onClose={() => {
                setIsAddInvoiceSidebarOpen(false);
                setSelectedInvoice(null);
              }}
              invoice={selectedInvoice}
              mode={selectedInvoice ? 'edit' : 'add'}
            />
          </div>
        </>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-backdrop">
          <div className="delete-modal">
            <h2>Delete Invoice</h2>
            <p>Are you sure you want to delete this invoice?</p>
            <div className="modal-buttons">
              <button 
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="delete-btn"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedInvoice(null);
                }}
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

export default Invoices;