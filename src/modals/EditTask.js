import React, { useState } from 'react';

const EditTask = ({ task, onClose, onSave }) => {
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleSave = () => {
    const updatedTask = {
      ...task,
      name: taskName,
      description: taskDescription,
    };
    onSave(updatedTask);
    onClose();
  };

  return (
    <div className="modal-container">
      <h2>Edit Task</h2>
      <input
        type="text"
        name="updateTaskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        name="updateTaskDescription"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button className="update" onClick={handleSave}>Update</button>
      <button className="cancel" onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTask;