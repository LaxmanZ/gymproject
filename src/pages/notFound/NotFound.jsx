import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section className="container notfound__container">
      <h2>Page Not found</h2>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
