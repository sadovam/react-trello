import { Link } from 'react-router-dom';

export default function BoardTmb({board: {id, title}, onClickFunc}) {
  return (
    <>
    <Link to={`/board/${id}`}>{title}</Link>
    <button onClick={() => onClickFunc(id)}>x</button>
    </>
  )
}