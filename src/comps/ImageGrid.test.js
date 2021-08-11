import { render, screen } from '@testing-library/react';
import ImageGrid from './ImageGrid';
import images from '../../mocks/images.json';

test('should render no images', () => {
  render(<ImageGrid docs={[]} />);

  // should have 0 images
  const listItems = screen.queryAllByRole('img');
  expect(listItems).toHaveLength(0);
});

test('should render two images', () => {
  render(<ImageGrid docs={images} />);

  // should have 2 images
  const listItems = screen.getAllByRole('img');
  expect(listItems).toHaveLength(2);
});