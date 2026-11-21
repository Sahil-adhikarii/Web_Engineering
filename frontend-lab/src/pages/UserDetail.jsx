import { Link, useParams } from 'react-router-dom';

const users = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com' },
  { id: 2, name: 'Niraj Bhattarai', email: 'niraj@example.com' },
  { id: 3, name: 'Maya Patel', email: 'maya@example.com' },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
        <Link to="/users">Back to users</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Link to="/users">Back to users</Link>
    </section>
  );
}
