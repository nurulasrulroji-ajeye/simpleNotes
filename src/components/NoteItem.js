import React from 'react'
import ItemBody from './ItemBody'
import ItemButton from './ItemButton'
import ItemHeader from './ItemHeader'
import './NoteItem.css'


const NoteItem = ({ title, body, createdAt, id, onDelete, archived, onArchive }) => {
  return (
    <div className='card'>
      <div className='content-card'>
        <ItemHeader title={title} createdAt={createdAt} />
        <ItemBody body={body} />
      </div>
      <ItemButton id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  )
}

export default NoteItem
