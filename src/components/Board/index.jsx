export default function Board(props) {
  const { id } = props.match.params;
  return <h1>Board page number {id} </h1>;
};
