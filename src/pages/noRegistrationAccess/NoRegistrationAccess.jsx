import "./NoRegistrationAccess.css"
import Card from "../../components/card/Card"
import BackButton from '../../components/backButton/BackButton'
import tipsImage from "../../assets/images/tips.jpeg"
import curiosidadesImage from "../../assets/images/curiosidades.jpeg"
import teoriaImage from "../../assets/images/teoria.jpeg"

function NoRegistrationAccess() {
  return (
    <>
    <BackButton to="/" />
    <div className="cardsContainer">
        <Card img_card={tipsImage} text={'TIPS'} to="/tipsView" />
        <Card img_card={teoriaImage} text={'TEORIA'} to="/theoryView" />
        <Card img_card={curiosidadesImage} text={'CURIOSIDADES'} to="/curiositiesView" />
    </div>
    </>
  )
}

export default NoRegistrationAccess;