import Form from "../../../components/UI/Form";
import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/constants";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/profileSlice";

const LoginPage: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({status: false, title: ''});

  function formReset() {

    setEmail('');
    setPassword('');

  }

  function inputHandle(value: string, set: (a: string) => void) {

    if (error.status) {
      setError({
        status: false,
        title: ''
      })
    }

    set(value);

  }

  function loginHandle(e: React.FormEvent) {

    e.preventDefault();
    
    axios({
      method: 'GET',
      url: `${API_URL}/login`,
      params: {
        email,
        password
      }
    })
      .then(res => {
        
        switch (res.data.status) {

          case 'success':
            dispatch(login(res.data.profile));
            localStorage.setItem('token', JSON.stringify(res.data.profile._id));
            break;

          case 'notfound':
            setError({
              status: true,
              title: 'Профиля с данным email не существует'
            });
            formReset();
            break;
          
          case 'errdata':
            setError({
              status: true,
              title: 'Не верный пароль'
            });
            formReset();
            break;

        }

      })

  }

  return (

    <>
      
      <div className="login">
        <div className="container">
          <div className="login__wrapper">

            <div className="title">Вход</div>

            <Form
              className="login__form"
              onSubmit={(e) => loginHandle(e)}
            >

              <Input
                type="text"
                placeholder="Email"
                required={true}
                value={email}
                onChange={(e) => inputHandle(e.target.value, setEmail)}
              />
              <Input
                type="text"
                placeholder="Пароль"
                required={true}
                value={password}
                onChange={(e) => inputHandle(e.target.value, setPassword)}
              />
              <Button
                type="submit"
                version="btn_v2"
              >Войти</Button>

              <div className="err">{error.status && error.title}</div>
              
            </Form>

          </div>
        </div>
      </div>

    </>

  )

}

export default LoginPage;