import AccountPageOrderProduct from "../AccountPageOrderProduct/AccountPageOrderProduct"

interface IOrderProps {
  order: {
    products: {
      id: string,
      amount: number,
      isReview: boolean
    }[],
    date: string,
    
  }
}

const AccountPageOrder: React.FC<IOrderProps> = ({ order }): JSX.Element => {

  const { products, date } = order;

  return (

    <>
      
      <div className="orders__item">

        {products.map((item, index) => (

          <AccountPageOrderProduct key={index} orderProduct={item} />

        ))}

        <div className="orders__item-date">Дата заказа: {date.slice(0, 10)}</div>
        
      </div>

    </>

  )

}

export default AccountPageOrder;