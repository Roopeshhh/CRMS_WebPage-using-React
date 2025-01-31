import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
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
import { BsStarFill } from "react-icons/bs";

const ContactsTable = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ status: "", tags: "" });

  const contacts = [
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      phone: "1234567890",
      email: "robertson@example.com",
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
      email: "sharon@example.com",
      tags: ["Promotion"],
      location: "USA",
      rating: 5.0,
      status: "Inactive",
    },
    // Add more contacts as needed...
  ];

  // Filter contacts based on search query and selected filters
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = Object.values(contact)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesStatus = !filter.status || contact.status === filter.status;

    const matchesTags = !filter.tags || contact.tags.includes(filter.tags);

    return matchesSearch && matchesStatus && matchesTags;
  });

  const handleAddContactClose = () => setShowAddContact(false);
  const handleAddContactShow = () => setShowAddContact(true);

  return (
    <div
      className="container py-4"
      >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contacts</h2>
        <Button variant="danger" onClick={handleAddContactShow}>
          <FiPlus className="me-2" /> Add Contact
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search Input */}
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

        {/* Filters */}
        <div className="d-flex gap-2">
          <DropdownButton
            id="filter-status-dropdown"
            title={
              filter.status ? `Status: ${filter.status}` : "Filter by Status"
            }>
            <Dropdown.Item onClick={() => setFilter({ ...filter, status: "" })}>
              All Statuses
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFilter({ ...filter, status: "Active" })}>
              Active
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFilter({ ...filter, status: "Inactive" })}>
              Inactive
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="filter-tags-dropdown"
            title={filter.tags ? `Tags: ${filter.tags}` : "Filter by Tags"}>
            <Dropdown.Item onClick={() => setFilter({ ...filter, tags: "" })}>
              All Tags
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFilter({ ...filter, tags: "Collab" })}>
              Collab
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFilter({ ...filter, tags: "Promotion" })}>
              Promotion
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
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
          <Offcanvas.Title>Add Contact</Offcanvas.Title>
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

export default ContactsTable;
