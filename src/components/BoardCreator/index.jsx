export default function BoardCreator({title, onChangeFunc, onSubmitFunc}) {
  
  return (
    <form onSubmit={onSubmitFunc}>
      <label htmlFor="newTitle">New board title</label>
      <input 
        placeholder="Type new board title here..." 
        id="newTitle" 
        value={title}
        onChange={onChangeFunc}
        ></input>
      <button>Add board</button>
    </form>
  )
}