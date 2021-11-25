import classes from './Studies.module.css'

const Studies = () => {
  return (
    <>
      <div className={classes.titlePage}>
        <h1>STUDIES</h1>
      </div>
      <div className={classes.textDark}>
        <h1 className={classes.titleMain}>FULLSTACK JAVASCRIPT</h1>
        <h2 className={classes.titleSecondary}>BEDU</h2>
        <p>
          Support for Worldwide Commercial Notebooks under Supply Chain department. Main activities include management
          of Bill of Material, configuration of Engineering Rules and overall maintenance of platforms in relation to
          marketing updates, engineering requirements and commercial and public agreements.
        </p>
      </div>
      <div className={classes.textDark}>
        <h1 className={classes.titleMain}>MSC MUSIC ENGINEERING & PRODUCTION</h1>
        <h2 className={classes.titleSecondary}>UNIVERSITY OF SOUTH WALES (CARDIFF)</h2>
        <p>
          Role involved research and adjustments to taxes and paychecks of HPE employees.
          Processing of different IRS forms such as W2, W2-C, W4, LOD, Tax Exemption Certificate and FICA Exemption Certificate.
          Tax research and adjustment for Federal, State and Local taxes. Work done with internal tools and SAP for adjustments in paychecks,
          running reports and queries. Direct support to employees via calls, chat and email.
        </p>
      </div>
      <div className={classes.textDark}>
        <h1 className={classes.titleMain}>DEGREE IN COMMUNICATION SCIENCES</h1>
        <h2 className={classes.titleSecondary}>ITESO</h2>
        <p>
          Monthly collection of invoices and research of customer financial history and pay trend.
          Work involved billing reconciliation, file maintenance, organizing and applying payments and credits,
          developing customer relationship and providing first class customer service.
          Worked with customers in the USA and IBM departments all around America (Brazil, Mexico, Canada and USA).
        </p>
      </div>
    </>
  )
}

export default Studies;