import { ProductCardType, StateType } from "../../../../types/types";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import useAuth from "../../../../hooks/useAuth";
import { NavLink } from "react-router-dom";

interface ICartOrderProps {
  products: ProductCardType[] | null;
}

const CartOrder: React.FC<ICartOrderProps> = ({ products }): JSX.Element => {

  const isAuth = useAuth();

  const cartProducts = useSelector((state: StateType) => state.cartSlice);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    if(products) {

      let sum = 0;
  
      products.forEach((apiProduct) => {
  
        cartProducts.forEach((localProduct) => {
  
          if(apiProduct._id == localProduct.id) {
            sum = sum + (apiProduct.price * localProduct.amount)
          }
  
        })
        
      });
  
      setTotal(sum);
  
    }

  }, [products, cartProducts])

  return (

    <>
      
      <div className="cart__order">
        <div className="cart__total">Итого: <span>{total}</span> ₽</div>

        {isAuth ? <NavLink to='/order'>Перейти к оформлению</NavLink> : <NavLink to='/login'>Войти в аккаунт</NavLink>}

      </div>

    </>
    
  )

}

export default CartOrder;