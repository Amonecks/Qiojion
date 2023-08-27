import Search from "../../Search/Search"
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import HeaderNav from "../HeaderNav/HeaderNav";

interface IHeaderMobileMenuProps {
  isMobileMenuVisible: boolean;
}

const HeaderMobileMenu: React.FC<IHeaderMobileMenuProps> = ({ isMobileMenuVisible }): JSX.Element => {

  return (

    <>
      
      <div className={`header__mmenu ${isMobileMenuVisible ? 'header__mmenu_active' : ''}`}>

        <Search />

        <HeaderAccount />

        <HeaderLinks />

        <HeaderNav />
        
      </div>

    </>

  )

}

export default HeaderMobileMenu;