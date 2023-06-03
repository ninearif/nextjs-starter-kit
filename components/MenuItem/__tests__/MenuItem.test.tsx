import { render, screen } from '@testing-library/react';

import MenuItem from '../MenuItem';

describe('MenuItem component test', () => {
  it('MenuItem is rendered as expected.', () => {
    render(<MenuItem href="#test" text="test menu" icon />);

    expect(screen.getByText('test menu')).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toHaveTextContent(/MenuItem/);
    // expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
    // expect(screen.getByRole("img")).toBeInTheDocument();
    // some cheat sheet can be found here:
    // https://testing-library.com/docs/react-testing-library/cheatsheet/
  });
});

describe('MenuItem component snapshot test', () => {
  it('render MenuItem unchanged', () => {
    const { container } = render(<MenuItem />);
    expect(container).toMatchSnapshot();
  });
});
