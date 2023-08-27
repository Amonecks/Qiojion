import { NavLink } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderAccount from "./HeaderAccount/HeaderAccount";
import Search from "../Search/Search";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderHumburger from "./HeaderHumburger/HeaderHumburger";
import HeaderMobileMenu from "./HeaderMobileMenu/HeaderMobileMenu";

interface IHeaderProps {
  isMobileMenuVisible: boolean;
  setMobileMenuVisibility: (a: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({setMobileMenuVisibility, isMobileMenuVisible}): JSX.Element => {

  return (

    <>

      <header className="header">

        <HeaderMobileMenu isMobileMenuVisible={isMobileMenuVisible} />
        
        {/* Верхняя часть */}
        <div className="header__section header__section_bgblack">
          <div className="container">
            <div className="header__wrapper">

                <NavLink to="/" className="header__logo">
                  Q<span>I</span>OJ<span>I</span>ON
                </NavLink>

                <HeaderNav />

                <HeaderAccount />

                <HeaderHumburger isMobileMenuVisible={isMobileMenuVisible} setMobileMenuVisibility={setMobileMenuVisibility} />

            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="header__section header__section_bgaliceblue">
          <div className="container">
            <div className="header__wrapper">

              <Search />

              <HeaderLinks />

            </div>
          </div>
        </div>
      </header>

    </>

  )

}

export default Header;