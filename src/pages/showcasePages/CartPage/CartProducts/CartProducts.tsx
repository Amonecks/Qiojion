import CartProduct from "../CartProduct/CartProduct";
import { ProductCardType } from "../../../../types/types";

interface ICartProductsProps {
  products: ProductCardType[]
}

const CartProducts: React.FC<ICartProductsProps> = ({ products }): JSX.Element => {

  return (

    <>
      
      <div className="cart__products">
        
        {
          products.map((product, index) => (

            <CartProduct
              key={index}
              product={product}
            />

          ))
        }

      </div>

    </>
    
  )

}

export default CartProducts;