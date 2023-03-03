import { render, screen, within } from '@testing-library/react';
import UserList from './components/UserList';

test('Render one row per user', () => {
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
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(2);
});

// test('Render the email and name of each user', () => {});
