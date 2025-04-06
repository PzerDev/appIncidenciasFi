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

const CopyToClipboardHTML = ({ targetId, tipoEscalado }) => {

  const handleCopy = (event) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const isShiftPressed = event.shiftKey;
  
      if (isShiftPressed) {
        let lines = targetElement.innerText.split("\n").filter(line => line.trim() !== "");
        let trimmedText = "";
  
        if (targetId === "markdownNotaEscalado" || targetId === "markdownNotaReclamoApi") {
          if (lines.length > 6) {
            lines = lines.slice(1, - 2);
          } else {
            lines = [];
          }
          trimmedText = lines.join("\n");
        } else {
          trimmedText = lines.join("\n");
        }
  
        navigator.clipboard.writeText(trimmedText).then(
          () => {
            console.log("¡Texto copiado sin formato (condicional)!");
          },
          (err) => {
            console.error("Error al copiar texto:", err);
          }
        );
      } else {
        const htmlContent = targetElement.innerHTML;
  
        const blob = new Blob([htmlContent], { type: "text/html" });
        const data = [new ClipboardItem({ "text/html": blob })];
  
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

