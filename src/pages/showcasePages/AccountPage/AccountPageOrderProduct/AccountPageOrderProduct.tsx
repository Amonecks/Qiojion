import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../../../constants/constants";
import { NavLink } from "react-router-dom";
import { ProductCardType } from "../../../../types/types";
import AccountOrderReview from "./AccountOrderReview/AccountOrderReview";

interface IAccountPageOrderProductProps {
  orderProduct: {
    id: string,
    amount: number,
    isReview: boolean
  }
}

const AccountPageOrderProduct: React.FC<IAccountPageOrderProductProps> = ({ orderProduct }): JSX.Element => {

  const [product, setProduct] = useState<ProductCardType>();

  axios({
    method: 'GET',
    url: `${API_URL}/product`,
    params: {
      id: orderProduct.id
    }
  }).then(res => {
    setProduct(res.data)
  })

  return (

    <>
      
      {product && (

        <div className="orders__item-product">

          <div className="orders__item-product-main">

            <div className="orders__item-product-preview">
              <img src={product.imgs[0]} alt="" />
            </div>

            <div className="orders__item-product-wrapper">

              <NavLink className="orders__item-product-title" to={`/product?id=${product._id}`}>{product.title}</NavLink>

              <div className="orders__item-product-price">{product.price}  ₽ - {orderProduct.amount} шт.</div>

            </div>

          </div>

          {!orderProduct.isReview && <AccountOrderReview id={product._id} />}

        </div>

      )}

    </>
    
  )

}

export default AccountPageOrderProduct;