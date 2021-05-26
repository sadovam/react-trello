import React from 'react';
import './style.css';

export default class EditableTitle extends React.Component {
  
  onSubmitTitle = this.props.onSubmitTitle;
  state = {
    newTitle: this.props.title,
    isEditorVisible: false,
  }

  onChangeInput = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  }
  
  onSubmitFunc = () => {
    this.toggleEditor();
    this.onSubmitTitle(this.state.newTitle);
  }

  onKeyUpFunc = (event) => {
    if (event.code === 'Enter') {
      this.onSubmitFunc();
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
          onBlur={this.onSubmitFunc}
          onKeyUp={this.onKeyUpFunc}
        />
      }
      </div>
    );
  }
  
};
