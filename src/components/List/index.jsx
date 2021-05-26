import React from 'react';

import { updateList } from '../../api/board';
import ErrorMessageBox from '../ErrorMessageBox';

import './style.css';

export default class List extends React.Component {
  
  constructor(props) {
    super(props);
    this.boardId = props.boardId;
    this.state = {
      error: {title: '', message: ''},
      id: props.list.id,
      title: props.list.title,
      cards: props.list.cards,
      position: props.list.position,
      newTitle: '',
      isListTitleEditorVisible: false,
    }
  }
  
  toggleTitleEditor = () => {
    this.setState((state) => ({isListTitleEditorVisible: !state.isListTitleEditorVisible}))
  }

  showError = (title, message) => {
    this.setState({
      error: {title, message},
    });
    setTimeout(() => this.setState({
      error: {title: '', message: ''},
    }), 3000
    );
  }

  changeTitleInput = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  }

  submitNewTitle = () => {
    updateList(this.boardId, this.state.id, this.state.newTitle)
    .finally(this.setState({
      isListTitleEditorVisible: false,
    }))
    .then((res) => {
      this.setState((state) => ({
          title: state.newTitle,
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.showError('Error while update list', err.message);
    });
  }

  makeCards() {
    return Object.values(this.state.cards).map(card => <h3 key={card.id}> {card.title} </h3>);
  }

  keyUpFunc = (event) => {
    if (event.code === 'Enter') {
      this.submitNewTitle();
    };
  }

  render() {
    return (
      <div className='list'>
        <header className="header">
          
          
          { 
            this.state.isListTitleEditorVisible ?
            <input 
              className="list-title__input input"
              placeholder="Type new board title here..." 
              value={this.state.newTitle}
              onChange={this.changeTitleInput}
              onBlur={this.submitNewTitle}
              onKeyUp={this.keyUpFunc}
            /> :
            <h1 className="list-title" onClick={ this.toggleTitleEditor }>{this.state.title}</h1>
          }

        </header>

        <div>
          {this.makeCards()}
        </div>


        {
          this.state.error.title && 
          <ErrorMessageBox 
            title={this.state.error.title} 
            message={this.state.error.message}
          />
        }
      </div>
    );
  };
};
