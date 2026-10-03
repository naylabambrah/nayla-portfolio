import { NavLink, Link } from 'react-router-dom';

// Each object describes one link in the navigation bar
const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Me' },
];

// Navigation bar shown at the top of every page
function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src="/logo.svg" alt="My logo" width="40" height="40" />
        <span>Your Name</span>
      </Link>
      <nav>
        {navigationLinks.map((link) => (
          <NavLink key={link.path} to={link.path} end>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;