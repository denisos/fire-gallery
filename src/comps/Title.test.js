import { render, screen } from '@testing-library/react';
import Title from './Title';

test('should render title', () => {
  render(<Title />);

  // should have title
  const titleText = screen.getByText(/our Pictures/i);
  expect(titleText).toBeInTheDocument();
});