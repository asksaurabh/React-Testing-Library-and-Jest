import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './components/UserForm';

test('UserForm shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('UserForm calls on onUserAdd when the from is submitted', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing a name
  user.click(nameInput);
  user.keyboard('michael');

  // Simulate typing an email
  user.click(emailInput);
  user.keyboard('michael@gmail.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'michael',
    email: 'michael@gmail.com',
  });
});
