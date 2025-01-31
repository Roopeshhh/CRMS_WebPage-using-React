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
  ProgressBar,
} from "react-bootstrap";
import {
  FiSearch,
  FiDownload,
  FiFilter,
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";
import { BsCalendar, BsPeople } from "react-icons/bs";

const CampaignsTable = () => {
  const [showAddCampaign, setShowAddCampaign] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const campaigns = [
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 2,
      name: "Merchandising",
      type: "Content Marketing",
      progress: {
        closed: 65.5,
        unsubscribe: 67.5,
        delivered: 32.0,
        conversation: 22.5,
      },
      members: 8,
      startDate: "03 Oct 2023",
      endDate: "16 Oct 2023",
      status: "Pending",
      created: "03 Oct 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 2,
      name: "Merchandising",
      type: "Content Marketing",
      progress: {
        closed: 65.5,
        unsubscribe: 67.5,
        delivered: 32.0,
        conversation: 22.5,
      },
      members: 8,
      startDate: "03 Oct 2023",
      endDate: "16 Oct 2023",
      status: "Pending",
      created: "03 Oct 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 2,
      name: "Merchandising",
      type: "Content Marketing",
      progress: {
        closed: 65.5,
        unsubscribe: 67.5,
        delivered: 32.0,
        conversation: 22.5,
      },
      members: 8,
      startDate: "03 Oct 2023",
      endDate: "16 Oct 2023",
      status: "Pending",
      created: "03 Oct 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 2,
      name: "Merchandising",
      type: "Content Marketing",
      progress: {
        closed: 65.5,
        unsubscribe: 67.5,
        delivered: 32.0,
        conversation: 22.5,
      },
      members: 8,
      startDate: "03 Oct 2023",
      endDate: "16 Oct 2023",
      status: "Pending",
      created: "03 Oct 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
    {
      id: 1,
      name: "Distribution",
      type: "Public Relations",
      progress: {
        closed: 20.5,
        unsubscribe: 30.5,
        delivered: 70.5,
        conversation: 35.0,
      },
      members: 5,
      startDate: "25 Sep 2023",
      endDate: "29 Sep 2023",
      status: "Success",
      created: "25 Sep 2023",
    },
  ];

  const handleAddCampaignClose = () => setShowAddCampaign(false);
  const handleAddCampaignShow = () => setShowAddCampaign(true);

  const handleFilterChange = (filter) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilters = activeFilters.every((filter) => {
      if (filter.startsWith("Status: ")) {
        return campaign.status === filter.replace("Status: ", "");
      } else if (filter.startsWith("Type: ")) {
        return campaign.type === filter.replace("Type: ", "");
      }
      return true;
    });
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Campaigns</h2>
        <Button variant="danger" onClick={handleAddCampaignShow}>
          <FiPlus className="me-2" /> Add New Campaign
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FiSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search Campaigns"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        <div className="d-flex gap-2">
          <DropdownButton id="sort-dropdown" title="Sort">
            <Dropdown.Item>Name A-Z</Dropdown.Item>
            <Dropdown.Item>Name Z-A</Dropdown.Item>
            <Dropdown.Item>Start Date</Dropdown.Item>
            <Dropdown.Item>Status</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="filter-dropdown" title="Filter">
            <Dropdown.Item
              onClick={() => handleFilterChange("Status: Success")}>
              Status: Success
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleFilterChange("Status: Pending")}>
              Status: Pending
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleFilterChange("Type: Public Relations")}>
              Type: Public Relations
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleFilterChange("Type: Content Marketing")}>
              Type: Content Marketing
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>Progress</th>
            <th>Members</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{campaign.name}</td>
              <td>{campaign.type}</td>
              <td>
                <ProgressBar>
                  <ProgressBar
                    variant="info"
                    now={campaign.progress.closed}
                    label={`${campaign.progress.closed}% Closed`}
                    key={1}
                  />
                  <ProgressBar
                    variant="danger"
                    now={campaign.progress.unsubscribe}
                    key={2}
                  />
                  <ProgressBar
                    variant="success"
                    now={campaign.progress.delivered}
                    key={3}
                  />
                  <ProgressBar
                    variant="warning"
                    now={campaign.progress.conversation}
                    key={4}
                  />
                </ProgressBar>
              </td>
              <td>
                <BsPeople className="me-1" /> {campaign.members}
              </td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>
                <span
                  className={`badge ${
                    campaign.status === "Success"
                      ? "bg-success"
                      : campaign.status === "Pending"
                      ? "bg-warning"
                      : "bg-danger"
                  }`}>
                  {campaign.status}
                </span>
              </td>
              <td>{campaign.created}</td>
              <td>
                <Button variant="link">
                  <FiMoreVertical />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Campaign Offcanvas */}
      <Offcanvas
        show={showAddCampaign}
        onHide={handleAddCampaignClose}
        placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Campaign</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control type="text" placeholder="Enter campaign name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Enter campaign type" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>Success</option>
                <option>Pending</option>
                <option>Bounced</option>
                <option>Running</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Members</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of members"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Campaign
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CampaignsTable;
