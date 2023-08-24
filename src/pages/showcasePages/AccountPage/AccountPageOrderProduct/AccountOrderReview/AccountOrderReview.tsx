import Button from "../../../../../components/UI/Button";
import Form from "../../../../../components/UI/Form";
import Input from "../../../../../components/UI/Input";
import Textarea from "../../../../../components/UI/Textarea";
import { useState } from 'react';
import axios from "axios";
import { API_URL } from "../../../../../constants/constants";
import { useDispatch } from "react-redux";
import { setOrders } from "../../../../../store/slices/profileSlice";

interface IAccountOrderReviewProps {
  id: string
}

const AccountOrderReview: React.FC<IAccountOrderReviewProps> = ({ id }): JSX.Element => {

  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  const [review, setReview] = useState('');
  const [grade, setGrade] = useState(5);

  function gradeHandle(value: number) {
    if (value > 0 && value < 6) setGrade(value);
  }

  function submitHandle(e: React.FormEvent) {

    e.preventDefault();

    axios({
      method: 'PUT',
      url: `${API_URL}/review`,
      data: {
        review,
        grade,
        token,
        id
      }
    }).then(res => {
      dispatch(setOrders(res.data.orders));
    })

  }

  return (

    <>
      
      <Form
        className="orders__item-product-form"
        onSubmit={(e) => submitHandle(e)}
      >

        <Textarea
          placeholder="Ваш отзыв о товаре"
          value={review}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
          required={true}
        />

        <Input
          type='number'
          value={grade}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => gradeHandle(+e.target.value)}
          required={true}
        />

        <Button type='submit' version="btn_v2">Отправить отзыв</Button>

      </Form>

    </>

  )

}

export default AccountOrderReview;