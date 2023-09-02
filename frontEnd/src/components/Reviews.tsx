import { useParams}  from 'react-router-dom';
import { IMovie, IReviewIds } from '../types/types';
import ReviewForm from './ReviewForm';
import api from '../api/axiosConfig';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [movie, setMovie] = useState<IMovie | undefined>();
  const { movieId } = useParams();

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      setMovie(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    if (!movieId) {
      return
    }
    getMovieData(movieId);
  },[movieId])

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="reviews--movie">
        <img className="poster" src={movie?.poster} alt={movie?.poster} />
        <div>
          <h3>Write a review?</h3>
          <ReviewForm getMovieData={getMovieData} movieId={movieId} />
          <ul role="list">
            {
              movie?.reviewIds?.map((review : IReviewIds) => (
                <li key={review.id.timestamp}>
                  {review.body}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Reviews