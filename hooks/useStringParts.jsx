import { useMemo } from 'react';

const useStringParts = (str) => {
  // Memoize the computed parts so that it only recalculates when `str` changes
  const stringParts = useMemo(() => {
    if (typeof str !== 'string') {
      return {};
    }

    const words = str.split(' ');
    return words.reduce((parts, word, index) => ({
      ...parts,
      [`part${index}`]: word || '',
    }), {});
  }, [str]);

  return stringParts;
};

export default useStringParts;
