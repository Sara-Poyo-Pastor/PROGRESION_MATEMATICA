import "./InfoView.css"
import BackButton from "../../components/backButton/BackButton"



export default function InfoView(){
    return (
<>
<BackButton to="/"/>
<div className="titleContainer">
    <h2 className="infoTitle">INFORMACIÓN</h2>
</div>
<div className="pContainer paragraphContainer">
    <p className="paragraph">
     ¡Bienvenidos a Progresión Matemática! Tu portal educativo para el fascinante mundo de las matemáticas. Si eres estudiante de 1º a 4º de Educación Secundaria Obligatoria (ESO) y buscas un lugar para fortalecer tus habilidades matemáticas, estás en el sitio adecuado.<br/><br/>
Nuestra misión es hacer que tu aprendizaje sea divertido, sencillo y efectivo. Hemos preparado una amplia gama de recursos para ayudarte a comprender los conceptos clave y a desarrollar tu confianza en esta asignatura.<br/><br/>
¿Qué encontrarás aquí? Tenemos PDFs de teoría. Nuestro enfoque claro y práctico te ayudará a dominar desde los fundamentos hasta los temas más avanzados.<br/><br/>
Pero no todo es teoría aburrida. Queremos que te sientas inspirado a explorar y descubrir más. Por eso, también encontrarás imágenes con consejos útiles, curiosidades matemáticas sorprendentes y anécdotas interesantes que te mostrarán cómo las matemáticas están presentes en nuestro día a día y en todo el universo.<br/><br/>
¡Prepárate para embarcarte en un emocionante viaje de descubrimiento matemático!   
    </p>
</div>
</>

    )
}