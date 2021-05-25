import { Link } from 'react-router-dom';

import './style.css';

export default function BoardTmb({board: {id, title}, onClickFunc}) {
  return (
    <div className="board-tmb">
    <Link to={`/board/${id}`} className="board-tmb__link">{title}</Link>
    <button className="board-tmb__btn" onClick={() => onClickFunc(id)}>x</button>
    </div>
  )
}