import React from 'react';
import { getBoards, createBoard, deleteBoard } from '../../api/home';
import BoardCreator from '../BoardCreator';
import BoardTmb from '../BoardTmb';
import ErrorMessageBox from '../ErrorMessageBox';

export default class Home extends React.Component {
  
  state = {
    isLoading: true,
    gotError: false,
    errorTitle: '',
    errorMessage: '',
    gotBoards: false,
    boards: [],
    isBoardCreatorVisible: false,
    newTitle: '',
  }

  componentDidMount() {
    getBoards()
    .finally(this.setState({isLoading: false}))
    .then(({ boards }) => {
      this.setState({
        boards,
        gotBoards: true
      })
    })
    .catch((err) => {
      this.showError('Error while get boards', err.toString() );
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
      this.showError('Error while create board', err.toString());
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
      this.showError('Error while delete board', err.toString());
    });
  }

  showError = (title, message) => {
    this.setState({
      gotError: true, 
      errorTitle: title,
      errorMessage: message,
    });
    setTimeout(() => this.setState({
      gotError: false, 
      errorTitle: '',
      errorMessage: '',
    }), 3000
    );
  } 

  makeBoards() {
    return this.state.boards.map(board => <BoardTmb key={board.id} board={board} onClickFunc={this.delBoard}/>);
  }

  render() {
    return (
      <>
        <h1>My boards</h1>
        <p>{this.state.isLoading}</p>
        {this.state.isLoading && <p>Loading...</p>}
        
        {
          this.state.gotBoards && 
          <div>
            {this.makeBoards()}
            <button onClick={this.showBoardCreator}>Add board</button>
          </div> 
        }
        
        {
          this.state.gotError && 
          <ErrorMessageBox 
            title={this.state.errorTitle} 
            message={this.state.errorMessage}
          />
        }
        
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
    