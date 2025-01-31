import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsStar,
  BsStarFill,
  BsFilter,
} from "react-icons/bs";
import { BiExport, BiColumns } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const initialCountries = [
  {
    id: 1,
    code: "AS",
    countryId: "684",
    name: "American Samoa (+684)",
    starred: true,
  },
  {
    id: 2,
    code: "AD",
    countryId: "376",
    name: "Andorra (+376)",
    starred: false,
  },
  {
    id: 3,
    code: "AO",
    countryId: "244",
    name: "Angola (+244)",
    starred: false,
  },
  {
    id: 4,
    code: "AI",
    countryId: "1264",
    name: "Anguilla (+1264)",
    starred: false,
  },
  {
    id: 5,
    code: "AQ",
    countryId: "672",
    name: "Antarctica (+672)",
    starred: false,
  },
  {
    id: 6,
    code: "AG",
    countryId: "1268",
    name: "Antigua & Barbuda (+1268)",
    starred: false,
  },
  {
    id: 7,
    code: "AR",
    countryId: "54",
    name: "Argentina (+54)",
    starred: false,
  },
  {
    id: 8,
    code: "AU",
    countryId: "61",
    name: "Australia (+61)",
    starred: false,
  },
  { id: 9, code: "AT", countryId: "43", name: "Austria (+43)", starred: false },
  {
    id: 10,
    code: "AZ",
    countryId: "994",
    name: "Azerbaijan (+994)",
    starred: false,
  },
];

const Location = () => {
  const [countries, setCountries] = useState(initialCountries);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCountry, setNewCountry] = useState({
    code: "",
    countryId: "",
    name: "",
  });

  const [columnSettings, setColumnSettings] = useState({
    code: true,
    countryId: true,
    name: true,
    action: true,
  });

  const handleStarClick = (id) => {
    setCountries(
      countries.map((country) =>
        country.id === id ? { ...country, starred: !country.starred } : country
      )
    );
  };

  const handleAddCountry = (e) => {
    e.preventDefault();
    const id = countries.length + 1;
    setCountries([...countries, { ...newCountry, id, starred: false }]);
    setShowAddModal(false);
    setNewCountry({ code: "", countryId: "", name: "" });
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.countryId.includes(searchTerm)
  );

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Countries</h5>
      </div>

      {/* Search and Actions Bar */}
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
                  placeholder="Search Countries"
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  onClick={() => setShowAddModal(true)}>
                  <AiOutlinePlus className="me-1" /> Add Country
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
                      <button className="dropdown-item">Country Code</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Country ID</button>
                    </li>
                  </ul>
                </div>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => setShowColumnModal(true)}>
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
                      <button className="dropdown-item">All</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Starred</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Unstarred</button>
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
              {columnSettings.code && <th>Country Code</th>}
              {columnSettings.countryId && <th>Country ID</th>}
              {columnSettings.name && <th>Country Name</th>}
              {columnSettings.action && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((country) => (
              <tr key={country.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleStarClick(country.id)}>
                    {country.starred ? (
                      <BsStarFill className="text-warning" />
                    ) : (
                      <BsStar />
                    )}
                  </button>
                </td>
                {columnSettings.code && <td>{country.code}</td>}
                {columnSettings.countryId && <td>{country.countryId}</td>}
                {columnSettings.name && <td>{country.name}</td>}
                {columnSettings.action && (
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
                )}
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

      {/* Add Country Modal */}
      <div
        className={`modal fade ${showAddModal ? "show" : ""}`}
        style={{ display: showAddModal ? "block" : "none" }}
        tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Country</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAddModal(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddCountry}>
                <div className="mb-3">
                  <label className="form-label">Country Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCountry.code}
                    onChange={(e) =>
                      setNewCountry({ ...newCountry, code: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Country ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCountry.countryId}
                    onChange={(e) =>
                      setNewCountry({
                        ...newCountry,
                        countryId: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Country Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCountry.name}
                    onChange={(e) =>
                      setNewCountry({ ...newCountry, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Columns Modal */}
      <div
        className={`modal fade ${showColumnModal ? "show" : ""}`}
        style={{ display: showColumnModal ? "block" : "none" }}
        tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Manage Columns</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowColumnModal(false)}></button>
            </div>
            <div className="modal-body">
              <p className="text-muted">
                Select the columns you want to display in the table
              </p>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={columnSettings.code}
                  onChange={(e) =>
                    setColumnSettings({
                      ...columnSettings,
                      code: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">Country Code</label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={columnSettings.countryId}
                  onChange={(e) =>
                    setColumnSettings({
                      ...columnSettings,
                      countryId: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">Country ID</label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={columnSettings.name}
                  onChange={(e) =>
                    setColumnSettings({
                      ...columnSettings,
                      name: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">Country Name</label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={columnSettings.action}
                  onChange={(e) =>
                    setColumnSettings({
                      ...columnSettings,
                      action: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">Action</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowColumnModal(false)}>
                Apply
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowColumnModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {(showAddModal || showColumnModal) && (
        <div className="modal-backdrop fade show"></div>
      )}
    </div>
  );
};

export default Location;
