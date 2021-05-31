import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

export default function BoardTmb({board: {id, title}, onClick}) {
  return (
    <div className="board-tmb">
    <Link to={`/board/${id}`} className="board-tmb__link">{title}</Link>
    <button className="board-tmb__btn" onClick={() => onClick(id)}>x</button>
    </div>
  )
}

BoardTmb.propTypes = {
  board: PropTypes.shape({id: PropTypes.number, title: PropTypes.string}),
  onClick: PropTypes.func,
}
