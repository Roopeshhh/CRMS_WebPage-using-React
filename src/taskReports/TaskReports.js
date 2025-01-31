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
import taskStats from './taskStats.json';
import './TaskReport.css';

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

const AddTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Task</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" placeholder="Enter task name" />
          </div>
          <div className="form-group">
            <label>Assigned To</label>
            <select>
              <option value="">Select user</option>
              <option value="adrian">Adrian Davies</option>
            </select>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select>
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select>
              <option value="">Select type</option>
              <option value="calls">Calls</option>
              <option value="meeting">Meeting</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="add-btn">Add Task</button>
        </div>
      </div>
    </div>
  );
};

const TaskReports = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

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
          callback: (value) => value/1000 + 'K'
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
    labels: taskStats.yearlyData.labels,
    datasets: [{
      data: taskStats.yearlyData.data,
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
    labels: taskStats.typesData.labels.map((label, index) => 
      `${label} - ${taskStats.typesData.data[index]}`
    ),
    datasets: [{
      data: taskStats.typesData.data,
      backgroundColor: taskStats.typesData.colors,
      borderWidth: 0
    }]
  };

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

  return (
    <div className="task-reports">
      <div className="task-reports-header">
        <h1 className="task-reports-title">Task Reports</h1>
        <button 
          className="add-task-btn"
          onClick={() => setIsAddTaskModalOpen(true)}
        >
          Add Task
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

      {/* Charts Grid */}
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

      {/* Task List */}
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
                        setSelectedRows(taskStats.taskList.map(t => t.id));
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
              {taskStats.taskList.map((task) => (
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

      {/* Add Task Modal */}
      <AddTaskModal 
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
      />
    </div>
  );
};

export default TaskReports;
