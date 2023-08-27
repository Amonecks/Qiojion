import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useSelector } from "react-redux";
import { StateType } from "../../../../types/types";

const HeaderAccount: React.FC = (): JSX.Element => {

  const isAuth = useAuth();

  const fullname = useSelector((state: StateType) => state.profileSlice.name + ' ' + state.profileSlice.surname);

  return (
    <>
      
      <div className="header__account">

        {
          isAuth ?
            <NavLink to="/account">
              <div className="header__account-name">{fullname ? fullname : ''}</div>
            </NavLink>
            : 
            <>
              <NavLink to="/registration">Регистрация</NavLink>
              <NavLink to="/login">Войти</NavLink>
            </>
        }

      </div>

    </>
  )

}

export default HeaderAccount;