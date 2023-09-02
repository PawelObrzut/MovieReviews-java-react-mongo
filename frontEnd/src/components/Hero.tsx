import React from 'react';
import { IMovie } from '../types/types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Hero = ({ movies }: { movies: IMovie[] }) => {
  const navigate = useNavigate();

  return (
    <div className="carousel">
      <Carousel>
        {
          movies?.map((movie: IMovie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className="carousel__card">
                  <div className="carousel__card--movie" style={{ "--img": `url(${movie.backdrops[0]})` } as React.CSSProperties}>
                    <div className="movie">
                      <div className="movie__poster">
                        <img src={movie.poster} alt={movie.poster} />
                      </div>
                      <div className="movie__title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie__player">
                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} >
                          <div className="play__button">
                            <FontAwesomeIcon className="play__button--icon" icon={faCirclePlay} />
                          </div>
                        </Link>
                        <div className="movie-review-button-container">
                          <button className="button" onClick={() => navigate(`/Reviews/${movie.imdbId}`)} >Reviews</button>
                        </div>
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