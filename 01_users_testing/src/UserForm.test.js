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
  // Not the best Implementation
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  render(<UserForm onUserAdd={callback} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing a name
  user.click(nameInput);
  user.keyboard('michael');

  // Simulate typing an email
  user.click(emailInput);
  user.keyboard('michael@gamil.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    name: 'michael',
    email: 'michael@gamil.com',
  });
});
