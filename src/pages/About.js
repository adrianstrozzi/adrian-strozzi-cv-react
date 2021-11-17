import profileCon from '../assets/images/profileConsole.JPEG'
import classes from './About.module.css'

const About = () => {
  return (
    <>
      <div className={classes.title}>
        <h1>WELCOME TO MY REACT DEMO CV PAGE</h1>
      </div>
      <div className={classes.profile}>
        <img src={profileCon}
          alt="profileConsole"
        />
      </div>
      <div className={classes.textintro}>
        <p>
          This is a simple CV page I did to practice basic React JS concepts.
          I started my journey as a Web Developer in 2020 and felt highly inclined towards FrontEnd
          development.
          I've always been passionate about the UI/UX in Apps
          and Webpages we use on a daily basis.
          I believe that high quality UI/UX can contribute to make our lives
          easier and bring joy while interacting with these tools.
        </p>
      </div>
      <div className={classes.textabout}>
        <h1>ABOUT ME</h1>
        <p>
          I've been always driven by creativity. I'm passionate about music,
          so much that I went all the way to the UK to study Music Engineering and Production.
          I love films, TV series and videogames (specially RPGs).
        </p>
      </div>
    </>
  )
}

export default About;