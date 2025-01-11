import { applyMenuStyles } from "./styleUtils";

/**
 * Applies avent listeners 
 *
 * @param {Object} element - The element object containing classOfElement and type.
 * @param {Object} styles - The styles to apply to the element.
 */
export const applyAddEventListener = (element, typeOfListener) => {
    const elementRef = element.classOfElement?.current;
  
    if (!elementRef) return;
  
    Object.entries(typeOfListener).forEach(([eventType, styles]) => {
        elementRef.addEventListener(eventType, () => {
          applyMenuStyles(element, styles);
        });
    });
  };