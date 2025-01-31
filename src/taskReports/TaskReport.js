import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { FaSort, FaFilter } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DownloadReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Download Report</h2>
        <div className="form-group">
          <label>File Type</label>
          <select>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type</label>
          <select>
            <option value="detailed">Detailed</option>
            <option value="summary">Summary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Year</label>
          <select>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="download-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

const TaskReport = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add these helper functions
  const getPriorityClass = (priority) => {
    const classes = {
      High: 'priority-high',
      Medium: 'priority-medium',
      Low: 'priority-low'
    };
    return classes[priority] || '';
  };

  const getStatusClass = (status) => {
    const classes = {
      Inprogress: 'status-inprogress',
      Completed: 'status-completed'
    };
    return classes[status] || '';
  };

  // Line Chart Configuration
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false
        },
        grid: {
          color: '#f0f0f0'
        },
        ticks: {
          callback: (value) => value + 'K'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [10, 38, 20, 48, 15, 32, 18, 40, 20, 50, 30, 15],
      borderColor: '#7352FF',
      backgroundColor: 'transparent',
      borderWidth: 2,
      stepped: true,
      tension: 0
    }]
  };

  // Doughnut Chart Configuration
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    cutout: '70%'
  };

  const doughnutData = {
    labels: ['Campaigns - 44', 'Google - 55', 'Referrals - 41', 'Paid Social - 17'],
    datasets: [{
      data: [44, 55, 41, 17],
      backgroundColor: ['#2196F3', '#7352FF', '#DC2626', '#FFA000'],
      borderWidth: 0
    }]
  };

  const taskList = [
    {
      id: 1,
      taskName: "Add a form to Update Task",
      assignedTo: {
        name: "Adrian Davies",
        avatar: "/path/to/avatar.jpg"
      },
      priority: "High",
      dueDate: "25 Sep 2023",
      type: "Calls",
      status: "Inprogress",
      createdDate: "25 Sep 2023, 01:22 pm"
    },
    // Add more tasks as needed
  ];

  return (
    <div className="task-reports">
      {/* Header with Download Report Button */}
      <div className="task-reports-header">
        <h1>Task Reports</h1>
        <button 
          className="download-report-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Download Report
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Tasks"
            className="search-input"
          />
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h2>Tasks by Year</h2>
            <span className="date-range">12/07/2024 - 12/13/2024</span>
          </div>
          <div className="chart-wrapper">
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <h2>Tasks by Types</h2>
            <span className="date-range">12/07/2024 - 12/13/2024</span>
          </div>
          <div className="chart-wrapper">
            <Doughnut options={doughnutOptions} data={doughnutData} />
          </div>
        </div>
      </div>

      {/* Task List Section */}
      <div className="task-list-container">
        <div className="task-list-header">
          <div className="header-left">
            <button className="sort-button">
              <FaSort /> Sort
            </button>
            <div className="date-range">12/07/2024 - 12/13/2024</div>
          </div>
          <div className="header-right">
            <button className="manage-columns">Manage Columns</button>
            <button className="filter-button">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <div className="task-table-container">
          <table className="task-table">
            <thead>
              <tr>
                <th>
                  <input 
                    type="checkbox" 
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(taskList.map(t => t.id));
                      } else {
                        setSelectedRows([]);
                      }
                    }}
                  />
                </th>
                <th></th>
                <th>Task Name</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task) => (
                <tr key={task.id}>
                  <td>
                    <input 
                      type="checkbox"
                      checked={selectedRows.includes(task.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRows([...selectedRows, task.id]);
                        } else {
                          setSelectedRows(selectedRows.filter(id => id !== task.id));
                        }
                      }}
                    />
                  </td>
                  <td>
                    <button className="star-button">⭐</button>
                  </td>
                  <td>{task.taskName}</td>
                  <td className="assigned-to">
                    <img src={task.assignedTo.avatar} alt="" className="avatar" />
                    <span>{task.assignedTo.name}</span>
                  </td>
                  <td>
                    <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>{task.dueDate}</td>
                  <td>{task.type}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td>{task.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Download Report Modal */}
      <DownloadReportModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TaskReport;
