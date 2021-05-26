import React from 'react';
import { Link } from 'react-router-dom';

import { getBoard, updateBoardTitle } from '../../api/board';
import ErrorMessageBox from '../ErrorMessageBox';

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
    console.log("bid>> ", this.boardId);
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

  submitNewTitle = (event) => {
    event.preventDefault();
    
    updateBoardTitle(this.boardId, this.state.newTitle)
    .finally(this.setState({
      isBoardTitleEditorVisible: false,
    }))
    .then((res) => {
      console.log(res);
      this.setState((state) => ({
          title: state.newTitle,
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.showError('Error while create board', err.message);
    });
  }

  render() {
    return (
      <>
        <Link to='/'>Home</Link>
        <h1 onClick={ this.toggleTitleEditor }>{this.state.title}</h1>
        { this.state.isBoardTitleEditorVisible && 
          <input className="board-title__input input"
          placeholder="Type new board title here..." 
          value={this.state.newTitle}
          onChange={this.changeTitleInput}
          onBlur={this.submitNewTitle}
          />
        }
        
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
