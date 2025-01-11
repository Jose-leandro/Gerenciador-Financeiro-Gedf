import informationCardBenefits from '@/data/informationCardBenefits';
import { render, screen } from '@testing-library/react';


// Rendering Tests (Smoke Tests) and Props Validation Test
test('renders SectionBenefits component correctly with all texts', () => {
    const { cardInformationBenefits, cardBenefits } = informationCardBenefits;

    // Render the component
    render(<SectionBenefits cardInformationBenefits={cardInformationBenefits} cardBenefits={cardBenefits} />);

    // Iterate over cardInformationBenefits and validate that each text is rendered
    Object.values(cardInformationBenefits).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    // Iterate over cardBenefits and validate that each text is rendered
    Object.values(cardBenefits).forEach((question) => {
        expect(screen.getByText(new RegExp(question, 'i'))).toBeInTheDocument();
    });
});


// Snapshot Tests
test('matches snapshot', () => {
    const { cardInformationBenefits, cardBenefits } = informationCardBenefits;

    // Render the component
    const { asFragment } = render(<SectionBenefits cardInformationBenefits={cardInformationBenefits} cardBenefits={cardBenefits} />);

    expect(asFragment()).toMatchSnapshot();
});


// Edge Case Tests
test('handles missing or empty props gracefully', () => {
    const { cardInformationBenefits, cardBenefits } = informationCardBenefits;

    // Render the component
    const { asFragment } = render(<SectionBenefits cardInformationBenefits={null} cardBenefits={null} />);


    // Iterate over cardInformationBenefits and validate that each text is rendered
    Object.values(cardInformationBenefits).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    // Iterate over cardBenefits and validate that each text is rendered
    Object.values(cardBenefits).forEach((question) => {
        expect(screen.getByText(new RegExp(question, 'i'))).toBeInTheDocument();
    });
});

