import "./backButton.css";
import { Link } from "react-router-dom";


function BackButton(props) {
  return (
    <Link to={props.to} >
    <button className="buttonStyle">VOLVER</button>
    </Link>
  )
}

export default BackButton
