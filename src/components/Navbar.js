import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/profile.jpg'


const Navbar = () => {
  return (

    <header className={classes.header}>
      <div className={classes.image}>
        <img
          src={logo}
          alt="profile"
        />
      </div>

      <nav>
        <ul>
          {/* <li>z
            <img
              src={logo}
              alt="profile"
            />
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/studies">Studies</Link>
          </li>
          <li>
            <Link to="/extras">Extras</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;