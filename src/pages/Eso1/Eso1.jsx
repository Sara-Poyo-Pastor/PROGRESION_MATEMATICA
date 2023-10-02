import BackButton from '../../components/backButton/BackButton';
import { pdfs } from './arraypdf';
import "./Eso1.css"
import { Icon } from '@iconify/react';



function Eso1() {
    console.log(pdfs)

    return (
      <>
      <BackButton to="/LoginAccess"/>
      <h2 className='contents'>Documentos</h2>
      <div className='buttons_container'>
        {pdfs.map((pdf) => (
          <button className="buttonpdf" key={pdf.title}>
            <a href={pdf.to} target="_blank" rel="noopener noreferrer" download={pdf.to}> 
            <span className="icon"><Icon icon="line-md:download-loop" /></span>
              {pdf.title}
            </a>
          </button>
        ))}
      </div>
      </>
    );
}

export default Eso1;



// function Eso1() {
//   const pdfs = [
//     { title: 'PDF 1', to: 'URL_DEL_PDF_1' },
//     { title: 'PDF 2', to: 'URL_DEL_PDF_2' },
//     // Agrega más objetos PDF según tus necesidades
//   ];

//   const descargarPDF = (pdfUrl) => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.setAttribute('target', '_blank');
//     link.setAttribute('rel', 'noopener noreferrer');
//     link.setAttribute('download', 'archivo.pdf');
//     link.click();
//   };

//   return (
//     <div>
//       {pdfs.map((pdf) => (
//         <button
//           className="buttonpdf"
//           key={pdf.title}
//           onClick={() => descargarPDF(pdf.to)}
//         >
//           {pdf.title}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Eso1;



// import axios from 'axios';

// function descargarPDF(pdfUrl) {
//   axios({
//     url: pdfUrl,
//     method: 'GET',
//     responseType: 'blob', // Esto indica que esperamos un archivo binario
//   })
//     .then((response) => {
//       // Crear un enlace en el navegador y activar la descarga
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'archivo.pdf');
//       document.body.appendChild(link);
//       link.click();
//     })
//     .catch((error) => {
//       console.error('Error al descargar el PDF', error);
//     });
// }

// // Llamar a la función para descargar el PDF
// descargarPDF('URL_DEL_PDF');
