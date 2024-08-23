import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="mainLinksContainer">
      <ul className="appLinks">
        <li>
          <NavLink exact to="/" activeClassName="active" className="appLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="appLink">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active" className="appLink">
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
