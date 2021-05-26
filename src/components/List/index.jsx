import React from 'react';

import { updateList } from '../../api/board';
import EditableTitle from '../EditableTitle';

import './style.css';

export default class List extends React.Component {
  
  constructor(props) {
    super(props);
    this.boardId = props.boardId;
    this.showError = props.showError;
    this.state = {
      ...props.list,
    }
  }
  
  submitNewTitle = (title) => {
    updateList(this.boardId, this.state.id, title)
    .then((res) => {
      this.setState({ title, });
    })
    .catch((err) => {
      this.showError('Error while update list', err.message);
    });
  }

  makeCards() {
    return Object.values(this.state.cards).map(card => <h3 key={card.id}> {card.title} </h3>);
  }

  render() {
    return (
      <div className='list'>
        <EditableTitle className="list__title"
          title={this.state.title}
          onSubmitTitle={this.submitNewTitle}
        />

        <div>
          {this.makeCards()}
        </div>
      </div>
    );
  };
};
