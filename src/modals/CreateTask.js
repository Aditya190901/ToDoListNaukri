import React, { useState } from 'react';
import './CreateTask.css'; // Import the CSS file for styling

const CreateTask = ({ onClose, onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
    };
    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal-container slide-down">
      <div className="modal-header">
        <h2>Create Task</h2>
        <button className="close" onClick={onClose}>&times;</button>
      </div>
      <hr />
      <input
        type="text"
        name="createTaskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        name="createTaskDescription"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button className="create" onClick={handleSave}>Create</button>
      <button className="cancel" onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CreateTask;