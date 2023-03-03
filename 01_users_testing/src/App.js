import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={handleUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
