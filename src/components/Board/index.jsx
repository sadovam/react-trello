import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import { getBoard, updateBoardTitle, createList } from '../../api/board';
import List from '../List';
import EditableTitle from '../EditableTitle';

import './style.css';
import Creator from '../Creator';
import { validateTitle } from '../../helpers/validator';

export default class Board extends React.Component {
  
  constructor(props) {
    super(props);
    this.boardId = this.props.match.params.id;
    this.showError = this.props.showError;
  
    this.state = {
      title: '',
      lists: {},
      users: [],
    }
  }

  componentDidMount() {
    this.reloadBoard();
  }

  reloadBoard = () => {
    getBoard(this.boardId)
    .then(({ title, lists, users }) => {
      this.setState({
        title,
        lists,
        users,
      })
      console.log(lists);
    })
    .catch((err) => {
      this.showError('Error while get board', err.message);
    });
  }
  
  submitNewTitle = (title) => {
    const err = validateTitle(title);
    if(err) {
      this.showError(...err);
      return;
    }
    
    updateBoardTitle(this.boardId, title)
    .then((res) => {
      this.setState({
          title,
      });
    })
    .catch((err) => {
      this.showError('Error while updating board', err.message);
    });
  }

  createNewList = (title) => {
    const err = validateTitle(title);
    if(err) {
      this.showError(...err);
      return;
    }
    
    const position = Object.keys(this.state.lists).length;
    createList(this.boardId, {title, position})
    .then((res) => {
      // Reloading board because API doesn't return new list ID
      this.reloadBoard();
    })
    .catch((err) => {
      this.showError('Error while creating list', err.message);
    });
  }

  makeLists() {
    return Object.values(this.state.lists).map(
      list => <List 
        key={list.id} 
        boardId={this.boardId} 
        list={list} 
        showError={this.showError}
      /> 
    );
  }

  render() {
    return (
      <>
        <header className="header">
          <Link className="home-link" to='/'>Home</Link>
          {
            this.state.title &&
            <EditableTitle 
              title={this.state.title} 
              onSubmitTitle={this.submitNewTitle}
            />
          }
        </header>

        <div className="lists">
          {this.makeLists()}
           
          <Creator
            title="Create List" 
            onSubmitTitle={this.createNewList}
          />
          
        </div>
      </>
    );
  };
}

Board.propTypes = {
  showError: PropTypes.func,
}
