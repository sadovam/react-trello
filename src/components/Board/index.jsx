import { Link } from 'react-router-dom';

import './style.css';

export default function Board(props) {
  const { id } = props.match.params;
  return (
    <>
      <Link to='/'>Home</Link>
      <h1>Board page number {id} </h1>
    </>
  );
};
