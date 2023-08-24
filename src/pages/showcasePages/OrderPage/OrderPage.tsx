import Form from "../../../components/UI/Form";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import { useState } from 'react';
import axios from "axios";
import { API_URL } from "../../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../types/types";
import { removeAllFromCart } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { setOrders } from "../../../store/slices/profileSlice";

const OrderPage: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const order = useSelector((state: StateType) => state.cartSlice);
  const token = localStorage.getItem('token');

  function submitHandle(e: React.FormEvent) {
    
    e.preventDefault();

    axios({
      method: 'PUT',
      url: `${API_URL}/order`,
      data: {
        token,
        order
      }
    }).then(res => {

      if (res.data.status == 'success') {
        dispatch(removeAllFromCart());
        dispatch(setOrders(res.data.orders));
        navigate('/account');
      }
      
    })

  }

  return (

    <>
      
      <div className="order">
        <div className="container">
          <div className="order__wrapper">

            <div className="title">Оформление заказа</div>

            <Form
              onSubmit={(e) => submitHandle(e)}
              className="order__form"
            >

              <Input
                type="text"
                placeholder="Адрес доставки"
                value={address}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Номер карты"
                value={payment}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPayment(e.target.value)}
              />


              <Button
                version="btn_v2"
                type="submit"
                
              >Купить</Button>
              
            </Form>

          </div>
        </div>
      </div>

    </>

  )

}

export default OrderPage;