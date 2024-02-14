import { User } from "./App";

type UserListProps = {
  users: User[];
};
const UserList = ({ users }: UserListProps) => {
  const renderedUsers = users.map((item) => {
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.email}</td>
      </tr>
    );
  });
  return (
    <table border={2}>
      <thead>
        <th>name</th>
        <th>email</th>
      </thead>
      <tbody>
        {users.length > 0 ? (
          renderedUsers
        ) : (
          <tr>
            <td colSpan={2}> Not users find yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
