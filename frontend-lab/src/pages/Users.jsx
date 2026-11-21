import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import UserCard from '../components/UserCard.jsx';

const users = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com' },
  { id: 2, name: 'Niraj Bhattarai', email: 'niraj@example.com' },
  { id: 3, name: 'Maya Patel', email: 'maya@example.com' },
];

export default function Users() {
  const [search, setSearch] = useLocalStorage('users-search', '');
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? 0 : window.innerWidth,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <h1>Users</h1>
      <p>Viewport width: {viewportWidth}px</p>
      <label>
        Search users:{' '}
        <input value={search} onChange={(event) => setSearch(event.target.value)} />
      </label>
      <ul className="user-list">
        {visibleUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
}
