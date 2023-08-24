import { StateType } from "../../../types/types";
import AccountPageOrders from "./AccountPageOrders/AccountPageOrders";
import AccountPageProfile from "./AccountPageProfile/AcountPageProfile";
import { useSelector } from "react-redux";

const AccountPage: React.FC = (): JSX.Element => {

  const { orders, name, surname, email } = useSelector((state: StateType) => state.profileSlice);

  return (

    <>
      
      <div className="account">
        <div className="container">
          <div className="account__wrapper">

            {orders.length != 0 ? <AccountPageOrders orders={orders} /> : <div className="subtitle subtitle_tac">У вас еще нет заказов</div> }

            <AccountPageProfile
              name={name}
              surname={surname}
              email={email}
            />

          </div>
        </div>
      </div>

    </>

  )

}

export default AccountPage;