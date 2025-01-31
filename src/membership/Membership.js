import React, { useState } from "react";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import './Membership.css';

const Membership = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [showModal, setShowModal] = useState(false);
  const [planSettings, setPlanSettings] = useState({
    name: "",
    type: "",
    price: "",
    contacts: { value: "0-100", unlimited: false },
    leads: { value: "0-100", unlimited: false },
    companies: { value: "0-100", unlimited: false },
    campaigns: { value: "0-100", unlimited: false },
    projects: { value: "0-100", unlimited: false },
    deals: { value: "0-100", unlimited: false },
    tasks: { value: "0-100", unlimited: false },
    pipelines: { value: "0-100", unlimited: false },
  });

  const handleToggleUnlimited = (field) => {
    setPlanSettings((prev) => ({
      ...prev,
      [field]: { ...prev[field], unlimited: !prev[field].unlimited },
    }));
  };

  return (
    <div className="plan">
      <div className="plan__header">
        <h1 className="plan__title">Membership Plans</h1>
        <div className="plan__controls">
          <div className="plan__search">
            <FaSearch className="plan__search-icon" />
            <input
              type="text"
              placeholder="Search Membership"
              className="plan__search-input"
            />
          </div>
          <button
            className="plan__add-btn"
            onClick={() => setShowModal(true)}
          >
            Add Membership
          </button>
        </div>
      </div>

      <div className="plan__billing">
        <span className={`plan__billing-text ${billingPeriod === "monthly" ? "plan__billing-text--active" : ""}`}>
          Monthly
        </span>
        <label className="plan__switch">
          <input
            type="checkbox"
            checked={billingPeriod === "annually"}
            onChange={() => setBillingPeriod(prev => prev === "monthly" ? "annually" : "monthly")}
          />
          <span className="plan__slider"></span>
        </label>
        <span className={`plan__billing-text ${billingPeriod === "annually" ? "plan__billing-text--active" : ""}`}>
          Annually
        </span>
      </div>

      <div className="plan__grid">
        {/* Basic Plan */}
        <div className="plan__card">
          <h2 className="plan__card-title">Basic</h2>
          <div className="plan__price">
            <span className="plan__amount">$50</span>
            <span className="plan__period">/ month</span>
          </div>
          <ul className="plan__features">
          <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>10 Contacts</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>10 Leads</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>20 Companies</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>50 Compaigns</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>100 Projects</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Deals</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Tasks</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Pipelines</span>
            </li>
            {/* Add other features similarly */}
          </ul>
          <button className="plan__choose-btn">Choose</button>
        </div>

        {/* Business Plan */}
        <div className="plan__card">
          <h2 className="plan__card-title">Business</h2>
          <div className="plan__price">
            <span className="plan__amount">$200</span>
            <span className="plan__period">/ month</span>
          </div>
          <ul className="plan__features">
            {/* Add features */}
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>20 Contacts</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>20 Leads</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>50 Companies</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Compaigns</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Projects</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Deals</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Tasks</span>
            </li>
            <li className="feature-item">
              <FaTimes className="icon" style={{ color: "#dc3545" }} />
              <span>Pipelines</span>
            </li>
          </ul>
          <button className="plan__choose-btn">Choose</button>
        </div>

        {/* Enterprise Plan */}
        <div className="plan__card">
          <h2 className="plan__card-title">Enterprise</h2>
          <div className="plan__price">
            <span className="plan__amount">$400</span>
            <span className="plan__period">/ month</span>
          </div>
          <ul className="plan__features">
            {/* Add features */}
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Contacts</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Leads</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Companies</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Compaigns</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Unlimited Projects</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Deals</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Tasks</span>
            </li>
            <li className="feature-item">
              <FaCheck className="icon" style={{ color: "#28a745" }} />
              <span>Pipelines</span>
            </li>
          </ul>
          <button className="plan__choose-btn">Choose</button>
        </div>
      </div>

      {showModal && (
        <div className="plan__modal-overlay">
          <div className="plan__modal">
            <div className="plan__modal-header">
              <h2 className="plan__modal-title">Add New Plan</h2>
              <button className="plan__modal-close" onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="plan__modal-body">
              <div className="plan__form-group">
                <label className="plan__label">
                  Plan Name <span className="plan__required">*</span>
                </label>
                <input
                  type="text"
                  className="plan__input"
                  value={planSettings.name}
                  onChange={(e) => setPlanSettings({ ...planSettings, name: e.target.value })}
                />
              </div>

              {/* Add other form fields */}
            </div>

            <div className="plan__modal-footer">
              <button className="plan__btn plan__btn--cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="plan__btn plan__btn--save">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;
