import React from 'react';

const Card = ({ task, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button className="far fa-edit m-3" onClick={() => onEdit(task)}>Edit</button>
        <button className="fas fa-trash-alt" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;