import { useEffect, RefObject } from 'react';

/**
 * Hook para detectar clicks fuera de un elemento
 * @param ref - Referencia al elemento que queremos monitorear
 * @param handler - Función que se ejecuta cuando se hace click fuera
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref?.current;
      
      // No hacer nada si el click fue dentro del elemento o si no existe
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      
      // Ejecutar el handler si el click fue fuera
      handler(event);
    };

    // Agregar listeners
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
