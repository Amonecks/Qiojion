import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import 'swiper/css';

type ProductPageSliderProps = {
  imgs: string[]
}

const ProductPageSlider: React.FC<ProductPageSliderProps> = ({ imgs }): JSX.Element => {

  const [swiper, setSwiper] = useState<SwiperClass>();

  return (

    <>
      
      <div className="product__preview">

        <Swiper
          className='product__slider'
          loop={true}
          onSwiper={(s) => setSwiper(s)}
        >

          {imgs.map((slide, index) => (

            <SwiperSlide key={index} className='product__slide'>

              <img src={slide} alt="" />

            </SwiperSlide>

          ))}

          <div className="product__slider-btns">

            <div onClick={() => swiper?.slidePrev()} className="product__slider-btn product__slider-btn_prev">
              <ReactSVG src={'/arrow.svg'} className="product__slider-btn-icon"/>
            </div>

            <div onClick={() => swiper?.slideNext()}  className="product__slider-btn product__slider-btn_next">
              <ReactSVG src={'/arrow.svg'} className="product__slider-btn-icon"/>
            </div>

          </div>

        </Swiper>

        

      </div>

    </>

  )

}

export default ProductPageSlider;