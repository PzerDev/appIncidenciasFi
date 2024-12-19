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

import React from "react";

const CopyToClipboardHTML = ({ targetId }) => {
  const handleCopy = (event) => {
    // Buscar el elemento por el ID proporcionado
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Verificar si la tecla Shift está presionada
      const isShiftPressed = event.shiftKey;

      if (isShiftPressed) {
        // Copiar solo texto sin formato
        const textContent = targetElement.innerText; // Obtén el texto interno del elemento
        navigator.clipboard.writeText(textContent).then(
          () => {
            console.log("¡Texto copiado sin formato!");
          },
          (err) => {
            console.error("Error al copiar texto:", err);
          }
        );
      } else {
        // Copiar con formato HTML
        const htmlContent = targetElement.innerHTML; // Obtén el HTML interno del elemento

        // Crear un Blob con el contenido HTML
        const blob = new Blob([htmlContent], { type: "text/html" });
        const data = [new ClipboardItem({ "text/html": blob })];

        // Escribir en el portapapeles
        navigator.clipboard.write(data).then(
          () => {
            console.log("¡Contenido copiado con formato HTML!");
          },
          (err) => {
            console.error("Error al copiar HTML:", err);
          }
        );
      }
    } else {
      console.error(`Elemento con ID "${targetId}" no encontrado.`);
    }
  };

  return (
    <button
      id={`copiarBtn_${targetId}`}
      onClick={handleCopy}
      onMouseDown={(e) => e.preventDefault()} // Evita comportamiento inesperado en botones
    >
      <i className="material-icons">content_copy</i>
    </button>
  );
};

export default CopyToClipboardHTML;

