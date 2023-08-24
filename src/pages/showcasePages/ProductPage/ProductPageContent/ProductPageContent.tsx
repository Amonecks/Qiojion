import { useState } from 'react';
import { ReviewType, CharacteristicType } from "../../../../types/types";
import Description from "../../../../components/showcase/Description/Description";
import Reviews from '../../../../components/showcase/Reviews/Reviews';
import Characteristic from '../../../../components/showcase/Characteristics/Characteristics';

type ProductPageContentProps = {
  description: string,
  reviews: ReviewType[],
  characteristics: CharacteristicType[]
}

const ProductPageContent: React.FC<ProductPageContentProps> = ({ description, reviews, characteristics }): JSX.Element => {

  const tabs = [
    {
      title: 'Описание',
      component: <Description description={description} />
    },
    {
      title: 'Характеристики',
      component: <Characteristic chars={characteristics} />
    },
    {
      title: 'Отзывы',
      component: <Reviews reviews={reviews} />
    },
  ];

  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      
      <div className="product__content">

        <div className="product__tabs">

          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`product__tab ${index == activeTab ? 'product__tab_active' : ''}`}
            >
              {tab.title}
            </div>
          ))}

        </div>

        {tabs[activeTab].component}

      </div>

    </>
  )

}

export default ProductPageContent;