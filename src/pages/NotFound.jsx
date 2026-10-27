import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo.js';
import { notFound } from '../data/routes.js';

export default function NotFound() {
  useSeo({ title: notFound.title, description: notFound.description, path: '/', noindex: true });
  return (
    <section className="notfound container">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn btn--primary">
        Home
      </Link>
    </section>
  );
}
