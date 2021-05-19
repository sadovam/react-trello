import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

export default class Home extends React.Component {
  
  state = {
    isLoading: false,
    gotError: false,
    gotBoards: false,
    boards: [],
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    api.get('board')
    .finally(this.setState({isLoading: false}))
    .then(({ boards }) => {
      this.setState({
        boards,
        gotBoards: true
      })
    })
    .catch((err) => {
      this.setState({gotError: true});
    });
     
  }

  makeBoards() {
    return this.state.boards.map(board => <Link key={board.id} to={`/board/${board.id}`}>{board.title}</Link>);
  }

  render() {
    return (
      <>
        <h1>My boards</h1>
        {this.state.isLoading && <h2>Loading...</h2>}
        {this.state.gotBoards && this.makeBoards()}
        {this.state.gotError && <h2>Something went wrong...</h2>}
      </>
    );
  }
};
    