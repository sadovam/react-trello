import './style.css';

export default function BoardCreator({title, onChangeFunc, onSubmitFunc, onCancelFunc}) {
  return (
    <div className="add-form__modal" onClick={onCancelFunc}>
      <form className="add-form" onSubmit={onSubmitFunc} onClick = {event => event.stopPropagation()}>
        <label className="add-form__title" htmlFor="newTitle">New board title</label>
        <input className="add-form__input input"
          placeholder="Type new board title here..." 
          id="newTitle" 
          value={title}
          onChange={onChangeFunc}
          ></input>
        <button className="btn">Add board</button>
      </form>
    </div>
  )
}