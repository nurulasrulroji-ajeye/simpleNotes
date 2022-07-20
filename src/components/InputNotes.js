import './style.css';
import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limitChar: 45,
      isEmptyTitle: false,
      isEmptyBody: false
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSumbitEventHandler = this.onSumbitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    this.setState((prevState) => {
      const charMax = 45;
      const inputTitle = e.target.value.slice(0, charMax);
      const lenghtTitleInput = inputTitle.length;
      return {
        ...prevState,
        title: inputTitle,
        limitChar: charMax - lenghtTitleInput,
        isEmptyTitle: false
      };
    });
  }

  onBodyChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
        isEmptyBody: false,
      }
    });
  }

  onSumbitEventHandler(e) {
    e.preventDefault();
    const { title, body } = this.state;
    if (title === "" && body === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmptyTitle: true,
          isEmptyBody: true,
        };
      });
    } else if (title === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmptyTitle: true,
        };
      });
    } else if (body === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isEmptyBody: true,
        };
      });
    } else {
      this.props.addNotes(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          title: "",
          body: "",
          limitChar: 45
        };
      });
    }
  }

  render() {
    return (
      <div className='body-input'>
        <h2 className='judul-input'>Add Notes</h2>
        <form onSubmit={this.onSumbitEventHandler} className='notes-input'>
          <div>
            <p className='limit-char'>Limit Character :<span>{this.state.limitChar}</span></p>
            {
              this.state.isEmptyTitle ? (
                <p className='empty-title'>Title cannot be empty!</p>
              ) : null
            }
          </div>
          <input className='form-input-note' type="text" name='title' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder='Note Title Here ...' />
          {
            this.state.isEmptyBody ? (
              <p className='empty-Body'>Notes cannot be empty!</p>
            ) : null
          }
          <textarea type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='write your notes here ...' />
          <button type='sumbit'>Add Notes</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
