import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useSelector } from "react-redux";
import { StateType } from "../../../../types/types";

interface IHeaderAccountProps {
  setIsActive?: (a: boolean) => void;
}

const HeaderAccount: React.FC<IHeaderAccountProps> = ({ setIsActive }): JSX.Element => {

  const isAuth = useAuth();

  const fullname = useSelector((state: StateType) => state.profileSlice.name + ' ' + state.profileSlice.surname);

  const CloseMobileMenuHandle = () => {
    if(setIsActive) setIsActive(false);
  }

  return (
    <>
      
      <div className="header__account">

        {
          isAuth ?
            <NavLink onClick={CloseMobileMenuHandle} to="/account">
              <div className="header__account-name">{fullname ? fullname : ''}</div>
            </NavLink>
            : 
            <>
              <NavLink onClick={CloseMobileMenuHandle} to="/registration">Регистрация</NavLink>
              <NavLink onClick={CloseMobileMenuHandle} to="/login">Войти</NavLink>
            </>
        }

      </div>

    </>
  )

}

export default HeaderAccount;