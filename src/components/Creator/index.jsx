import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Creator extends React.Component {
  
  constructor() {
    super();
  
    this.state = {
      newTitle: '',
      isEditorVisible: false,
    }
  }

  onChangeInput = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  }
  
  onSubmit = () => {
    this.toggleEditor();
    this.props.onSubmitTitle(this.state.newTitle);
    this.setState({newTitle: ''});
  }

  onKeyUp = (event) => {
    if (event.code === 'Enter') {
      this.onSubmit();
    };
  }
  
  toggleEditor = () => {
    this.setState(
      (state) => (
        {
          isEditorVisible: !state.isEditorVisible,
        }
      )
    )
  }

  render() {
    return (
      <div className="creator__box">
      
      { 
        this.state.isEditorVisible &&
        <input 
          className="title__input input"
          placeholder="Type new title here..." 
          value={this.state.newTitle}
          onChange={this.onChangeInput}
          onBlur={this.onSubmit}
          onKeyUp={this.onKeyUp}
        /> 
      }
      
      <button className="btn" onClick={this.toggleEditor}>
      { this.state.isEditorVisible ? "Cancel" : this.props.title }
      </button>
      
      </div>
    );
  }
  
};

Creator.propTypes = {
  title: PropTypes.string,
  onSubmitTitle: PropTypes.func,
}
