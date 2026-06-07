import {useState, useEffect} from 'react'
import styles from './styles.module.css'
import axios from '../../../axios';


function Rows({ title, fetchUrl, isLargeRow = false }) {

  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {    
        const fetchData = async () => { 
            const response = await axios.get(fetchUrl);
            setMovies(
                response.data.results
            );
            return response;
        }
        fetchData();
    }, [fetchUrl])

  console.log('§ returned movies', {movies})



  return (
    <div className={`${styles.row} ${isLargeRow && styles.rowLarge}`}>
         <h2>{title}</h2>
         <div className={styles.rowPosters}>
            {movies.map(movie => 
            (isLargeRow ? movie.poster_path : movie.backdrop_path) && (
            <img 
            className={`${styles.poster} ${isLargeRow && styles.posterLarge}`}
             key={movie.id}
             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
             alt={movie.name || movie.title || movie.original_name}
            />
         ))}
         </div>
         
    </div>
  )
}

export default Rows