import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsSearch,
  BsFilter,
  BsThreeDotsVertical,
  BsStar,
  BsStarFill,
  BsX,
} from "react-icons/bs";
import { BiExport, BiColumns } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const initialData = [
  { id: 1, name: "Home", slug: "home", status: "Active", starred: false },
  {
    id: 2,
    name: "About Us",
    slug: "about-us",
    status: "Inactive",
    starred: false,
  },
  { id: 3, name: "FAQ", slug: "faq", status: "Active", starred: true },
  {
    id: 4,
    name: "Categories",
    slug: "categories",
    status: "Active",
    starred: false,
  },
  {
    id: 5,
    name: "Terms & Conditions",
    slug: "terms-conditions",
    status: "Active",
    starred: false,
  },
  {
    id: 6,
    name: "Privacy Policy",
    slug: "privacy-policy",
    status: "Active",
    starred: false,
  },
  {
    id: 7,
    name: "Contact US",
    slug: "contact-us",
    status: "Active",
    starred: false,
  },
];

const PagesComponent = () => {
  const [data, setData] = useState(initialData);
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    search: "",
  });

  const handleFilter = (status) => {
    setFilters({ ...filters, status });
  };

  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const filteredData = data.filter((item) => {
    const matchesStatus = filters.status
      ? item.status === filters.status
      : true;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">
            Pages <span className="text-secondary ms-2">123</span>
          </h5>
        </div>

        {/* Search and Actions Card */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-12 col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <BsSearch className="text-secondary" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search Pages"
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown">
                      <BiExport className="me-1" /> Export
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item">CSV</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Excel</button>
                      </li>
                      <li>
                        <button className="dropdown-item">PDF</button>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => setShowSidebar(true)}>
                    <AiOutlinePlus className="me-1" /> Add New Page
                  </button>

                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown">
                      Sort
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item">A-Z</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Z-A</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Latest</button>
                      </li>
                      <li>
                        <button className="dropdown-item">Oldest</button>
                      </li>
                    </ul>
                  </div>

                  <button className="btn btn-outline-primary">
                    <BiColumns className="me-1" /> Manage Columns
                  </button>

                  <div className="dropdown">
                    <button
                      className="btn btn-outline-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown">
                      <BsFilter className="me-1" /> Filter
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleFilter("")}>
                          All
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleFilter("Active")}>
                          Active
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleFilter("Inactive")}>
                          Inactive
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th></th>
                <th>Pages</th>
                <th>Page Slug</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    {item.starred ? (
                      <BsStarFill className="text-warning" />
                    ) : (
                      <BsStar />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.slug}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Active" ? "bg-success" : "bg-danger"
                      } rounded-pill`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-link p-0"
                        data-bs-toggle="dropdown">
                        <BsThreeDotsVertical />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item">Edit</button>
                        </li>
                        <li>
                          <button className="dropdown-item text-danger">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
          <div className="mb-3 mb-md-0">
            Show
            <select
              className="form-select d-inline-block mx-2"
              style={{ width: "auto" }}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item">
                <button className="page-link">Prev</button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for Add New Page */}
      <div
        className={`offcanvas offcanvas-end ${showSidebar ? "show" : ""}`}
        tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Add New Page</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowSidebar(false)}></button>
        </div>
        <div className="offcanvas-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Page Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" required>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowSidebar(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PagesComponent;
