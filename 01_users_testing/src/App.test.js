import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can recieve a new user and show it on a list', async () => {
  render(<App />);

  // Find the inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Simulate typing in the inputs
  user.click(nameInput);
  user.keyboard('akash');
  user.click(emailInput);
  user.keyboard('akash@gmail.com');

  // Submit the form
  const button = screen.getByRole('button');
  user.click(button);

  // See if name and email is added onto the screen or not.
  // screen.debug();

  const name = await screen.findByRole('cell', { name: 'akash' });
  const email = await screen.findByRole('cell', { name: 'akash@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
