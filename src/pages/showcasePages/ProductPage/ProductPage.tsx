import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ProductCardType } from '../../../types/types';
import ProductPageSlider from './ProductPageSlider/ProductPageSlider';
import ProductPageBtns from './ProductPageBtns/ProductPageBtns';
import ProductPageContent from './ProductPageContent/ProductPageContent';
import { API_URL } from '../../../constants/constants';

const ProductPage = () => {

  const location = useLocation().search.slice(4);

  const [product, setProduct] = useState<null | ProductCardType>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {

    axios({
      method: 'GET',
      url: `${API_URL}/product`,
      params: {
        id: location
      }
    }).then(res => {
      setIsLoaded(true);
      setProduct(res.data);
    })
    .catch(() => {
      setIsLoaded(true);
      setError(!false);
    });

  }, [location]);

  return (

    <>

      {!isLoaded && <div className="subtitle">Данные загружаются</div>}
    
      {product && (

        <div className="product">
          <div className="container">

            <div className="product__wrapper">
              
              <ProductPageSlider imgs={product.imgs} />

              <div className="product__main">

                <h1 className="title">{product.title}</h1>
                <div className="product__price">{product.price} ₽</div>

                <ProductPageBtns id={product._id} />

              </div>

            </div>

            <ProductPageContent 
              description={product.description}
              reviews={product.reviews}
              characteristics={product.characteristics}
            />

          </div>
        </div>
        
      )}

      {error && <div className="subtitle">Произошла ошибка, попробуйте обновить страницу</div>}

    </>

  )
}

export default ProductPage;