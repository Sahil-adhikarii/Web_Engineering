import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Return home</Link>
    </section>
  );
}
