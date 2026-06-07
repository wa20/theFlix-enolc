import { useState } from 'react'

import styles from './styles.module.css'
import { useEffect } from 'react';
import axios from '../../../axios';
import { requests } from '../../../Request';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {    
        const fetchData = async () => { 
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
            return response;
        }
        fetchData();
    }, [])

    console.log({movie}) // For debugging purposes, you can remove this line in production.

   
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }  



  return (
    <header 
    className={styles.bannerContainer}
    style={{
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        // backgroundImage: `url(https://image.tmdb.org/t/p/original/b7U9sE96HOsd8oV1BQeWhja2EXs.jpg)`, 
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, 
    }}>
        <div className={styles.bannerContents}>
            <h1 className={styles.bannerTitle}>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className={styles.bannerButtons}>
                <button className={styles.playButton}>Play</button>
                <button className={styles.myListButton}>My List</button>
            </div>
            <div className={styles.bannerDescription}>
                {truncate(movie?.overview, 150)}
            </div>
        </div>
        <div className={styles.bannerFadeBottom} />
    </header>
    
  )
}

export default Banner