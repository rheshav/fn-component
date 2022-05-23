import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <i className="fa fa-fw fa-home"></i>Home
      </Link>
      <Link to="/service">
        <i className="fa fa-fw fa-wrench"></i>Services
      </Link>
      {/* <a href="#clients">
        <i class="fa fa-fw fa-user"></i>Clients
      </a>
      <a href="#contact">
        <i class="fa fa-fw fa-envelope"></i>Contact
      </a> */}
    </div>
  );
};

export default Navigation;
