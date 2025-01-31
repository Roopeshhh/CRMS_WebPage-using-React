import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../theme/theme.css";
// Updated imports for all icons
import {
  // Dashboard & Main Menu Icons
  MdDashboard,
  MdLeaderboard,
  MdOutlineWorkspaces,
  MdSettings,
  MdStorage,
  MdLanguage,
  MdSecurity,
  MdNotifications,
  MdApps,
  MdBusiness,
  MdLocationOn,
  MdHelp,
  MdBugReport,
} from "react-icons/md";

import {
  // Application Icons
  IoChatbubbleEllipsesOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoCheckboxOutline,
  IoDocumentTextOutline,
  IoFolderOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
  IoKeyOutline,
  IoGlobeOutline,
  IoCashOutline,
  IoServerOutline,
} from "react-icons/io5";

import {
  // CRM Icons
  FaUser,
  FaUsers,
  FaBuilding,
  FaHandshake,
  FaChartLine,
  FaTasks,
  FaProjectDiagram,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaCog,
  FaUsersCog,
  FaUserShield,
  FaTrash,
  FaIndustry,
  FaPhone,
  FaChevronDown,
  FaQuestionCircle,
  FaBook,
  FaHistory,
  FaLayerGroup,
} from "react-icons/fa";

import {
  // Additional Icons
  BiEnvelope,
  BiLogoProductHunt,
  BiFastForwardCircle,
  BiCog,
  BiLock,
  BiError,
  BiSupport,
} from "react-icons/bi";

import {
  // System & Settings Icons
  AiFillSetting,
  AiOutlineGlobal,
  AiOutlineMail,
  AiOutlinePrinter,
  AiOutlineFieldTime,
  AiOutlineCreditCard,
  AiOutlineBank,
  AiOutlinePercentage,
  AiOutlineCloud,
  AiOutlineStop,
} from "react-icons/ai";

import {
  // Authentication & Error Icons
  RiLoginCircleLine,
  RiRegisteredLine,
  RiLockPasswordLine,
  RiMailCheckLine,
  RiShieldKeyholeLine,
  RiLockLine,
  RiErrorWarningLine,
  RiPagesLine,
} from "react-icons/ri";

import {
  // Content & Support Icons
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineChatAlt,
  HiOutlineTicket,
} from "react-icons/hi";

import {
  // Membership & Additional Icons
  VscSourceControl,
  VscFeedback,
  VscQuestion,
} from "react-icons/vsc";

import {
  // Financial & System Icons
  SiGoogleanalytics,
} from "react-icons/si";

