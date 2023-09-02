import { useForm } from 'react-hook-form';

const ReviewForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="reviewForm" onSubmit={handleSubmit((data) => console.log(data))}>
      <textarea rows={3} {...register('review', { required: true })} />
      {errors.review && <p>Write your review.</p>}

      <input type="submit" className="button" />
    </form>
  )
}

export default ReviewForm