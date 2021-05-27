import React from 'react';

import { updateList, createCard } from '../../api/board';
import { validateTitle } from '../../helpers/validator';
import Creator from '../Creator';
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
    const err = validateTitle(title);
    if(err) {
      this.showError(...err);
      return;
    }
    updateList(this.boardId, this.state.id, title)
    .then((res) => {
      this.setState({ title, });
    })
    .catch((err) => {
      this.showError('Error while update list', err.message);
    });
  }

  createNewCard = (title) => {
    const err = validateTitle(title);
    if(err) {
      this.showError(...err);
      return;
    }
    
    const position = Object.keys(this.state.cards).length;
    const list_id = this.state.id;
    
    createCard(this.boardId, {title, position, list_id})
    .then((res) => {
      this.setState((state) => ({
        cards: {...state.cards, [res.id]: {
          id: res.id,
          title: title,
          description: '',
          users: [],
          created_at: res.id,
          position: position,
        }}
      }))
    })
    .catch((err) => {
      this.showError('Error while creating list', err.message);
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
          <Creator
            title="Create Card" 
            onSubmitTitle={this.createNewCard}
          />
        </div>
      </div>
    );
  };
};
