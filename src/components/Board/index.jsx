import React from 'react';
import { Link } from 'react-router-dom';

import { getBoard, updateBoardTitle } from '../../api/board';
import List from '../List';
import EditableTitle from '../EditableTitle';

import './style.css';

export default class Board extends React.Component {
  
  boardId = this.props.match.params.id;
  showError = this.props.showError;
  
  state = {
    title: '',
    lists: {},
    users: [],
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
  
  submitNewTitle = (title) => {
    updateBoardTitle(this.boardId, title)
    .then((res) => {
      this.setState({
          title,
      });
    })
    .catch((err) => {
      this.showError('Error while update board', err.message);
    });
  }

  makeLists() {
    return Object.values(this.state.lists).map(list => <List key={list.id} boardId={this.boardId} list={list} showError={this.showError}/> );
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
        </div>
      </>
    );
  };
};
