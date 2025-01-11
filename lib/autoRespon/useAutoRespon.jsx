import { useEffect, useRef, useState, useCallback } from 'react';
import { applyMenuStyles } from './utils/styleUtils';
import { useVerificationOfDesigMenu } from './utils/verificationOfDesigMenu';

/**
 * Throttle function to limit the rate at which a function can fire.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The time limit in milliseconds.
 * @return {Function} - The throttled function.
 */
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Custom hook for responsive behavior based on window size.
 *
 * @param {number} sizeThreshold - The window width threshold in pixels.
 * @param {object} elements - An object containing refs to target elements.
 * @param {string} type - The type of responsiveness to apply ("menu" or other custom logic).
 */
function useAutoRespon(sizeThreshold, elements, type) {
  const { div, menuIcon, divMenu, menu, menuUsuario, menuItem, usuarioLogin, usuarioSing } = elements;
  console.log(elements)
  const objectReferencies =  { div, menuIcon, divMenu, menu, menuUsuario, menuItem, usuarioLogin, usuarioSing };
  console.log('Object References:', objectReferencies);
  
  const [isOpen, setIsOpen] = useState(false);

  const  typeOfListener = {
    mouseenter: {backgroundColor: "#242b36", padding: "12px", marginBottom: "2px"},
    mouseleave: {backgroundColor: "#0a0f17", padding: "10px"}, 
    click: {
      firstClick: {
        backgroundColor: "#242b36",
        padding: "10px"
      },
      secondClick: {
        backgroundColor: "#0f1114",
        padding: "3px"
      }
    }
  }

  const useToggleMenu = (toggleStyles) => {

    useEffect(() => {
      const refMenuIcon = menuIcon.classOfElement?.current;
      const refDivMenu = divMenu.classOfElement?.current;
      console.log(refDivMenu)
      console.log(refMenuIcon)
      if (!refMenuIcon) return;
  
      const toggleMenu = () => {
        console.log("clicado")
        setIsOpen((prevState) => {
          const newState = !prevState;
  
          // Apply styles based on the new state
          if (newState) {
            // Menu is closed
            Object.assign(refDivMenu.style, toggleStyles.closed);
          } else {
            // Menu is opened
            Object.assign(refDivMenu.style, toggleStyles.open);
          }
  
          return newState;
        });
      };
  
      // Add event listener for click
      refMenuIcon.addEventListener("click", toggleMenu);
  
      // Cleanup event listener
      return () => {
        refMenuIcon.removeEventListener("click", toggleMenu);
      };
    }, [toggleStyles]);
  
    return isOpen; // Return the menu state for optional external use
  };


  // Define the styles for open and closed states
  const toggleStyles = {
    open: {
      display: "flex", 
      padding: "10px",
    },
    closed: {
      display: "none", 
      padding: "10px",
    },
  };

  // Use the custom hook
  useToggleMenu(toggleStyles);
  

  const [wasClickButtonMenu, setWasClickButtonMenu] = useState(false)


  const handleResize = useCallback(() => {

    applyMenuStyles(div, { justifyContent: 'space-between' });

    applyMenuStyles(divMenu,
      {
      flexDirection: 'column', position: 'fixed',
        height: '100vh', width: '50%', backgroundColor: '#242b37',
        borderRadius: '20px', right: '12px', top: '52px'
      });

    applyMenuStyles(menu,
      {
        display: 'flex', flexDirection: 'column', alignItems: 'start',
        justifyContent: 'center', width: 'auto'
      });

    applyMenuStyles(menuIcon, {
      display: 'flex', marginRight: '12px', position: 'fixed',
      right: '12px', top: '5px',
      borderRadius: '100%', background: '#242b37',
      padding: '10px'
    });

    applyMenuStyles(menuUsuario, {
      display: 'flex', flexDirection: 'column',
      margin: '0px 0px', alignItems: 'center'
    });

    applyMenuStyles(menuItem, { margin: '25px 0px 5px 30px', width: '50%' })

    applyMenuStyles(usuarioLogin, { width: '210px', marginTop: '30px' })

    applyMenuStyles(usuarioSing, { width: '210px', marginTop: '30px', marginLeft: '0em' })


    const resultOfVerificationOfDesigMenu = useVerificationOfDesigMenu(sizeThreshold, objectReferencies)
    console.log(resultOfVerificationOfDesigMenu)

  }, [sizeThreshold, type, divMenu, menu, menuIcon]);

  useEffect(() => {
    // Initialize styles on mount
    handleResize();

    

  }, [handleResize]);

  return null;
}

export default useAutoRespon;
