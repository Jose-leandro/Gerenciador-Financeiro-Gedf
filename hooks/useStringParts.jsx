import { useMemo } from 'react';
import devLog from '@/utils/logger';

const useStringParts = (str) => {
  // Memoize the computed parts so that it only recalculates when `str` changes
  const stringParts = useMemo(() => {
    if (typeof str !== 'string') {
      devLog(`The provided str is not a string:${str}'`, true);
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
