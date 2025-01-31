import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./dashboardComponent/dashboard";
import Logout from "./logout/Logout";
import Register from "./logout/Register";
// import Login from './logout/Login';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThemeContext } from "./theme/themeContext";
import "./theme/theme.css";
import SidebarNew from "./components/rightSidebar";
import Activity from "./Activity/activity";
import Todo from "./Todo/Todo";
import Notes from "./Notes/Notes";
import Invoices from "./invoices/invoice";
import Estimation from "./estimation/estimation";
import Analytics from "./analytics/anlytics";
import Companies from "./companies/Companies";
import Deals from "./deals/Deals";
import PipelineTable from "./pipeline/PipelineTable";
import Payments from "./payments/Payments";
import CampaignsTable from "./campaign/CampaignsTable";
import ContactsTable from "./contacts/contacts";
import LeadsDashboard from "./leads/Leads";
import Project from "./projects/Project";
import Task from "./tasks/Task";
import Proposal from "./proposals/Proposal";
import Contracts from "./contracts/Contracts";
import PieChart from "./pie/PieChart";
import Inbox from "./email/EmailDashboard";
import FAQSection from "./faq/FAQ";
import Membership from "./membership/Membership";
import ProjectReport from "./projectReport/ProjectReport";
import TaskReports from "./taskReports/TaskReports";
import ContactReport from "./ContactReport/ContactReport";
import CompanyReport from "./CompanyReport/CompanyReport";
import DealReport from "./DealsReport/DealReport";
import UserList from "./ManageUser/ManageUser";
import Roles from "./Roles/Roles";
import DeleteAccountRequest from "./DeleteUser/DeleteAccount";
import Settings from "./settings/profile";
import Sources from "./Sources/Sources";
import LostReason from "./LostReason/LostReason";
import ContactStages from "./ContactStage/ContactStage";
import Industry from "./Industry/Industry";
import Calls from "./Calls/Calls";
import Projects from "./Support/Support";
import Tickets from "./Tickets/Tickets";
import Location from "./Content/Location";
import TestimonialsComponent from "./Content/Testimonials";
import PagesComponent from "./Content/Pages";
import CalendarComponent from "./calender/CalendarComponent";
import FileManager from "./filemanager/FileManager";

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return <div className="auth-container">{children}</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/Logout"
          element={
            <AuthLayout>
              <Logout />
            </AuthLayout>
          }
        />
        <Route
          path="/Register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        {/* <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } /> */}

        {/* Main Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/CalendarComponent"
          element={
            <MainLayout>
              <CalendarComponent />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/activity"
          element={
            <MainLayout>
              <Activity />
            </MainLayout>
          }
        />
        <Route
          path="/Todo"
          element={
            <MainLayout>
              <Todo />
            </MainLayout>
          }
        />
        <Route
          path="/Notes"
          element={
            <MainLayout>
              <Notes />
            </MainLayout>
          }
        />
        <Route
          path="/FileManager"
          element={
            <MainLayout>
              <FileManager />
            </MainLayout>
          }
        />
        <Route
          path="/invoice"
          element={
            <MainLayout>
              <Invoices />
            </MainLayout>
          }
        />
        <Route
          path="/estimation"
          element={
            <MainLayout>
              <Estimation />
            </MainLayout>
          }
        />
        <Route
          path="/anlytics"
          element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          }
        />
        <Route
          path="/Companies"
          element={
            <MainLayout>
              <Companies />
            </MainLayout>
          }
        />
        <Route
          path="/Deals"
          element={
            <MainLayout>
              <Deals />
            </MainLayout>
          }
        />
        <Route
          path="/PipelineTable"
          element={
            <MainLayout>
              <PipelineTable />
            </MainLayout>
          }
        />
        <Route
          path="/CampaignsTable"
          element={
            <MainLayout>
              <CampaignsTable />
            </MainLayout>
          }
        />
        <Route
          path="/Payments"
          element={
            <MainLayout>
              <Payments />
            </MainLayout>
          }
        />
        <Route
          path="/contacts"
          element={
            <MainLayout>
              <ContactsTable />
            </MainLayout>
          }
        />
        <Route
          path="/Leads"
          element={
            <MainLayout>
              <LeadsDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/Project"
          element={
            <MainLayout>
              <Project />
            </MainLayout>
          }
        />
        <Route
          path="/Task"
          element={
            <MainLayout>
              <Task />
            </MainLayout>
          }
        />
        <Route
          path="/Proposal"
          element={
            <MainLayout>
              <Proposal />
            </MainLayout>
          }
        />
        <Route
          path="/Contracts"
          element={
            <MainLayout>
              <Contracts />
            </MainLayout>
          }
        />
        <Route
          path="/Invoices"
          element={
            <MainLayout>
              <Invoices />
            </MainLayout>
          }
        />
        <Route
          path="/PieChart"
          element={
            <MainLayout>
              <PieChart />
            </MainLayout>
          }
        />
        <Route
          path="/EmailDashboard"
          element={
            <MainLayout>
              <Inbox />
            </MainLayout>
          }
        />
        <Route
          path="/FAQ"
          element={
            <MainLayout>
              <FAQSection />
            </MainLayout>
          }
        />
        <Route
          path="/Membership"
          element={
            <MainLayout>
              <Membership />
            </MainLayout>
          }
        />
        <Route
          path="/ProjectReport"
          element={
            <MainLayout>
              <ProjectReport />
            </MainLayout>
          }
        />
        <Route
          path="/TaskReports"
          element={
            <MainLayout>
              <TaskReports />
            </MainLayout>
          }
        />
        <Route
          path="/ContactReport"
          element={
            <MainLayout>
              <ContactReport />
            </MainLayout>
          }
        />
        <Route
          path="/CompanyReport"
          element={
            <MainLayout>
              <CompanyReport />
            </MainLayout>
          }
        />
        <Route
          path="/DealReport"
          element={
            <MainLayout>
              <DealReport />
            </MainLayout>
          }
        />
        <Route
          path="/ManageUser"
          element={
            <MainLayout>
              <UserList />
            </MainLayout>
          }
        />
        <Route
          path="/Roles"
          element={
            <MainLayout>
              <Roles />
            </MainLayout>
          }
        />
        <Route
          path="/DeleteAccount"
          element={
            <MainLayout>
              <DeleteAccountRequest />
            </MainLayout>
          }
        />
        <Route
          path="/Sources"
          element={
            <MainLayout>
              <Sources />
            </MainLayout>
          }
        />
        <Route
          path="/LostReason"
          element={
            <MainLayout>
              <LostReason />
            </MainLayout>
          }
        />
        <Route
          path="/ContactStage"
          element={
            <MainLayout>
              <ContactStages />
            </MainLayout>
          }
        />
        <Route
          path="/Industry"
          element={
            <MainLayout>
              <Industry />
            </MainLayout>
          }
        />
        <Route
          path="/Calls"
          element={
            <MainLayout>
              <Calls />
            </MainLayout>
          }
        />
        <Route
          path="/Support"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/Tickets"
          element={
            <MainLayout>
              <Tickets />
            </MainLayout>
          }
        />
        <Route
          path="/Pages"
          element={
            <MainLayout>
              <PagesComponent />
            </MainLayout>
          }
        />
        <Route
          path="/Location"
          element={
            <MainLayout>
              <Location />
            </MainLayout>
          }
        />
        <Route
          path="/Testimonials"
          element={
            <MainLayout>
              <TestimonialsComponent />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
