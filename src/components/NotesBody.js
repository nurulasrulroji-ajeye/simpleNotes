import React from 'react'
import NotesInput from './InputNotes'
import NoteList from './NoteList'

const NotesBody = ({ notes, addNotes, onDelete, onArchive, query }) => {
  return (
    <article className='body-Notes'>
      <NotesInput addNotes={addNotes} />
      <NoteList
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        query={query}
      />
    </article>
  )
}

export default NotesBody
