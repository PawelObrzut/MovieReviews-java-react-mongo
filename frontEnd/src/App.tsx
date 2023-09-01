import './styles/global.scss';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';

import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import { IMovie } from './types/types'
import Loading from './components/Loading';

function App() {
  const [movies, setMovies] = useState<IMovie[] | undefined>();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {movies !== undefined ? (
            <Route path="/" element={<Home movies={movies} />} />
          ) : (
            <Route path="/" element={<Loading />} />
          )}
        </Route>
      </Routes>
    </div>
  )
}

export default App
