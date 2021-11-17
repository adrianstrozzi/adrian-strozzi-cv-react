import classes from './Work.module.css'

const Work = () => {
  return (
    <>
      <div className={classes.titlePage}>
        <h1>WORK EXPERIENCE</h1>
      </div>
      <div className={classes.textHP}>
        <h1 className={classes.titleMain}>HP INC.</h1>
        <h2>PROGRAM COORDINATOR</h2>
        <p>
          Support for Worldwide Commercial Notebooks under Supply Chain department. Main activities include management
          of Bill of Material, configuration of Engineering Rules and overall maintenance of platforms in relation to
          marketing updates, engineering requirements and commercial and public agreements.
        </p>
      </div>
      <div className={classes.textHPE}>
        <h1 className={classes.titleMain}>HP ENTERPRISE</h1>
        <h2 className={classes.titleSecondary}>PAYROLL USA TAXES SPECIALIST</h2>
        <p>
          Role involved research and adjustments to taxes and paychecks of HPE employees.
          Processing of different IRS forms such as W2, W2-C, W4, LOD, Tax Exemption Certificate and FICA Exemption Certificate.
          Tax research and adjustment for Federal, State and Local taxes. Work done with internal tools and SAP for adjustments in paychecks,
          running reports and queries. Direct support to employees via calls, chat and email.
        </p>
      </div>
      <div className={classes.textIBM}>
        <h1 className={classes.titleMain}>IBM</h1>
        <h2>ACCOUNTS RECEIVABLE CSR</h2>
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

export default Work;