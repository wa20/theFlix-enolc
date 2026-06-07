// import React from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Rows from '../Rows/Rows'
import { requests } from '../../../Request';


function HomeScreen() {

  return (
    <div className={styles.homeScreen}>
      <Navbar />
      <Banner />
      <Rows 
       title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow
      />
      <Rows 
       title="Trending Now"
       fetchUrl={requests.fetchTrending}
      />
      <Rows 
       title="Top Rated"
       fetchUrl={requests.fetchTopRated}
      />
      <Rows 
       title="Action Movies"
       fetchUrl={requests.fetchActionMovies}
      />
      <Rows 
       title="Comedy Movies"
       fetchUrl={requests.fetchComedyMovies}
      />
      <Rows 
       title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies}
      />
      <Rows 
       title="Romance Movies"
       fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  )
}

export default HomeScreen