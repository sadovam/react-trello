import React from 'react';
import { Link } from 'react-router-dom';

import { getBoard, updateBoardTitle } from '../../api/board';
import ErrorMessageBox from '../ErrorMessageBox';
import List from '../List';

import './style.css';

export default class Board extends React.Component {
  
  boardId = this.props.match.params.id;
  
  state = {
    error: {title: '', message: ''},
    title: '',
    lists: {},
    users: [],
    newTitle: '',
    isBoardTitleEditorVisible: false,
  }

  componentDidMount() {
    getBoard(this.boardId)
    .then(({ title, lists, users }) => {
      this.setState({
        title,
        lists,
        users,
      })
    })
    .catch((err) => {
      this.showError('Error while get board', err.message);
    });
  }
  
  toggleTitleEditor = () => {
    this.setState((state) => ({isBoardTitleEditorVisible: !state.isBoardTitleEditorVisible}))
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
    updateBoardTitle(this.boardId, this.state.newTitle)
    .finally(this.setState({
      isBoardTitleEditorVisible: false,
    }))
    .then((res) => {
      this.setState((state) => ({
          title: state.newTitle,
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.showError('Error while update board', err.message);
    });
  }

  makeLists() {
    return Object.values(this.state.lists).map(list => <List key={list.id} boardId={this.boardId} list={list} /> );
  }

  keyUpFunc = (event) => {
    if (event.code === 'Enter') {
      this.submitNewTitle();
    };
  }

  render() {
    return (
      <>
        <header className="header">
          <Link className="home-link" to='/'>Home</Link>
          <h1 className="board-title" onClick={ this.toggleTitleEditor }>{this.state.title}</h1>
          
          { 
            this.state.isBoardTitleEditorVisible && 
            <input 
              className="board-title__input input"
              placeholder="Type new board title here..." 
              value={this.state.newTitle}
              onChange={this.changeTitleInput}
              onBlur={this.submitNewTitle}
              onKeyUp={this.keyUpFunc}
            />
          }

        </header>

        <div className="lists">
          {this.makeLists()}
        </div>


        {
          this.state.error.title && 
          <ErrorMessageBox 
            title={this.state.error.title} 
            message={this.state.error.message}
          />
        }
      </>
    );
  };
};
