import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();

  return (
    <section>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </section>
  );
}
