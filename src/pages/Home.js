import profileCon from '../assets/images/profileConsole.JPEG'
import classes from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={classes.titlePage}>
        <h1>WELCOME TO MY REACT CV</h1>
      </div>
      <div className={classes.profile}>
        <img src={profileCon}
          alt="profileConsole"
        />
      </div>
      <div className={classes.textDark}>
        <p>
          This is a simple CV I did to practice basic React concepts.
          I started my journey as a Web Developer in 2020 and felt highly inclined towards FrontEnd
          development.
          I've always been passionate about the UI/UX in Apps
          and Webpages we use on a daily basis.
          I believe that high quality UI/UX can contribute to make our lives
          easier and bring joy while interacting with these tools.
        </p>
      </div>
      <div className={classes.textDark}>
        <h1 className={classes.titleMain}>ABOUT ME</h1>
        <p>
          I've been always driven by creativity. I'm passionate about music,
          so much that I went all the way to the UK to study Music Engineering and Production.
          I love films, TV series and videogames (specially RPGs). I love learning about tech in general
          and I'm always interested in the latest news regarding software and hardware.
        </p>
      </div>
    </>
  )
}

export default Home;