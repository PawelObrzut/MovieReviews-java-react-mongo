import { IMovie } from '../types/types'
import Hero from './Hero'

const Home = ({movies} : {movies: IMovie[]})=> {
  return (
    <Hero movies = {movies} />
  )
}

export default Home