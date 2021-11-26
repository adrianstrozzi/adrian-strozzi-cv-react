import classes from './Extras.module.css'

const Extras = () => {
  return (
    <>
      <div className={classes.titlePage}>
        <h1>EXTRAS</h1>
      </div>
      <div className={classes.textDark}>
        <h1 className={classes.titleMain}>POKEMON API</h1>
        <p>
          Play with the Pokémon API!
        </p>
      </div>
    </>
  )
}

export default Extras;