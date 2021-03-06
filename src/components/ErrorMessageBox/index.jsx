import './style.css';

export default function ErrorMessageBox({title, message}) {
  return (
    <div className="error__box">
      <h2 className="error__title">{title}</h2>
      <p className="error__message">{message}</p>
    </div>);
}
