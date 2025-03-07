import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Card.css'; // Import the CSS file for styling

const Card = ({ task, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
        <div className="card-actions">
          <button className="far fa-edit m-3" onClick={() => onEdit(task)}></button>
          <button className="fas fa-trash-alt" onClick={() => onDelete(task.id)}></button>
        </div>
      </div>
    </div>
  );
};

export default Card;