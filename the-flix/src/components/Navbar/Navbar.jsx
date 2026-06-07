// import React from 'react'
import styles from './styles.module.css'

function Navbar() {
  return (
    <> 
    <div className={styles.navbarContainer}>
       <div className={styles.navbar}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className={styles.logo} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Classic Blue Avatar" className={styles.avatar} />
    </div>
       
        {/* <h1 className={styles.title}>Navbar</h1> */}
 
    </div>
    

    </>

  )
}

export default Navbar