import AccountPageOrder from "../AccountPageOrder/AccountPageOrder"

interface IOrder {
  products: {
    id: string,
    amount: number,
    isReview: boolean
  }[],
  date: string,
  
}

interface IAccountPageOrdersProps {
  orders: IOrder[]
}

const AccountPageOrders: React.FC<IAccountPageOrdersProps> = ({ orders }): JSX.Element => {


  return (

    <>
      
      <div className="orders">

        {orders && orders.map((order, index) => (

          <AccountPageOrder key={index} order={order} />

        ))}

      </div>

    </>

  )

}

export default AccountPageOrders;