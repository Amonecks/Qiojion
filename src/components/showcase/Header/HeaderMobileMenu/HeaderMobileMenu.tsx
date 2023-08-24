import Search from "../../Search/Search"
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import HeaderNav from "../HeaderNav/HeaderNav";

interface IHeaderMobileMenuProps {
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const HeaderMobileMenu: React.FC<IHeaderMobileMenuProps> = ({ isActive, setIsActive }): JSX.Element => {

  return (

    <>
      
      <div className={`header__mmenu ${isActive ? 'header__mmenu_active' : ''}`}>

        <Search />

        <HeaderAccount setIsActive={setIsActive} />

        <HeaderLinks setIsActive={setIsActive} />

        <HeaderNav setIsActive={setIsActive} />
        
      </div>

    </>

  )

}

export default HeaderMobileMenu;