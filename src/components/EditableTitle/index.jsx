import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class EditableTitle extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      newTitle: this.props.title,
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
      <div className="title__box">
      <h2 className="title" onClick={this.toggleEditor}>{this.props.title}</h2>
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
      </div>
    );
  }
  
};

EditableTitle.propTypes = {
  onSubmitTitle: PropTypes.func,
}
