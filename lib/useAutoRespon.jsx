import { useEffect } from 'react';

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
 * Throttle function to limit the rate at which a function can fire.
 * @param {supportElem} supportElem - The function to throttle.
 * @param {positionElem} positionElem - The time limit in milliseconds.
 * @return {Function} - The throttled function.
 */
function useAutoRespon(sizeResponsive, typeOfStlys) {
    // Debugging logs to understand the state of refs
    console.log('sizeResponsive:', sizeResponsive);
    console.log('typeOfStlys:', typeOfStlys);
    //   console.log('supportElem.current:', supportElem?.current);
    // console.log('positionElem:', positionElem);
    //   console.log('positionElem.current:', positionElem?.current);

    useEffect(() => {
        console.log("DOMContentLoaded is loading");

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        console.log(`Width: ${windowWidth}, Height: ${windowHeight}`);

        if(windowWidth < 600) {
            console.log(`Width equal to 600px: ${windowWidth}`)
        }

        // Function to apply styles
        // const applyStyles = () => {
        //   if (supportElem.current && positionElem.current) {
        //     console.log(supportElem.current)
        //     const { clientWidth: width, clientHeight: height } = supportElem.current;
        //     console.log('Applying styles', { width, height });

        //     const getOffset = (elem) => {
        //       let x = 0;
        //       let y = 0;
        //       while (elem) {
        //         x += elem.offsetLeft - elem.scrollLeft;
        //         y += elem.offsetTop - elem.scrollTop;
        //         elem = elem.offsetParent;
        //       }
        //       console.log(x)
        //       console.log(y)
        //       return { x, y };
        //     };

        //     const { x, y } = getOffset(supportElem.current);

        //     Object.assign(positionElem.current.style, {
        //       position: 'absolute',
        //       left: `${x}px`,
        //       top: `${y}px`,
        //       width: `${width}px`,
        //       height: `${height}px`,
        //     });
        //   }
        // };


        // // Function to check responsiveness
        // const checkResponsiveness = () => {
        //   console.log(`Checking responsiveness: ${supportElem.current}, ${positionElem.current}`);

        //   if (supportElem.current && positionElem.current) {
        //     const supportOffset = getOffset(supportElem.current);
        //     const positionOffset = getOffset(positionElem.current);

        //     if (supportOffset.x !== positionOffset.x || supportOffset.y !== positionOffset.y) {
        //       applyStyles();
        //     }
        //   }
        // };

        //     if (supportElem.current && positionElem.current) {
        //       applyStyles(); // Apply styles based on the elements' refs

        //       // Add window resize event listener, throttled to improve performance
        //       const handleResize = throttle(() => {
        //         checkResponsiveness(); // Adjust styling on window resize
        //       }, 200);

        //       window.addEventListener('resize', handleResize);

        //       // Clean up the event listeners on component unmount
        //       return () => {
        //         window.removeEventListener('resize', handleResize);
        //       };
        //     }
    }, []);  // Empty dependency array means this effect runs only once on mount

    return null;
}

export default useAutoRespon;
