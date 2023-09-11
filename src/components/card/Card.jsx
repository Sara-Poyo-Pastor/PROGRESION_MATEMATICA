import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
        <img className="cardImage" src={props.img_card}></img>
        <Link to={props.to} className="imageTextLink">
        <div className="imageText">{props.text}</div>
      </Link>
        </div>
  );
};

export default Card;

