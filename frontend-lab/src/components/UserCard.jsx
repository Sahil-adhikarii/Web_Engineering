import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </Link>
    </li>
  );
}
