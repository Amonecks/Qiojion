import { NavLink } from "react-router-dom";
import { ProductCardType } from "../../../../types/types";
import ProductCardBtns from "./ProductCardBtns/ProductCardBtns";

type ProductCardProps = {
  product: ProductCardType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }): JSX.Element => {

  const { _id, imgs, title, price } = product;

  return (
    <>
      
      <div className="product-card">

          <div className="product-card__preview">
            <img src={imgs[0]} alt="" className="product-card__img" />
          </div>

          <div className="product-card__main">
            <NavLink to={`/product?id=${_id}`} className="product-card__title">{title}</NavLink>

            <div className="product-card__wrapper">

              <div className="product-card__prices">
                <div className="product-card__price">{price} ₽</div>
              </div>

              <ProductCardBtns id={_id} />

            </div>
          </div>

      </div>

    </>
  )

}

export default ProductCard;