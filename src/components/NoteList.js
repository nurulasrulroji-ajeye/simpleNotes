import React from 'react'
import NoteItem from './NoteItem';
import './NoteList.css'

const NoteList = ({ notes, onDelete, onArchive, query }) => {
  const showNotes = notes
    .filter((note) => note.archived === false)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  const NoteArchived = notes
    .filter((note) => note.archived === true)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  return (
    <>
      <section id='showNotes' className='notes-show'>
        <h2 className='judul-note-list'>Notes List</h2>
        <div className='container-notes'>
          {
            showNotes.length > 0 ? (
              showNotes.map((note) => (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              ))
            ) : (
              <p className='empty'> Empty Notes... </p>
            )
          }
        </div>
      </section>

      <section id='NoteArchived' className='note-archive'>
        <h2 className='judul-archive'>Archive</h2>
        <div className='container-archive'>
          {
            NoteArchived.length > 0 ? (
              NoteArchived.map((note) => (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              ))
            ) : (
              <p className='empty'>Empty Note Archive ...</p>
            )
          }
        </div>
      </section>
    </>
  )
}

export default NoteList
