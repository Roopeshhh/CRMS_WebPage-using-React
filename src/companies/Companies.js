import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Table,
  Offcanvas,
} from "react-bootstrap";
import { FiSearch, FiDownload, FiPlus, FiMoreVertical } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import './Companies.css';

const Companies = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Elena Smith",
      role: "Team Leader",
      phone: "+44 7788991122",
      email: "elena.smith@example.com",
      tags: ["Lead", "Collab"],
      location: "United Kingdom",
      rating: 4.8,
      status: "Active",
      company: "TechCorp",
      department: "Operations",
    },
    {
      id: 2,
      name: "Carlos Hernandez",
      role: "Technician",
      phone: "+52 5551234567",
      email: "carlos.h@example.com",
      tags: ["Technical"],
      location: "Mexico",
      rating: 4.6,
      status: "Active",
      company: "BuildIt",
      department: "Maintenance",
    },
    {
      id: 3,
      name: "Mei Chen",
      role: "Designer",
      phone: "+86 13800138000",
      email: "mei.chen@example.cn",
      tags: ["Creative"],
      location: "China",
      rating: 4.9,
      status: "Active",
      company: "DesignWorks",
      department: "Creative Team",
    },
    {
      id: 4,
      name: "Aarav Patel",
      role: "Sales Executive",
      phone: "+91 9876543210",
      email: "aarav.patel@example.in",
      tags: ["Sales", "Promotion"],
      location: "India",
      rating: 4.3,
      status: "Inactive",
      company: "SellPoint",
      department: "Sales",
    },
    {
      id: 5,
      name: "Sophia Brown",
      role: "Marketing Manager",
      phone: "+61 423456789",
      email: "sophia.brown@example.au",
      tags: ["Marketing", "Lead"],
      location: "Australia",
      rating: 4.7,
      status: "Active",
      company: "AdSphere",
      department: "Marketing",
    },
    {
      id: 6,
      name: "Ahmed Ali",
      role: "IT Support",
      phone: "+971 501234567",
      email: "ahmed.ali@example.ae",
      tags: ["Support"],
      location: "United Arab Emirates",
      rating: 4.5,
      status: "Active",
      company: "TechAssist",
      department: "IT Support",
    },
    {
      id: 7,
      name: "Emma Johnson",
      role: "Project Coordinator",
      phone: "+1 6178901234",
      email: "emma.johnson@example.com",
      tags: ["Management"],
      location: "USA",
      rating: 4.4,
      status: "Active",
      company: "ProjectHub",
      department: "Project Management",
    },
    {
      id: 8,
      name: "Liam Wilson",
      role: "Data Analyst",
      phone: "+27 721234567",
      email: "liam.wilson@example.co.za",
      tags: ["Analytics"],
      location: "South Africa",
      rating: 4.8,
      status: "Inactive",
      company: "DataInsights",
      department: "Analytics",
    },
    {
      id: 9,
      name: "Olga Ivanova",
      role: "Researcher",
      phone: "+7 9101234567",
      email: "olga.ivanova@example.ru",
      tags: ["Research"],
      location: "Russia",
      rating: 4.6,
      status: "Active",
      company: "LabCorp",
      department: "Research",
    },
    {
      id: 10,
      name: "Lucas Müller",
      role: "Software Engineer",
      phone: "+49 15112345678",
      email: "lucas.mueller@example.de",
      tags: ["Development"],
      location: "Germany",
      rating: 5.0,
      status: "Active",
      company: "CodeWorks",
      department: "Development",
    },
    // ... (additional contacts)
  ];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "" ||
      contact.status === filter ||
      contact.tags.includes(filter);

    return matchesSearch && matchesFilter;
  });

  const handleAddContactClose = () => setShowAddContact(false);
  const handleAddContactShow = () => setShowAddContact(true);

  return (
    <div className="companies-container">
      {/* Header */}
      <div className="companies-header">
        <h2 className="companies-title">Companies</h2>
        <Button variant="success" onClick={handleAddContactShow}>
          <FiPlus className="me-2" /> Add Company
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-container">
        <div className="search-container">
          <InputGroup>
            <InputGroup.Text>
              <FiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search Contacts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="filters-container">
          <DropdownButton id="filter-dropdown" title="Filter">
            <Dropdown.Item onClick={() => setFilter("")}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Active")}>
              Status: Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Inactive")}>
              Status: Inactive
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setFilter("Lead")}>
              Tag: Lead
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Promotion")}>
              Tag: Promotion
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="export-dropdown" title="Export">
            <Dropdown.Item>
              <FiDownload className="me-2" /> Export as CSV
            </Dropdown.Item>
            <Dropdown.Item>
              <FiDownload className="me-2" /> Export as Excel
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <Table responsive className="companies-table">
          <thead className="bg-primary text-white">
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Department</th>
              <th>Tags</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.company}</td>
                <td>{contact.department}</td>
                <td>
                  {contact.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`badge ${
                        index % 2 === 0 ? "bg-info" : "bg-secondary"
                      } me-1`}>
                      {tag}
                    </span>
                  ))}
                </td>
                <td>{contact.location}</td>
                <td>
                  <BsStarFill className="text-warning me-1" /> {contact.rating}
                </td>
                <td>
                  <span
                    className={`badge ${
                      contact.status === "Active" ? "bg-success" : "bg-danger"
                    }`}>
                    {contact.status}
                  </span>
                </td>
                <td>
                  <Button variant="link">
                    <FiMoreVertical />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Add Contact Offcanvas */}
      <Offcanvas
        show={showAddContact}
        onHide={handleAddContactClose}
        placement="end"
        className="add-company-drawer">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="drawer-form">
            <Form.Group className="form-group">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label className="form-label">Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label className="form-label">Company</Form.Label>
              <Form.Control type="text" placeholder="Enter company" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label className="form-label">Department</Form.Label>
              <Form.Control type="text" placeholder="Enter department" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Company
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Companies;
