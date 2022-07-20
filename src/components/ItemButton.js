import React from 'react'
import DeleteButton from "./DeleteButon";
import ArchivedButton from "./ArchiveButton";

const ItemButton = ({ id, onDelete, archived, onArchive }) => {
  return (
    <div className="container-btn">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchivedButton id={id} archived={archived} onArchive={onArchive} />
    </div>
  )
}

export default ItemButton
