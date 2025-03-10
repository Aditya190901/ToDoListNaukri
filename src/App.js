import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Task Management</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;