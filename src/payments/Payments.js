import React, { useState } from "react";
import {
  Table,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
  Badge,
  Pagination,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentsTable = () => {
  const [payments] = useState([
    {
      id: "#1254049",
      client: "NovaWave LLC",
      amount: "$5000",
      dueDate: "28 Dec 2023",
      method: "Cash",
      transactionId: "TXNID1A2B3C4D5E6",
    },
    {
      id: "#1254050",
      client: "Redwood Inc",
      amount: "$4180",
      dueDate: "22 Dec 2023",
      method: "Cash",
      transactionId: "TXNID98765ASDF43",
    },
    {
      id: "#1254051",
      client: "Golden Gate Ltd",
      amount: "$3125",
      dueDate: "14 Dec 2023",
      method: "Credit",
      transactionId: "TXNIDQWERTY0987",
    },
    {
      id: "#1254052",
      client: "HarborView",
      amount: "$1230",
      dueDate: "07 Dec 2023",
      method: "Cash",
      transactionId: "TXNID54321XYZ789",
    },
    {
      id: "#1254053",
      client: "CoastalStar Co.",
      amount: "$3500",
      dueDate: "20 Nov 2023",
      method: "Credit",
      transactionId: "TXNIDABCDE12345",
    },
    {
      id: "#1254054",
      client: "RiverStone Venture",
      amount: "$2120",
      dueDate: "18 Nov 2023",
      method: "Cash",
      transactionId: "TXNID0123456789",
    },
    {
      id: "#1254049",
      client: "NovaWave LLC",
      amount: "$5000",
      dueDate: "28 Dec 2023",
      method: "Cash",
      transactionId: "TXNID1A2B3C4D5E6",
    },
    {
      id: "#1254050",
      client: "Redwood Inc",
      amount: "$4180",
      dueDate: "22 Dec 2023",
      method: "Cash",
      transactionId: "TXNID98765ASDF43",
    },
    {
      id: "#1254051",
      client: "Golden Gate Ltd",
      amount: "$3125",
      dueDate: "14 Dec 2023",
      method: "Credit",
      transactionId: "TXNIDQWERTY0987",
    },
    {
      id: "#1254052",
      client: "HarborView",
      amount: "$1230",
      dueDate: "07 Dec 2023",
      method: "Cash",
      transactionId: "TXNID54321XYZ789",
    },
    {
      id: "#1254053",
      client: "CoastalStar Co.",
      amount: "$3500",
      dueDate: "20 Nov 2023",
      method: "Credit",
      transactionId: "TXNIDABCDE12345",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter((payment) =>
    payment.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>
          Payments <Badge bg="secondary">123</Badge>
        </h4>
        <div>
          <Button variant="outline-primary" className="me-2">
            Export
          </Button>
          <Button variant="outline-primary">Manage Columns</Button>
        </div>
      </div>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Payments"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary">Sort</Button>
        <Button variant="outline-secondary">Filter</Button>
      </InputGroup>

      <Table bordered hover>
        <thead className="table-light">
          <tr>
            <th>Invoice ID</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.id}</td>
              <td>{payment.client}</td>
              <td>{payment.amount}</td>
              <td>{payment.dueDate}</td>
              <td>{payment.method}</td>
              <td>{payment.transactionId}</td>
              <td>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="light" size="sm">
                    &#x2022;&#x2022;&#x2022;
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View</Dropdown.Item>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <span>Show 10 entries</span>
        <Pagination>
          <Pagination.Prev disabled>Prev</Pagination.Prev>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
};

export default PaymentsTable;
