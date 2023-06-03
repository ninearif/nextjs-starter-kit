import { render, screen } from '@testing-library/react';
import React from 'react';

import Page from '@/layouts/Page';

import { GitUserContext, GitUserContextProvider, GitUserDefaultValue } from './GitUserContext';

const setup = () =>
  render(
    <GitUserContextProvider>
      <Page>Page</Page>
    </GitUserContextProvider>
  );


  describe('GitUserContext contex test', () => {
    const TestComponent = () => {
      const { user, loading } =
        React.useContext(GitUserContext);
      return (
        <div>
          {user && user.name}
        </div>
      );
    };

    describe('When request user session returns data', () => {
      test('proper data is sent to the component', async () => {
        jest.spyOn(API, 'requestUserSession').mockImplementation(() =>
          Promise.resolve({
            is_logged_in: true,
            user: {
              id: 'mock-id',
              email: 'mock-email',
              role: 'mock-role',
            },
          }),
        );
  render(
          <AuthProvider>
            <TestComponent />
          </AuthProvider>,
        );
  await waitFor(() => {
        expect(screen.getByRole('user')).toBeInTheDocument();
      });
  fireEvent.click(screen.getByRole('button',{name: "logout"}))
  await waitFor(() => {
        expect(screen.queryByRole('user')).not.toBeInTheDocument();
      });
    });
  });

describe('GitUserContext context test', () => {
  beforeEach(() => {
    // do some thing
  });

  it('then shows default value', () => {
    render(<GitUserContext.Consumer />);
    expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
      'My Name Is: Unknown'
    );
  });
});
