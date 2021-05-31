import React from 'react';
import PropTypes from 'prop-types';
import { getBoards, createBoard, deleteBoard } from '../../api/home';
import { validateTitle } from '../../helpers/validator';
import BoardCreator from '../BoardCreator';
import BoardTmb from '../BoardTmb';

import './style.css';

export default class Home extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      boards: [],
      isBoardCreatorVisible: false,
      newTitle: '',
    }
  }
  

  componentDidMount() {
    getBoards()
    .then(({ boards }) => {
      this.setState({
        boards,
      })
    })
    .catch((err) => {
      this.props.showError('Error while geting boards', err.message);
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
    
    const err = validateTitle(this.state.newTitle);
    if(err) {
      this.props.showError(...err);
      return;
    }
    
    createBoard(this.state.newTitle)
    .finally(this.hideBoardCreator)
    .then((res) => {
      this.setState((state) => ({
          boards: [...state.boards, {id: res.id, title: this.state.newTitle}],
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.props.showError('Error while creating board', err.message);
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
      this.props.showError('Error while deleting board', err.message);
    });
  }

  makeBoards() {
    return this.state.boards.map(board => <BoardTmb key={board.id} board={board} onClick={this.delBoard}/>);
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
          this.state.isBoardCreatorVisible && 
          <BoardCreator 
            title={this.state.newTitle} 
            onChange={this.changeTitleInput}
            onSubmit={this.submitNewBoard}
            onCancel={this.hideBoardCreator}
          />
        }
      </div>
    );
  }
};

Home.propTypes = {
  showError: PropTypes.func,
}
