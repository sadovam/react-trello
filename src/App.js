import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import ErrorMessageBox from './components/ErrorMessageBox';

import './App.css';
import React from 'react';

export default class App extends React.Component {
  
  state = {
    error: {
      title: '',
      message: '',
    }
  }

  showError = (title, message) => {
    this.setState({
      error: {title, message},
    });
    setTimeout(() => this.setState({
      error: {title: '', message: ''},
    }), 2000
    );
  } 

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home showError={this.showError} />
            </Route>
            <Route path="/board/:id">
              {(props) => <Board showError={this.showError} {...props}/>}
            </Route>
            <Redirect from="/react-trello" to="/" />
          </Switch>
        </Router> 
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
  
}
