import { useEffect, useState } from "react";


function UserList() {

  type User = {
  id: number | string; // depending on your data source
  name: string;
  email: string;
};

  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  };

  const handleAddUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(() => {
      setName("");
      setEmail("");
      fetchUsers();
    })
    .catch(err => console.error("Error adding user:", err));
  };

  const handleDelete = (id: unknown) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        fetchUsers();
      } else {
        console.error("Delete failed:", data.error);
      }
    })
    .catch(err => console.error("Error deleting user:", err));
  };

  return (
    <div>
      <h1>Users</h1>

      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDelete(user.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
