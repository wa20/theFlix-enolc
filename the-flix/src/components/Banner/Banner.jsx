import React from 'react'

import styles from './styles.module.css'

function Banner() {

   
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }  



  return (
    <header 
    className={styles.bannerContainer}
    style={{
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/b7U9sE96HOsd8oV1BQeWhja2EXs.jpg)` 
        //  backgroundImage: `url(http://image.tmdb.org/t/p/original/cjSB3ZjaMpaa9oHFyeYha3KG0mp.jpg)` 
    }}>
        <div className={styles.bannerContents}>
            <h1 className={styles.bannerTitle}>The Flix List</h1>
            <div className={styles.bannerButtons}>
                <button className={styles.playButton}>Play</button>
                <button className={styles.myListButton}>My List</button>
            </div>
            <h1 className={styles.bannerDescription}>
                {truncate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", 100)}
                </h1>
        </div>
        <div className={styles.bannerFadeBottom} />

    </header>
    
  )
}

export default Banner