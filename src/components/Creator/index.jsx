import React from 'react';
import './style.css';

export default class Creator extends React.Component {
  
  onSubmitTitle = this.props.onSubmitTitle;
  title = this.props.title;
  state = {
    newTitle: '',
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
    this.setState({newTitle: ''});
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
      <div className="creator__box">
      
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
      
      <button className="btn" onClick={this.toggleEditor}>{
        this.state.isEditorVisible ? "Cancel" : this.title
      }</button>
      
      </div>
    );
  }
  
};
