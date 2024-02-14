import UserForm from './UserForm'
import UserList from './UserList';
import { useState } from 'react'

export type User = {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  )
}

export default App
