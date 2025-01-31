import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownButton,
  Button,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import React Icons
import faqData from "./faqs.json"; // Import the JSON file

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load data from the JSON file
    setFaqs(faqData);
  }, []);

  const toggleStar = (id) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, starred: !faq.starred } : faq
      )
    );
  };

  const deleteFAQ = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  const editFAQ = (id) => {
    alert(`Edit FAQ with ID: ${id}`);
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="container my-4" style={{ maxWidth: "1240px" }}>
      {" "}
      {/* Adjusted width */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>FAQ</h4>
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Form.Control
            type="text"
            placeholder="Search FAQ"
            className="me-2"
            style={{ flex: 1 }}
          />
          <Button variant="danger" className="ms-2" onClick={handleModalShow}>
            Add FAQ
          </Button>
          <DropdownButton id="export-dropdown" title="Export" className="ms-2">
            <Dropdown.Item>Export to PDF</Dropdown.Item>
            <Dropdown.Item>Export to Excel</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-secondary" className="ms-2">
            Manage Columns
          </Button>
        </div>
        <div className="d-flex justify-content-between">
          <DropdownButton id="filter-dropdown" title="Filter" className="me-2">
            <Dropdown.Item>Owner</Dropdown.Item>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Rating</Dropdown.Item>
            <Dropdown.Item>Created Date</Dropdown.Item>
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-between px-3">
              <Button variant="secondary">Reset</Button>
              <Button variant="primary">Filter</Button>
            </div>
          </DropdownButton>
          <DropdownButton id="sort-dropdown" title="Sort">
            <Dropdown.Item>Ascending</Dropdown.Item>
            <Dropdown.Item>Descending</Dropdown.Item>
            <Dropdown.Item>Recently Viewed</Dropdown.Item>
            <Dropdown.Item>Recently Added</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>
                  <Form.Check />
                </th>
                <th>Questions</th>
                <th>Category</th>
                <th>Answers</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq) => (
                <tr key={faq.id}>
                  <td>
                    <Form.Check />
                  </td>
                  <td>
                    {faq.starred ? (
                      <FaStar
                        onClick={() => toggleStar(faq.id)}
                        style={{ cursor: "pointer", color: "gold" }}
                      />
                    ) : (
                      <FaRegStar
                        onClick={() => toggleStar(faq.id)}
                        style={{ cursor: "pointer", color: "gray" }}
                      />
                    )}{" "}
                    {faq.question}
                  </td>
                  <td>{faq.category}</td>
                  <td>{faq.answer}</td>
                  <td>{faq.createdAt}</td>
                  <td>
                    <span className="badge bg-success">{faq.status}</span>
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="link" className="text-muted">
                        <i className="bi bi-three-dots"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => editFAQ(faq.id)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => deleteFAQ(faq.id)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Form.Select style={{ width: "100px" }}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Form.Select>
            <div>Pagination Placeholder</div>
          </div>
        </div>
      </div>
      {/* Add FAQ Modal */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        dialogClassName="modal-wide">
        <Modal.Header closeButton>
          <Modal.Title>Add FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter category" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter question" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter answer" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  type="radio"
                  id="status-active"
                />
                <Form.Check
                  inline
                  label="Inactive"
                  name="status"
                  type="radio"
                  id="status-inactive"
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleModalClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FAQSection;
