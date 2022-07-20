import React from 'react';

const ArchiveButton = ({ id, archived, onArchive }) => {
  return (
    <button
      className="btn-archive"
      onClick={() => onArchive(id)}
    >
      {archived ? "Move" : "Archive"}
    </button>
  )
}

export default ArchiveButton
