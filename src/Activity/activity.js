import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import activitiesData from './activities.json';
import AddActivitySidebar from './AddActivitySidebar';
import './Activity.css';

const Activity = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [activityToDelete, setActivityToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const activities = activitiesData.activities;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentActivities = activities.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(activities.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = (activity) => {
        setSelectedActivity(activity);
        setIsSidebarOpen(true);
    };

    const handleDelete = (activity) => {
        setActivityToDelete(activity);
        setShowModal(true);
    };

    const confirmDelete = () => {
        console.log('Deleting activity:', activityToDelete);
        setShowModal(false);
        setActivityToDelete(null);
    };

    return (
        <div className="container-fluid p-4">
            <div className="row mb-4">
                <div className="col-md-6">
                    <h1 className="d-flex align-items-center gap-2">
                        Activities <span className="badge bg-secondary">123</span>
                    </h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end gap-3">
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Search Activities"
                    />
                    <button
                        className="btn btn-warning text-white"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        Add New Activity
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><input type="checkbox" className="form-check-input" /></th>
                            <th>Title</th>
                            <th>Activity Type</th>
                            <th>Due Date</th>
                            <th>Owner</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentActivities.map((activity) => (
                            <tr key={activity.id}>
                                <td><input type="checkbox" className="form-check-input" /></td>
                                <td>{activity.title}</td>
                                <td>
                                    <span className={`badge ${getBadgeClass(activity.type)}`}>
                                        {activity.type}
                                    </span>
                                </td>
                                <td>{activity.dueDate}</td>
                                <td>{activity.owner}</td>
                                <td>{activity.createdAt}</td>
                                <td>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-link"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            ⋮
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => handleEdit(activity)}
                                                >
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => handleDelete(activity)}
                                                >
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

            <nav className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => paginate(currentPage - 1)}
                        >
                            Previous
                        </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index + 1}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => paginate(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

            <AddActivitySidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                activity={selectedActivity}
            />

            <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {activityToDelete && (
                        <p>Are you sure you want to delete "{activityToDelete.title}"?</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={confirmDelete}
                    >
                        Delete Activity
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

const getBadgeClass = (type) => {
    switch (type.toLowerCase()) {
        case 'meeting':
            return 'bg-primary';
        case 'calls':
            return 'bg-success';
        case 'email':
            return 'bg-warning';
        case 'task':
            return 'bg-info';
        default:
            return 'bg-secondary';
    }
};

export default Activity;