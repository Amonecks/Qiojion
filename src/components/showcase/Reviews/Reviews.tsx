import { ReviewType } from "../../../types/types";
import ReviewsItems from "./ReviewsItems/ReviewsItems";

interface IReviewsProps {
  reviews: ReviewType[]
}

const Reviews: React.FC<IReviewsProps> = ({ reviews }): JSX.Element => {

  return (

    <>
      
      <div className="product__reviews">
        
        {reviews.length != 0 ? <ReviewsItems reviews={reviews} /> : <div className="subtitle">Отзывов нет</div> }

      </div>

    </>

  )

}

export default Reviews;