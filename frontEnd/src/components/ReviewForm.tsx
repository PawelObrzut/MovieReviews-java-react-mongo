import { SubmitHandler, useForm } from 'react-hook-form';
import api from '../api/axiosConfig';

type FormValues = {
  review: string
}

interface IReviewForm {
  getMovieData: (movieId: string) => void;
  movieId: string | undefined
}

const ReviewForm = ({movieId, getMovieData} : IReviewForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const submitReview: SubmitHandler<FormValues> = async (data) => {
    try
    {
      await api.post("/api/v1/reviews",{reviewBody:data.review, imdbId:movieId});
      if (!movieId) {
        return
      }
      getMovieData(movieId);
    }
    catch(err)
    {
      console.error(err);
    }
    reset();
  }
  return (
    <form className="reviewForm" onSubmit={handleSubmit(submitReview)}>
      <textarea rows={3} {...register('review', { required: true })} />
      {errors.review && <p>Write your review.</p>}

      <input type="submit" className="button" value="Submit" />
    </form>
  )
}

export default ReviewForm