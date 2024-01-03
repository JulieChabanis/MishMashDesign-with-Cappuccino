import React from 'react'
import styles from '../Navbar/Navbar.module.css'

const NavBar = () => {
  const devPortfolio = 'https://juliechabanis-portfolio.netlify.app/'
  return (
    <>
      <div className={styles.navbarContainer}>
        <h1 className={styles.title}>A Michmach of illustrations • By Julie Chabanis & Léon the Pug</h1>
      </div>
      <div className={styles.ElementsNavbar}>
      <h2 className={styles.subtitle}>Go to</h2>
      <a href={devPortfolio} className={styles.link}>my coding projects</a>
      </div>
    </>
  )
}

export default NavBar