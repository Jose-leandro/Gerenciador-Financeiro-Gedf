import { useCallback } from 'react';
import { applyAddEventListener } from './addEventListenerUtilis';

/**
 * Applies styles to an element and adds event listeners if needed.
 *
 * @param {Object} element - The element object containing classOfElement and type.
 * @param {Object} styles - The styles to apply to the element.
 */
export const applyMenuStyles = (element, styles) => {
  if (Array.isArray(element.classOfElement) && element.classOfElement) {
    element.classOfElement.forEach((el) => {
      if (el) Object.assign(el.style, styles);
    });
  } else {
    const currentElement = element.classOfElement?.current;
    if (currentElement) Object.assign(currentElement.style, styles);
  }

  if (element.type === "image" && element.classOfElement?.current) {
    const typeOfListener = {
      mouseenter: { padding: "12px", marginBottom: "2px" },
      mouseleave: { padding: "10px" },
    };
    applyAddEventListener(element, typeOfListener);
  }
}
