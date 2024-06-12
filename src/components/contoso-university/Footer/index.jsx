import './index.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-top footer text-muted">
      <div className="container">
        &copy; 2024 - <Link to="/">Proyecta</Link>
        {import.meta.env.MODE !== 'production' && (` - v${import.meta.env.VITE_VERSION}`)}
      </div>
    </footer>
  );
}

export default Footer;
