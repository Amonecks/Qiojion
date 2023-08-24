import Button from "../../../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../../store/slices/favoritesSlice";
import { addToComparison, removeFromComparison } from "../../../../store/slices/comparisonSlice";
import { addToCart, removeFromCart } from "../../../../store/slices/cartSlice";
import { StateType, CartItemType } from "../../../../types/types";

type ProductPageBtnsProps = {
  id: string
}

const ProductPageBtns: React.FC<ProductPageBtnsProps> = ({ id }): JSX.Element => {

  const dispatch = useDispatch();

  // Состояние избранного

  const inFavorites = useSelector((state: StateType) => state.favoritesSlice.includes(id));

  function favoritesHandle() {
    inFavorites ? dispatch(removeFromFavorites(id)) : dispatch(addToFavorites(id)); 
  }

  // Состояние сравнений

  const inComparison = useSelector((state: StateType) => { 
    return state.comparisonSlice.includes(id);
  });

  function comparisonHandle() {
    inComparison ? dispatch(removeFromComparison(id)) : dispatch(addToComparison(id));
  }

  // Состояние корзины

  const inCart = useSelector((state: StateType) => {
    return state.cartSlice.find((item: CartItemType) => item.id == id);
  });
 
  function cartHandle() {
    inCart ? dispatch(removeFromCart(id)) : dispatch(addToCart(id))
  }

  return (
    <>
      
      <div className="product__btns">

        <Button 
          version="btn_v1"
          onClick={favoritesHandle}
        >{inFavorites ? "Из избранного" : "В избранное"}</Button>

        <Button 
          version="btn_v1"
          onClick={comparisonHandle}
        >{inComparison ? "Из сравнений" : "В сравнения"}</Button>

        <Button 
          version="btn_v2"
          onClick={cartHandle}
        >{inCart ? "Убрать из корзины" : "В корзину"}</Button>

      </div>

    </>
  )

}

export default ProductPageBtns;