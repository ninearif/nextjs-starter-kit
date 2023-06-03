import { render, screen } from '@testing-library/react';

import Section from '@/components/Section/Section';

describe('Section component test', () => {
  it('Section is rendered as expected.', () => {
    render(<Section>Section</Section>);

    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  it('Section is rendered as expected.', () => {
    render(<Section className="test">Section</Section>);

    expect(screen.getByTestId('section-component')).toHaveClass('test');
  });
});
