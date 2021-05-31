import PropTypes from 'prop-types';
import './style.css';

export default function BoardCreator({title, onChange, onSubmit, onCancel}) {
  return (
    <div className="add-form__modal" onClick={onCancel}>
      <form className="add-form" onSubmit={onSubmit} onClick = {event => event.stopPropagation()}>
        <label className="add-form__title" htmlFor="newTitle">New board title</label>
        <input className="add-form__input input"
          placeholder="Type new board title here..." 
          id="newTitle" 
          value={title}
          onChange={onChange}
          ></input>
        <button className="btn">Add board</button>
      </form>
    </div>
  )
}

BoardCreator.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}
