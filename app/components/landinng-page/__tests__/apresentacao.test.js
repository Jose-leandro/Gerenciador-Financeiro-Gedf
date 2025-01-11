import { render, screen } from '@testing-library/react';
import { ApresentacionInicial } from './ApresentacionInicial';
import useStringParts from '../../../hooks/useStringParts';
import { render, screen } from '@testing-library/react';

jest.mock('../../../hooks/useStringParts', () => jest.fn());

// Snapshot Test
test('renders ApresentacionInicial component correctly', () => {
  const mockData = {
    str: "Hello, world!",
    description: "This is a test description.",
    textButton: "Click me",
    alt: "Test image alt text",
  };

  const { asFragment } = render(<ApresentacionInicial dataInformationApresentacion={mockData} />);
  expect(asFragment()).toMatchSnapshot();
});



// Unit Test for String Manipulation
test('renders string parts correctly', () => {
  useStringParts.mockReturnValue({
    part0: "Hello",
    part1: "world",
    part2: "from",
    part3: "React",
    part4: "testing",
    part5: "library",
    part6: "with",
    part7: "Jest",
  });

  const mockData = {
    str: "Hello world from React testing library with Jest",
    description: "This is a test description.",
    textButton: "Click me",
    alt: "Test image alt text",
  };

  render(<ApresentacionInicial dataInformationApresentacion={mockData} />);

  expect(screen.getByText(/Hello/)).toBeInTheDocument();
  expect(screen.getByText(/world from React/)).toBeInTheDocument();
  expect(screen.getByText(/testing library with Jest/)).toBeInTheDocument();
});


// Integration Test
test('integrates correctly with useStringParts', () => {
  useStringParts.mockReturnValue({
    part0: "Hello",
    part1: "world",
    part2: "from",
    part3: "React",
    part4: "integration",
    part5: "test",
    part6: "using",
    part7: "Jest",
  });

  const mockData = {
    str: "Hello world from React integration test using Jest",
    description: "This is a test description.",
    textButton: "Click me",
    alt: "Test image alt text",
  };

  render(<ApresentacionInicial dataInformationApresentacion={mockData} />);

  const header = screen.getByText(/Hello world from React/);
  expect(header).toBeInTheDocument();

  const description = screen.getByText(/This is a test description./);
  expect(description).toBeInTheDocument();
});
