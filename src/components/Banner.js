import { useState, useEffect } from 'react'
import './Banner.css'

import { categories, getMovies } from '../api'

const Banner = () => {
  const [movie, setMovie] = useState({})

  const fetchRandomMovie = async(_path) => {
    try {
      const netflixOriginalsCategory = categories.find((category) => category.name === 'netflixOriginals')
      const data = await getMovies(netflixOriginalsCategory.path)
      
      const movies = data?.results
      const randomIndex = Math.floor(Math.random() * movies.length)
      setMovie(movies[randomIndex])

    } catch(err) {
      console.log('error Banner: ', err)
    }
  }

  useEffect(() => {
    fetchRandomMovie()
  }, [])

  return (
    <header
      className='banner-container'
      style={{
        backgroundSize: 'cover',
        backgroundImage: ´url("https://image.tmdb.org/t/p/original" ${movie.backdrop_path})´ // fix
      }}
    >
      <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} />
    </header>
  )

}

export default Banner