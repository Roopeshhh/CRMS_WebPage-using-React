import React, { useState } from "react";
import { Dropdown, Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaInbox,
  FaStar,
  FaRegStar,
  FaFile,
  FaTags,
  FaTrash,
  FaPaperPlane,
  FaFileAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import emailData from "./emailData.json"; // Import dummy email data

const Inbox = () => {
  const [emails, setEmails] = useState(emailData);

  // Toggle star icon
  const toggleStar = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  return (
    <div className="container-fluid mt-3" style={{marginLeft: "20px"}}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 border-end" >
          <h5 className="mb-3">Inbox</h5>
          <Button variant="danger" className="w-100 mb-3">
            Compose
          </Button>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-center">
              <FaInbox className="me-2" /> Inbox{" "}
              <span className="ms-auto">(5)</span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaExclamationCircle className="me-2" /> Important
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaPaperPlane className="me-2" /> Sent Mail
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaFileAlt className="me-2" /> Drafts{" "}
              <span className="ms-auto">(13)</span>
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaTrash className="me-2" /> Trash
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          <div className="d-flex justify-content-between mb-3">
            {/* Dropdowns */}
            <div className="d-flex gap-2">
              {/* Dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>All</Dropdown.Item>
                  <Dropdown.Item>None</Dropdown.Item>
                  <Dropdown.Item>Read</Dropdown.Item>
                  <Dropdown.Item>Unread</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Dropdown 2 */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Reply</Dropdown.Item>
                  <Dropdown.Item>Forward</Dropdown.Item>
                  <Dropdown.Item>Archive</Dropdown.Item>
                  <Dropdown.Item>Mark as Read</Dropdown.Item>
                  <Dropdown.Item>Mark as Unread</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Dropdown 3 */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  <FaFile />{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Social</Dropdown.Item>
                  <Dropdown.Item>Forums</Dropdown.Item>
                  <Dropdown.Item>Updates</Dropdown.Item>
                  <Dropdown.Item>Spam</Dropdown.Item>
                  <Dropdown.Item>Trash</Dropdown.Item>
                  <Dropdown.Item>New</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Dropdown 4 */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  <FaTags />{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Work</Dropdown.Item>
                  <Dropdown.Item>Family</Dropdown.Item>
                  <Dropdown.Item>Primary</Dropdown.Item>
                  <Dropdown.Item>Promotions</Dropdown.Item>
                  <Dropdown.Item>Forums</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Search */}
            <Form.Control
              type="text"
              placeholder="Search Messages"
              size="sm"
              style={{ maxWidth: "250px" }}
            />
          </div>

          {/* Email Table */}
          <Table hover>
            <tbody>
              {emails.map((email) => (
                <tr key={email.id}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td
                    onClick={() => toggleStar(email.id)}
                    style={{ cursor: "pointer" }}>
                    {email.starred ? <FaStar color="gold" /> : <FaRegStar />}
                  </td>
                  <td>
                    <strong>{email.sender}</strong>
                  </td>
                  <td>{email.subject}</td>
                  <td className="text-end">{email.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
