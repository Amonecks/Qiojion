import { useSelector } from "react-redux";
import { StateType } from "../../../types/types";
import { useState, useEffect } from 'react';
import axios from "axios";
import CartProducts from "./CartProducts/CartProducts";
import CartOrder from "./CartOrder/CartOrder";
import { API_URL } from "../../../constants/constants";

const CartPage: React.FC = (): JSX.Element => {

  const cartProducts = useSelector((state: StateType) => state.cartSlice);

  const [products, setProducts] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    if(cartProducts.length == 0) {

      setProducts(null);

    } else {

      axios({
        method: 'GET',
        url: `${API_URL}/cart`,
        params: {
          cart: cartProducts
        }
      }).then(res => {
        setIsLoaded(true);
        setProducts(res.data);
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });

    }

  }, [cartProducts])

  return (

    <>
      
      <div className="cart">
        <div className="container">

          <h1 className="title">Корзина</h1>

          {(!isLoaded && cartProducts.length != 0) && <div className="subtitle">Данные загружаются</div>}

          {cartProducts.length == 0 && <div className="subtitle">Корзина пуста</div> }

          {error && <div className="subtitle">Произошла ошибка, попробуйте обновить страницу</div>}

          <div className="cart__wrapper">

            {products && <CartProducts products={products} />}
            
            {cartProducts.length != 0 && <CartOrder products={products} />}

          </div>

        </div>
      </div>

    </>
    
  )

}

export default CartPage;