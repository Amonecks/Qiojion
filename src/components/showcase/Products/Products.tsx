import ProductsList from "./ProductsList/ProductsList";
import { ProductCardType } from "../../../types/types";

type ProductsPropsType = {
  products: ProductCardType[]
}

const Products: React.FC<ProductsPropsType> = ({ products }): JSX.Element => {

  return (
    <>
      
      <div className="products">
        <div className="container">

          <ProductsList products={products} />

        </div>
      </div>

    </>
  )

}

export default Products;