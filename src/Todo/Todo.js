import React, { useState } from 'react';
import tasksData from './tasks.json';
import AddTaskModal from './AddTask';
import './Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState(tasksData.tasks);
  const [currentCategory, setCurrentCategory] = useState('inbox');
  const [sortBy, setSortBy] = useState('date');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredTasks = tasks.filter(task => task.category === currentCategory);

  const sortTasks = (tasks, sortBy) => {
    return [...tasks].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  };

  const sortedTasks = sortTasks(filteredTasks, sortBy);

  const groupTasksByDate = (tasks) => {
    const groups = {
      today: [],
      yesterday: [],
      older: []
    };

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    tasks.forEach(task => {
      const taskDate = new Date(task.date).toDateString();
      if (taskDate === today) {
        groups.today.push(task);
      } else if (taskDate === yesterday) {
        groups.yesterday.push(task);
      } else {
        groups.older.push(task);
      }
    });

    return groups;
  };

  const groupedTasks = groupTasksByDate(sortedTasks);

  return (
    <div className="todo-container">
      <div className="row">
      <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Todo</h2>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-secondary">
                ✓ Mark all as Complete
              </button>
              <div className="dropdown">
                <button 
                  className="btn btn-outline-secondary dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  Sort by Date
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button 
                      className="dropdown-item"
                      onClick={() => setSortBy('date')}
                    >
                      Date
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item"
                      onClick={() => setSortBy('priority')}
                    >
                      Priority
                    </button>
                  </li>
                </ul>
              </div>
              <button 
    className="btn btn-add-task"
    onClick={() => setShowAddModal(true)}
  >
    + Add Task
  </button>
            </div>
          </div>
        <div className="col-md-3 todo-sidebar">
          <h4 className="mb-4">Todo List</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button 
                className={`nav-link ${currentCategory === 'inbox' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('inbox')}
              >
                📥 Inbox
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentCategory === 'done' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('done')}
              >
                ✓ Done
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentCategory === 'important' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('important')}
              >
                ⭐ Important
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentCategory === 'trash' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('trash')}
              >
                🗑️ Trash
              </button>
            </li>
          </ul>

          <h6 className="mt-4">Tags</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">🔵 Pending</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">🟠 Onhold</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">🟣 Inprogress</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">🟢 Done</a>
            </li>
          </ul>

          <h6 className="mt-4">Priority</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">🔵 High</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">🟠 Medium</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">🟣 Low</a>
            </li>
          </ul>
        </div>

        <div className="col-md-9 todo-content">
          {Object.entries(groupedTasks).map(([group, tasks]) => (
            tasks.length > 0 && (
              <div key={group} className="mb-4">
                <h5 className="text-capitalize mb-3">{group}</h5>
                {tasks.map(task => (
                  <div key={task.id} className="card mb-2">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <input type="checkbox" className="form-check-input" />
                        <div>
                          <h6 className="mb-1">{task.title}</h6>
                          <small className="text-muted">{task.description}</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <span className={`badge bg-${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`badge bg-${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                        <img 
                          src={task.assignee.avatar} 
                          alt={task.assignee.name} 
                          className="rounded-circle"
                          width="32"
                          height="32"
                        />
                        <button className="btn btn-link">⋮</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>
      <AddTaskModal 
    show={showAddModal}
    onClose={() => setShowAddModal(false)}
  />
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high': return 'danger';
    case 'medium': return 'warning';
    case 'low': return 'success';
    default: return 'secondary';
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'new': return 'info';
    case 'pending': return 'warning';
    case 'inprogress': return 'primary';
    case 'completed': return 'success';
    default: return 'secondary';
  }
};

export default Todo;