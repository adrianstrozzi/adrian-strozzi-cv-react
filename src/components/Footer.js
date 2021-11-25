import classes from './Footer.module.css'
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/profile.jpg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        Made by Adrian Strozzi
      </p>
      <p>
        adrianstrozzi@gmail.com
      </p>
      <p>
        Mobile: +52 3332323939
      </p>
    </div>
  )
}

export default Footer


