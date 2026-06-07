// import React from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'


function HomeScreen() {

  return (
    <div className={styles.homeScreen}>
      <Navbar />
      <Banner />

      {/* Row */}

       Lets Build The Flix List
    </div>
  )
}

export default HomeScreen