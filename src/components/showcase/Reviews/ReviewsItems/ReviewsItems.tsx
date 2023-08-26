import { ReviewType } from "../../../../types/types";

type ReviewsProps = {
  reviews: ReviewType[]
}

const ReviewsItems: React.FC<ReviewsProps> = ({ reviews }): JSX.Element => {

  return (

    <>
      
      <div className="product__reviews-items">
        {
          reviews.map(({ name, date, grade, review }, index) => (

            <div key={index} className="product__reviews-item">

              <div className="product__reviews-item-header">

                <div className="product__reviews-item-wrapper">
                  <div className="product__reviews-item-name">
                    {name}
                  </div>
                  <div className="product__reviews-item-date">
                    {date.slice(0, 10)}
                  </div>
                </div>

                <div className="product__reviews-item-grade">
                  Оценка: {grade}
                </div>

              </div>

              <div className="product__reviews-item-text">
                {review}
              </div>

            </div>

          ))
        }
      </div>

    </>

  )

}

export default ReviewsItems;