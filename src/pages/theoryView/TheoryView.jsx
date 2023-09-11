import "./TheoryView.css"
import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import signos from "../../assets/images/TEORIA/signos.jpg"
import reglas3 from "../../assets/images/TEORIA/reglas_de_tres.jpg"
import reglas32 from "../../assets/images/TEORIA/reglas_de_tres2.jpg"
import productos from "../../assets/images/TEORIA/productos_notables_0.jpg"
import productos2 from "../../assets/images/TEORIA/productos_notables.jpg"
import opcom from "../../assets/images/TEORIA/operaciones_combinadas.jpg"
import opcom2 from "../../assets/images/TEORIA/OPERACIONES_COMBINADAS2.jpg"
import criterios from "../../assets/images/TEORIA/criterios_divisibilidad.jpg"
import clasificacion from "../../assets/images/TEORIA/clasificacion_numeros.jpg"
import BackButton from "../../components/backButton/BackButton"


function TheoryView() {
    useEffect(() => {
      const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 15,
          strech: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
      });
    }, []);

    return (
    <>
        <BackButton to="/noRegistrationAccess"/>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={signos} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={reglas3} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={reglas32} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={productos} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={productos2} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={opcom} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={opcom2} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={criterios} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={clasificacion} alt="" />
                </div>
                </div>
        </div>
    
    
    
    
    </>
    )
}

export default TheoryView