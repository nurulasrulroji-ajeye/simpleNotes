import React from 'react'

const DeleteButon = ({ id, onDelete }) => {
  return (
    <button
      className="btn-delete"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  )
}

export default DeleteButon
