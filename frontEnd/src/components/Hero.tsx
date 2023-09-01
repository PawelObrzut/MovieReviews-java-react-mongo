import React from 'react';
import { IMovie } from '../types/types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div className="carousel">
      <Carousel>
        {
          movies?.map((movie: IMovie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className="carousel__card">
                  <div className="carousel__card--movie" style={{ "--img" : `url(${movie.backdrops[0]})` } as React.CSSProperties}>
                    <div className="movie">
                      <div className="movie__poster">
                        <img src={movie.poster} alt={movie.poster} />
                      </div>
                      <div className="movie__title">
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero