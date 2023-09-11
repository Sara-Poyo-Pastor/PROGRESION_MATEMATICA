import "./TipsView.css"
import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import plantilla from "../../assets/images/TIPS/plantilla_contenido.jpg"
import porcentajes from "../../assets/images/TIPS/porcentajes.jpg"
import practicar from "../../assets/images/TIPS/PRACTICAR.jpg"
import productos from "../../assets/images/TIPS/PRODUCTOS_NOTABLES2.jpg"
import fracciones from "../../assets/images/TIPS/SUMAR_RESTAR_FRACCIONES.jpg"
import truco from "../../assets/images/TIPS/truco_productos_notables.jpg"
import  BackButton  from "../../components/backButton/BackButton"


function TipsView() {
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
        <BackButton to="/noRegistrationAccess" />
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={plantilla} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={porcentajes} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={practicar} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={productos} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={fracciones} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={truco} alt="" />
                </div>
                </div>
        </div>
    
    
    
    
    </>
    )
}

export default TipsView