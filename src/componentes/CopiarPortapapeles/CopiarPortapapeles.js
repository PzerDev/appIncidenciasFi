// const CopyToClipboardHTML = ({ content }) => {
//   const handleCopy = () => {
//     // Creamos un Blob con el contenido HTML
//     const blob = new Blob([content], { type: 'text/html' });
//     const data = [new ClipboardItem({ 'text/html': blob })];

//     // Escribimos en el portapapeles
//     navigator.clipboard.write(data).then(
//       () => {
//         // alert('¡Contenido copiado con formato HTML!');
//       },
//       (err) => {
//         console.error('Error al copiar:', err);
//       }
//     );
//   };

//   return (
//     <button id="copiarBtnNota" onClick={handleCopy}>
//       <i className="material-icons">content_copy</i>
//     </button>
//   );
// };

// export default CopyToClipboardHTML;

import React from 'react';

const CopyToClipboardHTML = ({ targetId }) => {
  const handleCopy = () => {
    // Buscar el elemento por el ID proporcionado
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const htmlContent = targetElement.innerHTML; // Obtén el HTML interno del elemento

      // Crear un Blob con el contenido HTML
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const data = [new ClipboardItem({ 'text/html': blob })];

      // Escribir en el portapapeles
      navigator.clipboard.write(data).then(
        () => {
          // alert('¡Contenido copiado con formato HTML!');
        },
        (err) => {
          console.error('Error al copiar:', err);
        }
      );
    } else {
      console.error(`Elemento con ID "${targetId}" no encontrado.`);
    }
  };

  return (
    <button id={`copiarBtn_${targetId}`} onClick={handleCopy}>
      <i className="material-icons">content_copy</i>
    </button>
  );
};

export default CopyToClipboardHTML;
