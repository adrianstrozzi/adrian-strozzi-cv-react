import profileCon from '../assets/images/profileConsole.JPEG'
import classes from './About.module.css'

const About = () => {
  return (
    <>
      <div>
        <h1>ABOUT ME</h1>
      </div>
      <div className={classes.profile}>
        <img src={profileCon}
          alt="profileConsole"
        />
      </div>
      <div className={classes.text}>
        <p>
          Welcome to my demo page. This is a simple CV page I did to practice basic React JS concepts.<br />
          I started my journey as a Web Developer in 2019 and felt highly inclined towards FrontEnd
          development. <br />
          I've always been passionate about the <b>UI/UX</b> in Apps
          and Webpages we use on a daily basis.<br />
          I believe that high quality <b>UI/UX</b> can contribute to make our lives
          easier and bring joy while interacting with these tools.<br />
        </p>
      </div>
    </>
  )
}

export default About;