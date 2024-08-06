import { useState, useEffect } from 'react';

const useStringParts = (str, isCardBenefits) => {
  const [stringParts, setStringParts] = useState([]);
  console.log(str)
  console.log(isCardBenefits)

  useEffect(() => {
    if (typeof str === 'string') {
      const words = str.split(' ');

      const parts = {};
      for (let i = 0; i < words.length; i++) {
        parts[`part${i}`] = words[i] || '';
      }

      // if (isCardBenefits) {
      //   setStringParts(prevState => ({
      //     ...prevState,
      //     ...parts,
      //   }));

      //   console.log(stringParts)
      // } else {
      // }
      setStringParts(parts);
    } else {
      console.error('The provided str is not a string:', str);
    }
  }, [str, isCardBenefits]);

  console.log(stringParts)
  return stringParts;
};

export default useStringParts;
