import React from 'react';
import { getBoards, createBoard, deleteBoard } from '../../api/home';
import BoardCreator from '../BoardCreator';
import BoardTmb from '../BoardTmb';

export default class Home extends React.Component {
  
  state = {
    isLoading: false,
    gotError: false,
    gotBoards: false,
    boards: [],
    isBoardCreatorVisible: false,
    newTitle: '',
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getBoards()
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

  showBoardCreator = () => {
    this.setState({isBoardCreatorVisible: true});
  }

  changeTitleInput = (event) => {
    this.setState({
      newTitle: event.target.value,
    })
  }

  submitNewBoard = (event) => {
    event.preventDefault();
    this.setState({isLoading: true});
    
    createBoard(this.state.newTitle)
    .finally(this.setState({
      isLoading: false,
      isBoardCreatorVisible: false,
    }))
    .then((res) => {
      this.setState((state) => ({
          boards: [...state.boards, {id: res.id, title: this.state.newTitle}],
          newTitle: '',
      }));
    })
    .catch((err) => {
      this.setState({gotError: true});
    });
  }

  delBoard = (id) => {
    this.setState({isLoading: true});
    
    deleteBoard(id)
    .finally(this.setState({
      isLoading: false,
    }))
    .then((res) => {
      const newBoardsList = this.state.boards.filter(board => board.id !== id);
      this.setState({
        boards: [...newBoardsList],
      });
    })
    .catch((err) => {
      this.setState({gotError: true});
    });
  }

  makeBoards() {
    return this.state.boards.map(board => <BoardTmb key={board.id} board={board} onClickFunc={this.delBoard}/>);
  }

  render() {
    return (
      <>
        <h1>My boards</h1>
        {this.state.isLoading && <h2>Loading...</h2>}
        {
          this.state.gotBoards && 
          <div>
            {this.makeBoards()}
            <button onClick={this.showBoardCreator}>Add board</button>
          </div> 
        }
        {this.state.gotError && <h2>Something went wrong...</h2>}
        {
          this.state.isBoardCreatorVisible && 
          <BoardCreator 
            title={this.state.newTitle} 
            onChangeFunc={this.changeTitleInput}
            onSubmitFunc={this.submitNewBoard}
          />}
      </>
    );
  }
};
    