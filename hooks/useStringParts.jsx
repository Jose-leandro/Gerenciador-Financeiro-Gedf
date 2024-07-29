import { useState, useEffect } from 'react';

const useStringParts = (str, isCardFuncio) => {
  const [stringParts, setStringParts] = useState([]);

  useEffect(() => {
    if (typeof str === 'string') {
      const words = str.split(' ');

      const parts = {};
      for (let i = 0; i < words.length; i++) {
        parts[`part${i}`] = words[i] || '';
      }

      if (isCardFuncio) {
        setStringParts(prevState => ({
          ...prevState,
          ...parts,
        }));
      } else {
        setStringParts(parts);
      }
    } else {
      console.error('The provided str is not a string:', str);
    }
  }, [str, isCardFuncio]);
  console.log(stringParts)

  return stringParts;
};

export default useStringParts;
