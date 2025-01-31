import React, { useState } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';
import taskStats from './taskStats.json';

const TaskList = () => {
  const [selectedRows, setSelectedRows] = useState([]);

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
  );
};

export default TaskList;
