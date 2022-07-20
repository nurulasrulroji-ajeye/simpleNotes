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
      const lenghtTitleInput = inputTitle.lenght;
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
    e.prventDefault();
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
          limitChar: 50
        };
      });
    }
  }

  render() {
    return (
      <div className='body-input'>
        <h2>Add Notes</h2>
        <form onSubmit={(e) => { this.onSumbitEventHandler(e) }} className='notes-input'>
          <div>
            <p>Limit Character : {this.state.limitChar}</p>
          </div>
          <input type="text" id='title' name='title' value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder='Note Title Here ...' />
          <textarea type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='write your notes here ...' />
          <button type='sumbit'>Add Notes</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
