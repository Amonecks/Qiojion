import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import Form from "../../../components/UI/Form";
import Popup from "../../../components/showcase/Popup/Popup";
import { useState } from 'react';
import axios from "axios";
import { API_URL } from "../../../constants/constants";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/profileSlice";

const RegistrationPage = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupTitle, setPopupTitle] = useState(''); 

  function formReset() {

    setName('');
    setSurname('');
    setEmail('');
    setPassword('');

  }

  function alreadyReg(title: string) {

    setPopupStatus(true);
    setPopupTitle(title);
    formReset();

  }

  function errorReg(error: { code: string; }) {

    if (error.code == "ERR_NETWORK") {

      setPopupStatus(true);
      setPopupTitle('Произошла ошибка сети. Пожалуйста попробуйте еще раз позже.');
      formReset();

    }

  }

  function submitHandle(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    
    axios({
      method: 'POST',
      url: `${API_URL}/registration`,
      data: {
        name,
        surname,
        email,
        password
      }
    })
      .then(res => {
        
        if (res.data.status == 'success') {

          localStorage.setItem('token', JSON.stringify(res.data.profile._id));

          dispatch(login(res.data.profile));
          
          return;

        }

        alreadyReg('Пользователь с данным email уже существует');

      })
      .catch(error => errorReg(error))

  }

  return (

    <>

      <Popup title={popupTitle} isActive={popupStatus} setIsActive={setPopupStatus} />
      
      <div className="registration">
        
        <div className="container">
          <div className="registration__wrapper">

            <div className="title title_tac">Регистрация</div>

            <Form className="registration__form" onSubmit={(e) => submitHandle(e)}>

              <Input
                type='text'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Имя"
                required={true}
              />
              <Input
                type='text'
                value={surname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                placeholder="Фамилия"
                required={true}
              />
              <Input
                type='text'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Email"
                required={true}
              />
              <Input
                type='text'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Пароль"
                required={true}
              />
              <Button 
                type="submit"
                version="btn_v2"
              >Зарегистрироваться</Button>

            </Form>

          </div>
        </div>
      </div>

    </>

  )
}

export default RegistrationPage;