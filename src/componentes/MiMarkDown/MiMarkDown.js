import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const MiMarkDownEfecto = ({ markdownText, id, markdownText2, typingSpeed }) => {
  const [displayedMarkdown, setDisplayedMarkdown] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const combinedMarkdownRef = useRef(''); // Usamos una ref para el texto combinado

  // Función para resetear el estado de la animación
  const resetAnimation = (newMarkdown) => {
    setDisplayedMarkdown('');
    setCurrentIndex(0);
    combinedMarkdownRef.current = newMarkdown;
  };

  useEffect(() => {
    // Combina markdownText y markdownText2 si markdownText2 está definido
    const combinedMarkdown = markdownText2
      ? `${markdownText}\n---\n${markdownText2}`
      : markdownText;

    // Comprueba si el texto combinado ha cambiado
    if (combinedMarkdown !== combinedMarkdownRef.current) {
      resetAnimation(combinedMarkdown);
      return; // Sale del useEffect para que se ejecute de nuevo con el nuevo texto
    }

    if (currentIndex < combinedMarkdownRef.current.length) {
      const timer = setTimeout(() => {
        setDisplayedMarkdown(combinedMarkdownRef.current.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta o las props cambian
    }
  }, [markdownText, markdownText2, currentIndex, typingSpeed]); // Dependencias importantes: las props que pueden cambiar

  const htmlContent = DOMPurify.sanitize(marked(displayedMarkdown));

  return <div id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MiMarkDownEfecto;