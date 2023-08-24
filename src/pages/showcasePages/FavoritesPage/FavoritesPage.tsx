import Products from "../../../components/showcase/Products/Products";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { StateType } from "../../../types/types";
import { API_URL } from "../../../constants/constants";

const FavoritesPage: React.FC = (): JSX.Element => {

  const favoritesProducts = useSelector((state: StateType) => state.favoritesSlice)

  const [products, setProducts] = useState(null);

  useEffect(() => {

    if(favoritesProducts.length == 0) {

      setProducts(null);

    } else {

      axios({
        method: 'GET',
        url: `${API_URL}/favorites`,
        params: {
          favorites: favoritesProducts
        }
      }).then(res => setProducts(res.data));

    }

  }, [favoritesProducts])

  return (

    <>
      
      <div className="favorites">

        <div className="container">
          <div className="title">Избранное</div>
          {favoritesProducts.length == 0 && <div className="subtitle">Вы еще не добавили товары в избранное</div>}
        </div>

        {products && <Products products={products} />}

      </div>

    </>
    
  )

}

export default FavoritesPage;