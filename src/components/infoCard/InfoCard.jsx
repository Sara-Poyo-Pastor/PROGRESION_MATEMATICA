import "./infoCard.css";
import { Link } from "react-router-dom";



function InfoCard(props) {
return (
    <>
        <div className='cardInfo'>
            <img className="info_img_card" src={props.img_card}></img>
            <Link to={props.to} className="infoTextLink">
            <div><h2 className="info_text">{props.tittle_content}</h2></div>
            </Link>
        </div>
   </>
    );
}

export default InfoCard;