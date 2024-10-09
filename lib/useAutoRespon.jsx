import { useEffect, useState } from 'react';

function useAutoRespon(sizeResponsive, typeOfStlys, fileOfStyles) {

  const [screenResponsive, setScreenResponsive] = useState(false);


  useEffect(() => {
    console.log("DOMContentLoaded is loading");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    console.log(`Width: ${windowWidth}, Height: ${windowHeight}`);

    if (windowWidth < 600) {
      setScreenResponsive(true)
      console.log(screenResponsive)
      console.log(`Width equal to 600px: ${windowWidth}`);
    }
    // Call the API route to update the file
    const updateFile = async () => {
      try {
        const response = await fetch('/api/updateFile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filePath: fileOfStyles, 
          }),
        });

        const result = await response.json();
        if (response.ok) {
          console.log(result.message);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };

    updateFile();
  }, [fileOfStyles]);  // Run when fileOfStyles changes

  console.log(screenResponsive)

  return screenResponsive;
}

export default useAutoRespon;
