import { render, screen } from '@testing-library/react';
const { default: CardComponent } = require("../cardComponent");

// Rendering Tests (Smoke Tests)
test('renders CardComponent component correctly', () => {
    const mockDataWichTypeOfCard = "cardBenefits";
  
    const mockdatInformationCards = {
      icon: 'icons8-analysis-64.png',
      title: 'Master Your Finances, Achieve Your Dreams!',
      description: 'Take control of your expenses and plan for your future with our tools. Achieve financial freedom and live a prosperous life. Start today!'
    };
  
    const { getByText } = render(<CardComponent wichTypeOfCard={mockDataWichTypeOfCard} dataInformationCards={mockdatInformationCards} />);
    
    // Validate that content renders
    expect(getByText(/Master Your Finances, Achieve Your Dreams!/)).toBeInTheDocument();
  });
  

// Snapshot Tests
test('matches snapshot', () => {
    const mockDataWichTypeOfCard = "cardBenefits";
  
    const mockdatInformationCards = {
      icon: 'icons8-analysis-64.png',
      title: 'Master Your Finances, Achieve Your Dreams!',
      description: 'Take control of your expenses and plan for your future with our tools. Achieve financial freedom and live a prosperous life. Start today!'
    };
  
    const { asFragment } = render(<CardComponent wichTypeOfCard={mockDataWichTypeOfCard} dataInformationCards={mockdatInformationCards} />);
  
    expect(asFragment()).toMatchSnapshot();
  });
  


//   Props Validation Test
test('renders correctly with provided props', () => {
    const mockDataWichTypeOfCard = "cardBenefits";
  
    const mockdatInformationCards = {
      icon: 'icons8-analysis-64.png',
      title: 'Master Your Finances, Achieve Your Dreams!',
      description: 'Take control of your expenses and plan for your future with our tools. Achieve financial freedom and live a prosperous life. Start today!'
    };
  
    render(<CardComponent wichTypeOfCard={mockDataWichTypeOfCard} dataInformationCards={mockdatInformationCards} />);
  
    expect(screen.getByText(/Master Your Finances, Achieve Your Dreams!/)).toBeInTheDocument();
    expect(screen.getByText(/Take control of your expenses and plan for your future with our tools./)).toBeInTheDocument();
    expect(screen.getByAltText(/icon/)).toBeInTheDocument();
  });
  

// Edge Case Tests
  test('handles missing or empty props gracefully', () => {
    render(<CardComponent wichTypeOfCard={null} dataInformationCards={null} />);
  
    // Ensure no crashes and default behavior is shown
    expect(screen.getByText(/Master Your Finances, Achieve Your Dreams!/)).toBeInTheDocument(); 
    expect(screen.getByAltText(/icon/)).toBeInTheDocument(); 
  });