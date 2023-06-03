import { render, screen } from '@testing-library/react';

import NavbarItem from '../NavbarItem';

describe('NavbarItem component test', () => {
  it('NavbarItem is rendered as expected.', () => {
    render(<NavbarItem />);

    expect(screen.getByText('NavbarItem')).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toHaveTextContent(/NavbarItem/);
    // expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
    // expect(screen.getByRole("img")).toBeInTheDocument();
    // some cheat sheet can be found here:
    // https://testing-library.com/docs/react-testing-library/cheatsheet/
  });
});

describe('NavbarItem component snapshot test', () => {
  it('render NavbarItem unchanged', () => {
    const { container } = render(<NavbarItem />);
    expect(container).toMatchSnapshot();
  });
});
