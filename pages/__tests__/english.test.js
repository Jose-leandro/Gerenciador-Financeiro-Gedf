import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { English } from '../english';

describe('Verification of the componete English', () => {
  it('The componete english was in the langugem of english', () => {
    const { pageInEnglish } = render(<English />);
    expect(pageInEnglish)
  });
});
