import { render, screen, within } from '@testing-library/react';
import UserList from './components/UserList';

function renderComponent() {
  const users = [
    {
      name: 'Saurabh',
      email: 'saurabh@gmail.com',
    },
    {
      name: 'Rishabh',
      email: 'rishabh@gmail.com',
    },
  ];

  render(<UserList users={users} />);
  return {
    users,
  };
}

test('Render one row per user', () => {
  renderComponent();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(2);
});

test('Render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
