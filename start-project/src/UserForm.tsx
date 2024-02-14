import  { useState, type FormEvent } from "react";
import { User } from "./App";

type UserFormProps = {
  onUserAdd: (user: User) => void;
}

const UserForm = ({onUserAdd}: UserFormProps) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUserAdd({name, email});
    clearFormInputs();
  };

  const clearFormInputs = () => {
    setName("");
    setEmail("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
