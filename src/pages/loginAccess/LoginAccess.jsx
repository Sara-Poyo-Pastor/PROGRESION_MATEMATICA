import "./LoginAccess.css"
import BackButton from '../../components/backButton/BackButton'
import Card from '../../components/card/Card'
import primeroEso from "../../assets/images/1eso.jpeg"
import segundoEso from "../../assets/images/2eso.jpeg"
import terceroEso from "../../assets/images/3eso.jpeg"
import cuartoEso from "../../assets/images/4eso.jpeg"

function LoginAccess() {
  return (
    <>
        <BackButton to= "/"/>
        <div className="cardsContainer">
            <Card img_card={primeroEso} text={'1º ESO'} to="/Eso1"></Card>
            <Card img_card={segundoEso} text={'2º ESO'} to="/Eso2"></Card>
            <Card img_card={terceroEso} text={'3º ESO'} to="/Eso3"></Card>
            <Card img_card={cuartoEso} text={'4º ESO'} to="/Eso4"></Card>
        </div>
    </>
  )
}

export default LoginAccess