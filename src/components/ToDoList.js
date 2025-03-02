import React, { useState, useEffect } from 'react';
import Card from './Card';
import CreateTask from '../modals/CreateTask';
import EditTask from '../modals/EditTask';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const openEditModal = (task) => {
    setCurrentTask(task);
    setEditModalOpen(true);
  };

  return (
    <div>
      <button className="create-task" onClick={() => setCreateModalOpen(true)}>Create Task</button>
      <div className="task-list">
        {tasks.map(task => (
          <Card key={task.id} task={task} onEdit={openEditModal} onDelete={deleteTask} />
        ))}
      </div>
      {isCreateModalOpen && <CreateTask onClose={() => setCreateModalOpen(false)} onSave={addTask} />}
      {isEditModalOpen && <EditTask task={currentTask} onClose={() => setEditModalOpen(false)} onSave={updateTask} />}
    </div>
  );
};

export default ToDoList;