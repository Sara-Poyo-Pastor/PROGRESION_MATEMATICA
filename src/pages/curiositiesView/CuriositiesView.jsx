import "./CuriositiesView.css"
import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import curiosidades from "../../assets/images/CURIOSIDADES/curiosidades_1.jpg"
import discalculia from "../../assets/images/CURIOSIDADES/discalculia.jpg"
import cero from "../../assets/images/CURIOSIDADES/EL_0.jpg"
import uno from "../../assets/images/CURIOSIDADES/el_1.jpg"
import fibonacci from "../../assets/images/CURIOSIDADES/fibonacci.jpg"
import dni from "../../assets/images/CURIOSIDADES/letra_dni.jpg"
import BackButton from "../../components/backButton/BackButton"


function CuriositiesView() {
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
                    <img src={curiosidades} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={discalculia} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={cero} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={uno} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={fibonacci} alt="" />
                </div>
                <div className="swiper-slide">
                    <img src={dni} alt="" />
                </div>
                </div>
        </div>
    
    
    
    
    </>
    )
}

export default CuriositiesView