import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('pages/index', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Next\.js Starter Kit/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
