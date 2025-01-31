import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Modal,
  Offcanvas,
  Table,
} from "react-bootstrap";
import {
  FiSearch,
  FiDownload,
  FiFilter,
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";
import { BsCalendar, BsStarFill } from "react-icons/bs";

const Deals = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "Ready",
      tags: ["Collab"],
      location: "Germany",
      rating: 4.2,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      phone: "+1 989757485",
      email: "Pending",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
  ];

  const handleAddContactClose = () => setShowAddContact(false);
  const handleAddContactShow = () => setShowAddContact(true);

  return (
    <div
      className="container py-4"
      >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Deals</h2>
        <Button variant="danger" onClick={handleAddContactShow}>
          <FiPlus className="me-2" /> Add Deals
        </Button>
      </div>
      {/* Search and Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FiSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search Contacts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        <div className="d-flex gap-2">
          <DropdownButton id="sort-dropdown" title="Sort">
            <Dropdown.Item>Name A-Z</Dropdown.Item>
            <Dropdown.Item>Name Z-A</Dropdown.Item>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Rating</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="filter-dropdown" title="Filter">
            <Dropdown.Item>Status: Active</Dropdown.Item>
            <Dropdown.Item>Status: Inactive</Dropdown.Item>
            <Dropdown.Item>Tags: Collab</Dropdown.Item>
            <Dropdown.Item>Tags: Promotion</Dropdown.Item>
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
      {/* Pending */}
      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Deals Name</th>
            <th>Stage</th>
            <th>Deal Value</th>
            <th>Tags</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                {contact.tags.map((tag, index) => (
                  <span key={index} className="badge bg-secondary me-1">
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
      {/* Add Contact Offcanvas */}
      <Offcanvas
        show={showAddContact}
        onHide={handleAddContactClose}
        placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Deals</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tags (comma-separated)"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Contact
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Deals;
