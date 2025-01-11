import { render, screen } from '@testing-library/react';
import ComumQuestions from '../comumQuestions';
import informationCreateCardQuestions from '@/data/informationCardQuestions';

// Rendering Tests (Smoke Tests) and Props Validation Test
test('renders ComumQuestions component correctly with all texts', () => {
    const { cardInformationQuestions, cardQuestions } = informationCreateCardQuestions;

    // Render the component
    render(<ComumQuestions cardInformationQuestions={cardInformationQuestions} cardQuestions={cardQuestions} />);

    // Iterate over cardInformationQuestions and validate that each text is rendered
    Object.values(cardInformationQuestions).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    // Iterate over cardQuestions and validate that each text is rendered
    Object.values(cardQuestions).forEach((question) => {
        expect(screen.getByText(new RegExp(question, 'i'))).toBeInTheDocument();
    });
});


// Snapshot Tests
test('matches snapshot', () => {
    const { cardInformationQuestions, cardQuestions } = informationCreateCardQuestions;
  
    const { asFragment } = render(<ComumQuestions cardInformationQuestions={cardInformationQuestions} cardQuestions={cardQuestions} />);
  
    expect(asFragment()).toMatchSnapshot();
  });

// Edge Case Tests
  test('handles missing or empty props gracefully', () => {
    const { cardInformationQuestions, cardQuestions } = informationCreateCardQuestions;
  
    const { asFragment } = render(<ComumQuestions cardInformationQuestions={null} cardQuestions={null} />);
  
  
    // Iterate over cardInformationQuestions and validate that each text is rendered
    Object.values(cardInformationQuestions).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    // Iterate over cardQuestions and validate that each text is rendered
    Object.values(cardQuestions).forEach((question) => {
        expect(screen.getByText(new RegExp(question, 'i'))).toBeInTheDocument();
    });
  });
