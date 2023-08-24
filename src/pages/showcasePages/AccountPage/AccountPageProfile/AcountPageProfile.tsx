import Button from "../../../../components/UI/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/profileSlice";

interface IAccountPageProfileProps {
  name: string;
  surname: string;
  email: string;
}

const AccountPageProfile: React.FC<IAccountPageProfileProps> = ({ name, surname, email }): JSX.Element => {

  const dispatch = useDispatch();

  return (

    <>
      
      <div className="profile">

        <div className="profile__name">{`${name} ${surname}`}</div>
        <div className="profile__email">{email}</div>

        <Button version="btn_v1" onClick={() => dispatch(logout())}>Выйти из аккаунта</Button>
        
      </div>

    </>

  )

}

export default AccountPageProfile;