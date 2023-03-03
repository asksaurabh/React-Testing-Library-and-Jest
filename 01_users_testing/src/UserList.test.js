import { render, screen } from '@testing-library/react';
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
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(users.length + 1);
});

// test('Render the email and name of each user', () => {});
