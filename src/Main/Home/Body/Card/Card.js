import "./Card.css";

function Card(props) {
  return (
    
      <div className="card">
        <div className="icon">
          <img src={props.iconCard} alt="Logo" />
        </div>
          <h1>{props.heading}</h1>
        <span>
          {props.spanTitle}
        </span>
      </div>
  );
}
export default Card;
