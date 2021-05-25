import React from 'react';
import { getBoards, createBoard, deleteBoard } from '../../api/home';
import BoardCreator from '../BoardCreator';
import BoardTmb from '../BoardTmb';
import ErrorMessageBox from '../ErrorMessageBox';

import './style.css';

export default class Home extends React.Component {
  
  state = {
    error: {title: '', message: ''},
    boards: [],
    isBoardCreatorVisible: false,
    newTitle: '',
  }

  componentDidMount() {
    getBoards()
    .then(({ boards }) => {
      this.setState({
        boards,
      })
    })
    .catch((err) => {
      this.showError('Error while get boards', err.message);
    });
  }

  showBoardCreator = () => {
    this.setState({isBoardCreatorVisible: true});
  }

  hideBoardCreator = () => {
    this.setState({isBoardCreatorVisible: false});
  }

  changeTitleInput = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  }

  submitNewBoard = (event) => {
    event.preventDefault();
    
    createBoard(this.state.newTitle)
    .finally(this.setState({
      isBoardCreatorVisible: false,
    }))
    .then((res) => {
      this.setState((state) => ({
          boards: [...state.boards, {id: res.id, title: this.state.newTitle}],
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.showError('Error while create board', err.message);
    });
  }

  delBoard = (id) => {
    deleteBoard(id)
    .then((res) => {
      const newBoardsList = this.state.boards.filter(board => board.id !== id);
      this.setState({
        boards: [...newBoardsList],
      });
    })
    .catch((err) => {
      this.showError('Error while delete board', err.message);
    });
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

  makeBoards() {
    return this.state.boards.map(board => <BoardTmb key={board.id} board={board} onClickFunc={this.delBoard}/>);
  }

  render() {
    return (
      <div className="home-container">
        <h1 className="boards__title">My boards</h1>
        
        {
          this.state.boards.length > 0 && 
          <div className="boards">
            {this.makeBoards()}
            <button className="boards__btn" onClick={this.showBoardCreator}>Add board</button>
          </div> 
        }
        
        {
          this.state.error.title && 
          <ErrorMessageBox 
            title={this.state.error.title} 
            message={this.state.error.message}
          />
        }
        
        {
          this.state.isBoardCreatorVisible && 
          <BoardCreator 
            title={this.state.newTitle} 
            onChangeFunc={this.changeTitleInput}
            onSubmitFunc={this.submitNewBoard}
            onCancelFunc={this.hideBoardCreator}
          />
        }
      </div>
    );
  }
};
    