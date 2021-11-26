import classes from './Footer.module.css'
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/profile.jpg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        Made by <a href="https://github.com/adrianstrozzi">Adrian Strozzi </a>
      </p>
      <p>
        adrianstrozzi @gmail.com
      </p>
      <p>
        Mobile: +52 3332323949
      </p>
    </div>
  )
}

export default Footer


