import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Test Event 1",
      date: "2024-12-11",
      backgroundColor: "green",
    },
    {
      id: 2,
      title: "Test Event 2",
      date: "2024-12-13",
      backgroundColor: "cyan",
    },
    {
      id: 3,
      title: "Test Event 3",
      date: "2024-12-15",
      backgroundColor: "red",
    },
    {
      id: 4,
      title: "Event Name 4",
      date: "2024-12-13",
      backgroundColor: "purple",
    },
  ]);

  const [showEventModal, setShowEventModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [categories, setCategories] = useState([
    { name: "My Event One", color: "cyan" },
    { name: "My Event Two", color: "green" },
    { name: "My Event Three", color: "red" },
    { name: "My Event Four", color: "yellow" },
  ]);

  const handleEventSubmit = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setShowEventModal(false);
  };

  const handleCategorySubmit = (categoryName) => {
    setCategories([...categories, { name: categoryName, color: "blue" }]);
    setShowCategoryModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <div className="me-4" style={{ width: "20%" }}>
          <h5>Drag & Drop Event</h5>
          <ul className="list-unstyled">
            {categories.map((cat, idx) => (
              <li key={idx} style={{ color: cat.color, marginBottom: "8px" }}>
                <i className="fa fa-circle me-2"></i>
                {cat.name}
              </li>
            ))}
          </ul>
          <Button
            variant="danger"
            className="mb-2"
            onClick={() => setShowCategoryModal(true)}>
            + Add Category
          </Button>
        </div>

        <div style={{ width: "80%" }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={(info) => {
              setNewEvent({ ...newEvent, date: info.dateStr });
              setShowEventModal(true);
            }}
          />
        </div>
      </div>

      {/* Create Event Modal */}
      <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEventModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEventSubmit}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Category Modal */}
      <Modal
        show={showCategoryModal}
        onHide={() => setShowCategoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                onChange={(e) => handleCategorySubmit(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowCategoryModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategorySubmit}>
            Save Category
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
