import ProductCard from "../ProductCard/ProductCard";
import { ProductCardType } from "../../../../types/types";

type ProductListProps = {
  products: ProductCardType[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }): JSX.Element => {

  return (
    <>
      
      <div className="products__list">

        {
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))
        }

      </div>

    </>
  )

}

export default ProductsList;