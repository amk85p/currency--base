import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  const testCasesPLN = [
    { amount: 100, expected: 'PLN 100.00 = $28.57' },
    { amount: 20, expected: 'PLN 20.00 = $5.71' },
    { amount: 200, expected: 'PLN 200.00 = $57.14' },
    { amount: 345, expected: 'PLN 345.00 = $98.57' },
  ];

  const testCasesUSDtoPLN = [
    { amount: 28.57, expected: '$28.57 = PLN 100.00' },
    { amount: 20, expected: '$20.00 = PLN 70.00' },
    { amount: 200, expected: '$200.00 = PLN 700.00' },
    { amount: 100, expected: '$100.00 = PLN 350.00' },
  ];

  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={100} />);
  });

  for (const testObj of testCasesPLN) {
    it('should render proper info about conversion when PLN -> USD', () => {
      // render component
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(testObj.expected);
    });

    // unmount component
    cleanup();
  }

  for (const testObj of testCasesUSDtoPLN) {
    it('should render proper info about conversion when USD -> PLN', () => {
      // render component
      render(<ResultBox from='USD' to='PLN' amount={testObj.amount} />);
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(testObj.expected);
    });

    // unmount component
    cleanup();
  }

  it('should render proper info about conversion when USD -> USD', () => {
    // render component
    render(<ResultBox from='USD' to='USD' amount={28.57} />);
    const output = screen.getByTestId('output');

    expect(output).toHaveTextContent('$28.57 = $28.57');
  });

  it('should render proper info about conversion when PLN -> PLN', () => {
    // render component
    render(<ResultBox from='PLN' to='PLN' amount={100} />);
    const output = screen.getByTestId('output');

    expect(output).toHaveTextContent('PLN 100.00 = PLN 100.00');
  });

  it('should render error message about conversion when amount is lower than zero', () => {
    // render component
    render(<ResultBox from='PLN' to='USD' amount={-1} />);
    const output = screen.getByTestId('output-error');

    expect(output).toHaveTextContent('Wrong value…');
  });
});
