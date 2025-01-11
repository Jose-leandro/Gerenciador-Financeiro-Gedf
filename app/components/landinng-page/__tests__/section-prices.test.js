import { render, screen } from '@testing-library/react';
import SectionPrices from '../sectionPrecies';
import informationCardPrecies from '@/data/informationCardPrecies';


// Rendering Tests (Smoke Tests) and Props Validation Test
test('renders SectionBenefits component correctly with all texts', () => {
    const { str, titlePlan, description, textBenefits,
        funcio1, funcio2, funcio3, funcio4, funcio5, funcio6,
        PlanP, pricer, textBtn, } = informationCardPrecies;

    // Render the component
    render(<SectionPrices dataCardPricies={informationCardPrecies} />);

    // Iterate over cardInformationBenefits and validate that each text is rendered
    Object.values(informationCardPrecies).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

});


// Snapshot Tests
test('matches snapshot', () => {
    const { str, titlePlan, description, textBenefits,
        funcio1, funcio2, funcio3, funcio4, funcio5, funcio6,
        PlanP, pricer, textBtn, } = informationCardPrecies;

    // Render the component
    const { asFragment } = render(<SectionPrices dataCardPricies={informationCardPrecies} />);

    expect(asFragment()).toMatchSnapshot();
});


// Edge Case Tests
test('handles missing or empty props gracefully', () => {
    const { str, titlePlan, description, textBenefits,
        funcio1, funcio2, funcio3, funcio4, funcio5, funcio6,
        PlanP, pricer, textBtn, } = informationCardPrecies;

    // Render the component
    const { asFragment } = render(<SectionPrices dataCardPricies={null} />);

    // Iterate over cardInformationBenefits and validate that each text is rendered
    Object.values(informationCardPrecies).forEach((text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

});
