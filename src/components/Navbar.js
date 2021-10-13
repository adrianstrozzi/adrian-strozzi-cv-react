import classes from './Navbar.module.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
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