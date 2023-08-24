import { ProductCardType, StateType } from "../../../../types/types";
import Counter from "../../../../components/UI/Counter";
import { ReactSVG } from "react-svg";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../../../../store/slices/cartSlice";
import { NavLink } from "react-router-dom";

interface ICartProductProps {
  product: ProductCardType
}

const CartProduct: React.FC<ICartProductProps> = ({ product }): JSX.Element => {

  const { _id, imgs, title, price } = product;

  const dispatch = useDispatch();

  const productAmount = useSelector((state: StateType) => state.cartSlice.find(item => item.id == _id)?.amount);

  function incrementHandle() {
    dispatch(increment(_id));
  }

  function decrementHandle() {
    dispatch(decrement(_id));
  }

  function removeFromCartHandle() {
    dispatch(removeFromCart(_id))
  }

  return (

    <>
      
      <div className="cart__product">

        <div className="cart__product-wrapper">

          <div className="cart__product-preview">
            <img src={imgs[0]} alt="" className="cart__product-img" />
          </div>

          <div className="cart__product-info">
            <NavLink to={`/product?id=${_id}`} className="cart__product-title">{title}</NavLink>
            <div className="cart__product-price">{price} ₽</div>
          </div>

        </div>

        <div className="cart__product-wrapper">

          <Counter increment={incrementHandle} decrement={decrementHandle} value={productAmount} />

          <div onClick={removeFromCartHandle} className="cart__product-remove">
            <ReactSVG src={'/close.svg'} />
          </div>

        </div>

      </div>

    </>
    
  )

}

export default CartProduct;