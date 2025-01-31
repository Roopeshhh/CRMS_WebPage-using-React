import React, { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import './AddInvoiceSidebar.css';

const AddInvoiceSidebar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    client: '',
    billTo: '',
    shipTo: '',
    project: '',
    amount: '',
    currency: '',
    invoiceDate: '',
    dueDate: '',
    paymentMethod: '',
    status: '',
    description: '',
    signatureName: '',
    signatureImage: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`add-invoice-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Add New Invoice</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Client Selection */}
          <div className="form-row">
            <div className="form-group">
              <label>Client <span className="required">*</span></label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Choose</option>
                  {/* Add client options */}
                </select>
              </div>
              <button type="button" className="add-new-btn">Add New</button>
            </div>
          </div>

          {/* Billing and Shipping */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Bill To <span className="required">*</span></label>
              <input type="text" placeholder="Enter billing address" />
            </div>
            <div className="form-group">
              <label>Ship To <span className="required">*</span></label>
              <input type="text" placeholder="Enter shipping address" />
            </div>
          </div>

          {/* Project Selection */}
          <div className="form-row">
            <div className="form-group">
              <label>Project <span className="required">*</span></label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Choose</option>
                  {/* Add project options */}
                </select>
              </div>
              <button type="button" className="add-new-btn">Add New</button>
            </div>
          </div>

          {/* Invoice Items Table */}
          <div className="form-row">
            <div className="invoice-items-table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" placeholder="23" /></td>
                    <td><input type="text" placeholder="1e1" /></td>
                    <td><input type="text" placeholder="23r" /></td>
                    <td>
                      <select>
                        <option value="%">%</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </td>
                    <td><input type="text" placeholder="23r" disabled /></td>
                    <td>
                      <button type="button" className="action-btn success">
                        <FaCheck />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Invoice Summary */}
            <div className="invoice-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row">
                <span>Discount 2%</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row">
                <span>Extra Discount 0%</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>

          {/* Amount and Currency */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Amount <span className="required">*</span></label>
              <input type="number" placeholder="Enter amount" />
            </div>
            <div className="form-group">
              <label>Currency <span className="required">*</span></label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Invoice Date <span className="required">*</span></label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Due Date <span className="required">*</span></label>
              <input type="date" />
            </div>
          </div>

          {/* Payment and Status */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label>Payment Method</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="partial">Partially Paid</option>
                </select>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="form-row">
            <div className="form-group">
              <label>Signature Name</label>
              <input type="text" placeholder="Enter signature name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Signature Image</label>
              <div className="signature-upload">
                <button type="button" className="upload-btn">Upload Signature</button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-row">
            <div className="form-group">
              <label>Description <span className="required">*</span></label>
              <div className="rich-text-editor">
                <div className="editor-toolbar">
                  <select className="font-size">
                    <option value="14">14</option>
                  </select>
                  <button type="button">B</button>
                  <button type="button">I</button>
                  <button type="button">U</button>
                  <button type="button">S</button>
                  <button type="button">A</button>
                  <button type="button">•</button>
                  <button type="button">≡</button>
                </div>
                <textarea placeholder="Enter description"></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-row">
            <button type="submit" className="submit-btn">Create Invoice</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddInvoiceSidebar;
