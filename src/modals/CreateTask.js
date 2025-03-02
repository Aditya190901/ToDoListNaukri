import React, { useState } from 'react';

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
    <div className="modal-container">
      <h2>Create Task</h2>
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