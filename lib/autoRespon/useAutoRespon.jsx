import { useEffect, useState } from 'react';
import { conectionWithApi } from './api';

function useAutoRespon(sizeResponsive, typeOfStlys, fullPath, firstElement, typeOfFirtsElement, list, itemOfList) {

  const [screenResponsive, setScreenResponsive] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    const styles = {
      stylesForImg: {
        prop: 'display',
        value: 'none'
      },
      stylesForList: {
        prop: 'flex-direction',
        value: 'column'
      }
    };

    const handleUpdate = async () => {
      if (sizeResponsive < windowWidth) {
        setScreenResponsive(true);
        console.log(fileOfStyles)
        await conectionWithApi(fullPath, firstElement, styles);  // Await the async function
        console.log(`Width greater than ${sizeResponsive}px: ${windowWidth}`);
      } else {
        console.log(fullPath)
        const result = await conectionWithApi(fullPath, firstElement, styles);  // Await the async function
        console.log("Update file result:", result);
      }
    };

    handleUpdate();  // Trigger the async function

  }, [fullPath, firstElement]);  // Run when fullPath or firstElement changes

  console.log(screenResponsive);

  return screenResponsive;
}

export default useAutoRespon;
