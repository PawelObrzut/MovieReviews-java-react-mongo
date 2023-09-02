import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import './styles/global.scss';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/Loading';
import Reviews from './components/Reviews';
import Trailer from './components/Trailer';
import { IMovie } from './types/types';

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
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {movies !== undefined ? (
            <Route path="/" element={<Home movies={movies} />} />
          ) : (
            <Route path="/" element={<Loading />} />
          )}
        </Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
        <Route path="/Reviews/:movieId" element ={<Reviews />}></Route>
            
      </Routes>
    </div>
  )
}

export default App
