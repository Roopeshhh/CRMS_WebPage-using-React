import React, { useContext } from "react";
import { BsSun, BsGear, BsBell, BsPersonCircle, BsFillGridFill } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../theme/themeContext";
import "../theme/theme.css";
import './theme.css';
import notificationsData from './notification.json';
import { TbHelpHexagon } from "react-icons/tb";
import { AiOutlineWechatWork } from "react-icons/ai";
import { FaUserPlus, FaChartLine, FaTasks, FaProjectDiagram, FaRegEnvelope } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { TbPipeline } from "react-icons/tb";
import { MdLinearScale } from "react-icons/md";


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (location.pathname.includes('/Logout')) {
      navigate('/Logout');
    } else {
      navigate('/logout');
    }
  };

  return (
    <nav
      className={`navbar px-3 py-2 border-bottom fixed-top ${
        theme === "dark" ? "navbar-custom-dark" : "navbar-custom-light"
      }`}
      style={{ zIndex: "999" }}
    >
      {/* Logo Section */}
      <a
        href="#index"
        className="navbar-brand d-flex align-items-center"
        id="logo"
      >
        <img
          src="https://crms.dreamstechnologies.com/html/template/assets/img/logo.svg"
          alt="Logo"
          className="ms-4"
          style={{ width: "120px", height: "40px" }}
        />
      </a>

      {/* Toggle Button for Small Screens */}
      <button
        className="navbar-toggler d-lg-none ms-auto me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "none" }}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Search Bar */}
      <form className="d-none d-lg-flex w-50 mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </form>

      {/* Icons Section */}
      <div className="d-flex align-items-center ms-auto">
        {/* Light/Dark Mode Toggle */}
        <button
          className="btn btn-outline-secondary me-2"
          onClick={toggleTheme}
        >
          <BsSun />
        </button>

        {/* grid */}
        <div className="dropdown me-2">
          <button 
            className="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsFillGridFill />
          </button>
          <div className="dropdown-menu dropdown-menu-end p-3" style={{ width: '600px', maxHeight: '400px' }}>
            <div className="grid-menu">
              <Link to="/contacts" className="grid-item">
                <div className="grid-icon contacts">
                  <FaUserPlus />
                </div>
                <div className="grid-content">
                  <h4>Contacts</h4>
                  <p>Add New Contact</p>
                </div>
              </Link>
              
              <Link to="/deals" className="grid-item">
                <div className="grid-icon deals">
                  <FaChartLine />
                </div>
                <div className="grid-content">
                  <h4>Deals</h4>
                  <p>Add New Deals</p>
                </div>
              </Link>

              <Link to="/pipeline" className="grid-item">
                <div className="grid-icon pipeline">
                  <MdLinearScale />
                </div>
                <div className="grid-content">
                  <h4>Pipeline</h4>
                  <p>Add New Pipeline</p>
                </div>
              </Link>

              <Link to="/activities" className="grid-item">
                <div className="grid-icon activities">
                  <FaTasks />
                </div>
                <div className="grid-content">
                  <h4>Activities</h4>
                  <p>Add New Activity</p>
                </div>
              </Link>

              <Link to="/analytics" className="grid-item">
                <div className="grid-icon analytics">
                  <BiAnalyse />
                </div>
                <div className="grid-content">
                  <h4>Analytics</h4>
                  <p>Shows All Information</p>
                </div>
              </Link>

              <Link to="/projects" className="grid-item">
                <div className="grid-icon projects">
                  <FaProjectDiagram />
                </div>
                <div className="grid-content">
                  <h4>Projects</h4>
                  <p>Add New Project</p>
                </div>
              </Link>

              <Link to="/company" className="grid-item">
                <div className="grid-icon company">
                  <BsBuilding />
                </div>
                <div className="grid-content">
                  <h4>Company</h4>
                  <p>Add New Company</p>
                </div>
              </Link>

              <Link to="/campaign" className="grid-item">
                <div className="grid-icon campaign">
                  <FaRegEnvelope />
                </div>
                <div className="grid-content">
                  <h4>Campaign</h4>
                  <p>Add New Campaign</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* diamond */}
        <Link to="/FAQ">
        <button className="btn btn-outline-secondary me-2">
        <TbHelpHexagon />
        </button>
        </Link>
        {/* Piechart */}
        <Link to="/PieChart">
        <button className="btn btn-outline-secondary me-2">
          <AiOutlinePieChart />
        </button>
        </Link>

        {/* Notifications */}
        {/* <div className="p-3 border-bottom">
            
          </div> */}

          {/* Notification List */}
          <div className="dropdown me-2">
          <Link to="/EmailDashboard">
          <button
          className="btn btn-outline-secondary position-relative me-2">
          <AiOutlineWechatWork />
          <span className="position-absolute top-0 start-50 translate-middle badge bg-danger rounded-circle" style={{zIndex: "999"}}>
            8
          </span>
        </button>
        </Link>
        <button
          className="btn btn-outline-secondary position-relative"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsBell />
          <span className="position-absolute top-0 start-50 translate-middle badge bg-danger rounded-circle" style={{zIndex: "999"}}>
            13
          </span>
        </button>
        <div className="dropdown-menu dropdown-menu-end p-0" style={{ width: '350px', maxHeight: '400px', overflow: 'auto' }}>
          {/* Notification Header */}
          <div className="p-2">
            {notificationsData.notifications.map((notification) => (
              <div key={notification.id} className="dropdown-item p-2 d-flex align-items-start">
                <img
                  src={notification.image}
                  alt=""
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1">
                  <div className="small">
                    <span className="fw-semibold">{notification.name}</span>
                    {' '}{notification.message}
                  </div>
                  <div className="text-muted small">{notification.time}</div>
                </div>
              </div>
            ))}
          </div>
        <div className="p-2 border-top d-flex justify-content-between">
            <Link to="/activity" className="btn btn-link btn-sm text-decoration-none">
              View all
            </Link>
            <button className="btn btn-link btn-sm text-decoration-none text-danger">
              Clear all
            </button>
          </div>
        </div>
      </div>

        {/* User Profile */}
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownProfile"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsPersonCircle size={24} />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownProfile"
          >
            <li className="d-flex px-2 align-items-center">
              <BsPersonCircle />
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li className="d-flex px-2 align-items-center">
              <BsFillGridFill />
              <Link className="dropdown-item" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button 
                className="dropdown-item" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;