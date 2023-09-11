import "./Landing.css"
import logo from "../../assets/images/logo_principal.png"
import InfoCard from "../../components/infoCard/InfoCard"
import info from "../../assets/images/info.png"
import signUp from "../../assets/images/signup.png"
import login from "../../assets/images/login.png"
import unlock from "../../assets/images/unlock.png"



export default function Landing(){
    return (
    <>
    
    <div className="logo_container">
        <img className="logo" src={logo} alt="logo"/>
    </div>
        <h1 className="slogan">&#34;La esencia de las matemáticas no es hacer las cosas simples complicadas, sino hacer las cosas complicadas simples&#34;</h1>
    <div className="link_container">
            <InfoCard img_card={info} tittle_content={'INFO'} to="InfoView"></InfoCard> />
            <InfoCard img_card={signUp} tittle_content={'REGÍSTRATE'} to= "SingUpView" />
            <InfoCard img_card={login} tittle_content={'LOGIN'} to= "LoginView" />
            <InfoCard img_card={unlock} tittle_content={'ABIERTO'} to= "NoRegistrationAccess" />
    </div>
</>
)
}

