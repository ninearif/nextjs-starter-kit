import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('Navbar component test', () => {
  it('shoud include github button', () => {
    render(<Navbar />);
    expect(screen.findByRole('button')).resolves.toHaveTextContent(
      'VIEW ON GITHUB'
    );
  });
});

describe('Navbar component snapshot test', () => {
  it('render Navbar unchanged', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
