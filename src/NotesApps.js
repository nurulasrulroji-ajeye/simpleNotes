import React from 'react';
import NotesBody from './components/NotesBody';
import './styles.css'

class NotesApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      query: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchivedNotesHandler = this.onArchivedNotesHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: parseInt(Date.now() * Math.random()).toString(),
            title,
            body,
            createdAt: new Date().toJSON(),
            archived: false
          },
        ],
      };
    });
  }

  onDeleteNotesHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }


  onArchivedNotesHandler(id) {
    const { notes } = this.state;
    const notesIndex = this.state.notes.findIndex((note) => note.id === id);
    notes[notesIndex].archived = !notes[notesIndex].archived;
    return this.setState({ notes });
  }

  render() {
    return (
      <div className='notes-apps'>
        <h1>Personal Notes Apps</h1>
        <NotesBody
          notes={this.state.notes}
          addNotes={this.onAddNotesHandler}
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchivedNotesHandler}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default NotesApps;
