import Products from "../../../components/showcase/Products/Products";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../../constants/constants";

const HomePage: React.FC = (): JSX.Element => {

  const [products, setProducts] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    axios({
      method: 'GET',
      url: API_URL
    })
      .then(res => {
        setIsLoaded(true);
        setProducts(res.data);
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });

  }, []);

  return (

    <>

      {!isLoaded && <div className="subtitle">Данные загружаются</div>}

      {products && <Products products={products} />}

      {error && <div className="subtitle">Произошла ошибка, попробуйте обновить страницу</div>}

    </>

  )

}

export default HomePage;