import {
  // Additional System Icons
  TbCookie,
  TbBrandGravatar,
} from "react-icons/tb";
import "./sidebar.css";
import { ThemeContext } from "../theme/themeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  const [dropdownOpen, setDropdownOpen] = useState({
    mainMenu: false,
    application: false,
    reports: false,
    generalSettings: false,
    websiteSettings: false,
    appSettings: false,
    systemSettings: false,
    financialSettings: false,
    storageSettings: false,
    authentication: false,
    errorPages: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className={`sidebar ${
        theme === "dark" ? "sidebar-custom-dark" : "sidebar-custom-light"
      }`}>
      {/* User Profile Section */}
      <div className="user-profile">
        <Link to="/profile" className="link" style={{ textDecoration: "none" }}>
          <img
            src="https://via.placeholder.com/50"
            alt="User Profile"
            className="profile-img"
          />
          <div className="user-information">
            <h5 className="text-dark">Roopesh</h5>
            <p>Web Developer</p>
          </div>
        </Link>
      </div>

      {/* Main Menu Section */}
      <ul className="menu">
        <li className="menu-title">MAIN MENU</li>
        <li
          className={`menu-item ${dropdownOpen.mainMenu ? "active" : ""}`}
          onClick={() => toggleDropdown("mainMenu")}>
          <MdDashboard className="menu-icon" />
          <Link to="/dashboard">Dashboard</Link>
          <FaChevronDown className="dropdown-icon" />
        </li>
        {dropdownOpen.mainMenu && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/dashboard">
                <MdDashboard className="submenu-icon" /> Deals Dashboard
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/dashboard">
                <MdLeaderboard className="submenu-icon" /> Leads Dashboard
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/dashboard">
                <MdOutlineWorkspaces className="submenu-icon" /> Project
                Dashboard
              </Link>
            </li>
          </ul>
        )}

        {/* Application Section */}
        <li
          className={`menu-item ${dropdownOpen.application ? "active" : ""}`}
          onClick={() => toggleDropdown("application")}>
          <AiFillSetting className="menu-icon" />
          <Link to="/dashboard">Application</Link>
          <FaChevronDown className="dropdown-icon" />
        </li>
        {dropdownOpen.application && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/CalendarComponent">
                <IoCalendarOutline className="submenu-icon" /> Calendar
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/EmailDashboard">
                <IoMailOutline className="submenu-icon" /> Email
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/Todo">
                <IoCheckboxOutline className="submenu-icon" /> To Do
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/Notes">
                <IoDocumentTextOutline className="submenu-icon" /> Notes
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/FileManager">
                <IoFolderOutline className="submenu-icon" /> File Manager
              </Link>
            </li>
          </ul>
        )}
        {/* CRM Section */}
        <ul className="menu">
          <li className="menu-title">CRM</li>
          <li className="menu-item">
            <FaUsers className="menu-icon" />
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="menu-item">
            <FaBuilding className="menu-icon" />
            <Link to="/Companies">Companies</Link>
          </li>
          <li className="menu-item">
            <FaHandshake className="menu-icon" />
            <Link to="/Deals">Deals</Link>
          </li>
          <li className="menu-item">
            <FaChartLine className="menu-icon" />
            <Link to="/Leads">Leads</Link>
          </li>
          <li className="menu-item">
            <FaProjectDiagram className="menu-icon" />
            <Link to="/PipelineTable">Pipeline</Link>
          </li>
          <li className="menu-item">
            <IoMailOutline className="menu-icon" />
            <Link to="/CampaignsTable">Campaign</Link>
          </li>
          <li className="menu-item">
            <BiLogoProductHunt className="menu-icon" />
            <Link to="/Project">Projects</Link>
          </li>
          <li className="menu-item">
            <FaTasks className="menu-icon" />
            <Link to="/Task">Tasks</Link>
          </li>
          <li className="menu-item">
            <HiOutlineDocumentText className="menu-icon" />
            <Link to="/Proposal">Proposals</Link>
          </li>
          <li className="menu-item">
            <FaFileInvoiceDollar className="menu-icon" />
            <Link to="/Contracts">Contracts</Link>
          </li>
          <li className="menu-item">
            <AiOutlinePercentage className="menu-icon" />
            <Link to="/estimation">Estimations</Link>
          </li>
          <li className="menu-item">
            <FaMoneyBillWave className="menu-icon" />
            <Link to="/invoice">Invoices</Link>
          </li>
          <li className="menu-item">
            <IoCashOutline className="menu-icon" />
            <Link to="/Payments">Payments</Link>
          </li>
          <li className="menu-item">
            <SiGoogleanalytics className="menu-icon" />
            <Link to="/anlytics">Analytics</Link>
          </li>
          <li className="menu-item">
            <FaHistory className="menu-icon" />
            <Link to="/activity">Activities</Link>
          </li>
        </ul>

        {/* Reports Section */}
        <ul className="menu">
          <li className="menu-title">Reports</li>
          <li
            className={`menu-item ${dropdownOpen.reports ? "active" : ""}`}
            onClick={() => toggleDropdown("reports")}>
            <MdLeaderboard className="menu-icon" />
            Reports
            <FaChevronDown className="dropdown-icon" />
          </li>
          {dropdownOpen.reports && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/PieChart">
                  <FaChartLine className="submenu-icon" /> Lead Reports
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/DealReport">
                  <FaHandshake className="submenu-icon" /> Deal Reports
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/ContactReport">
                  <FaUsers className="submenu-icon" /> Contact Reports
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/CompanyReport">
                  <FaBuilding className="submenu-icon" /> Company Reports
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/ProjectReport">
                  <FaProjectDiagram className="submenu-icon" /> Project Reports
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/TaskReports">
                  <FaTasks className="submenu-icon" /> Task Reports
                </Link>
              </li>
            </ul>
          )}
        </ul>

        {/* CRM Settings Section */}
        <ul className="menu">
          <li className="menu-title">CRM Settings</li>
          <li className="menu-item">
            <VscSourceControl className="menu-icon" />
            <Link to="/Sources">Sources</Link>
          </li>
          <li className="menu-item">
            <RiErrorWarningLine className="menu-icon" />
            <Link to="/LostReason">Lost Reason</Link>
          </li>
          <li className="menu-item">
            <FaLayerGroup className="menu-icon" />
            <Link to="/ContactStage">Contact Stage</Link>
          </li>
          <li className="menu-item">
            <FaIndustry className="menu-icon" />
            <Link to="/Industry">Industry</Link>
          </li>
          <li className="menu-item">
            <FaPhone className="menu-icon" />
            <Link to="/Calls">Calls</Link>
          </li>
        </ul>

        {/* User Management Section */}
        <ul className="menu">
          <li className="menu-title">User Management</li>
          <li className="menu-item">
            <FaUsersCog className="menu-icon" />
            <Link to="/ManageUser">Manage Users</Link>
          </li>
          <li className="menu-item">
            <FaUserShield className="menu-icon" />
            <Link to="/Roles">Roles and Permissions</Link>
          </li>
          <li className="menu-item">
            <FaTrash className="menu-icon" />
            <Link to="/DeleteAccount">Delete Request</Link>
          </li>
        </ul>

        {/* Membership Section */}
        <ul className="menu">
          <li className="menu-title">Membership</li>
          <li className="menu-item">
            <FaUsers className="menu-icon" />
            <Link to="/Membership">Memberships</Link>
          </li>
        </ul>

        {/* Content Section */}
        <ul className="menu">
          <li className="menu-title">Content</li>
          <li className="menu-item">
            <HiOutlineDocumentText className="menu-icon" />
            <Link to="/Pages">Pages</Link>
          </li>
          <li className="menu-item">
            <HiOutlineLocationMarker className="menu-icon" />
            <Link to="/Location">Locations</Link>
          </li>
          <li className="menu-item">
            <VscFeedback className="menu-icon" />
            <Link to="/Testimonials">Testimonials</Link>
          </li>
          <li className="menu-item">
            <VscQuestion className="menu-icon" />
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>

        {/* Support Section */}
        <ul className="menu">
          <li className="menu-title">Support</li>
          <li className="menu-item">
            <HiOutlineChatAlt className="menu-icon" />
            <Link to="/Support">Contact Messages</Link>
          </li>
          <li className="menu-item">
            <HiOutlineTicket className="menu-icon" />
            <Link to="/Tickets">Tickets</Link>
          </li>
        </ul>

        {/* Settings Section */}
        <ul className="menu">
          <li className="menu-title">Settings</li>
          <Link to="/profile">
            <li className="menu-item">
              <MdSettings className="menu-icon" />
              General Settings
            </li>
          </Link>

          <Link to="/profile">
            <li className="menu-item">
              <AiOutlineGlobal className="menu-icon" />
              Website Settings
            </li>
          </Link>

          {/* App Settings */}
          <Link to="/profile">
            <li className="menu-item">
              <AiFillSetting className="menu-icon" />
              App Settings
            </li>
          </Link>
          {/* System Settings */}
          <Link to="/profile">
            <li className="menu-item">
              <IoSettingsOutline className="menu-icon" />
              System Settings
            </li>
          </Link>

          {/* Financial Settings */}
          <Link to="/profile">
            <li className="menu-item">
              <IoCashOutline className="menu-icon" />
              Financial Settings
            </li>
          </Link>
          {/* Storage Settings */}
          <Link to="/profile">
            <li className="menu-item">
              <MdStorage className="menu-icon" />
              Storage Settings
            </li>
          </Link>

          {/* Pages Section */}
          <ul className="menu">
            <li className="menu-title">Pages</li>
            <li
              className={`menu-item ${
                dropdownOpen.authentication ? "active" : ""
              }`}
              onClick={() => toggleDropdown("authentication")}>
              <BiLock className="menu-icon" />
              Authentication
              <FaChevronDown className="dropdown-icon" />
            </li>
            {dropdownOpen.authentication && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/Logout">
                    <RiLoginCircleLine className="submenu-icon" /> Login
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/Register">
                    <RiRegisteredLine className="submenu-icon" /> Register
                  </Link>
                </li>
              </ul>
            )}

            <li
              className={`menu-item ${dropdownOpen.errorPages ? "active" : ""}`}
              onClick={() => toggleDropdown("errorPages")}>
              <BiError className="menu-icon" />
              Error Pages
              <FaChevronDown className="dropdown-icon" />
            </li>
            {dropdownOpen.errorPages && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/404">
                    <RiErrorWarningLine className="submenu-icon" /> 404 Error
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/500">
                    <RiErrorWarningLine className="submenu-icon" /> 500 Error
                  </Link>
                </li>
              </ul>
            )}

            <li className="menu-item">
              <RiPagesLine className="menu-icon" />
              <Link to="/blank-page">Blank Page</Link>
            </li>
            <li className="menu-item">
              <IoNotificationsOutline className="menu-icon" />
              <Link to="/coming-soon">Coming Soon</Link>
            </li>
            <li className="menu-item">
              <IoServerOutline className="menu-icon" />
              <Link to="/maintenance">Under Maintenance</Link>
            </li>
          </ul>

          {/* Help Section */}
          <ul className="menu">
            <li className="menu-title">Help</li>
            <li className="menu-item">
              <FaBook className="menu-icon" />
              <Link to="/documentation">Documentation</Link>
            </li>
            <li className="menu-item">
              <MdBugReport className="menu-icon" />
              <Link to="/changelog">Changelog v2.2.2</Link>
            </li>
            <li className="menu-item">
              <FaLayerGroup className="menu-icon" />
              <Link to="/multi-level">Multi Level</Link>
            </li>
          </ul>
        </ul>
      </ul>

      {/* Repeat the same pattern for other sections */}
    </div>
  );
};

export default Sidebar;
