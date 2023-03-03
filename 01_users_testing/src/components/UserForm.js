import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUserAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}
export default UserForm;
