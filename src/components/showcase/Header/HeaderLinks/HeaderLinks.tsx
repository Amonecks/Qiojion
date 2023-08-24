import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "../../../../types/types";
import { ReactSVG } from 'react-svg';

interface IHeaderLinksProps {
  setIsActive?: (a: boolean) => void;
}

const HeaderLinks: React.FC<IHeaderLinksProps> = ({ setIsActive }): JSX.Element => {

  const CloseMobileMenuHandle = () => {
    if(setIsActive) setIsActive(false);
  }

  const cartLength = useSelector((state: StateType) => state.cartSlice.length);

  return (
    <>
      
      <div className="header__links">

        <NavLink onClick={CloseMobileMenuHandle} to="/favorites" className="header__links-item">
          <ReactSVG src={'/heart.svg'} className="header__links-item-icon"/>
        </NavLink>

        <NavLink onClick={CloseMobileMenuHandle} to="/comparison" className="header__links-item">
          <ReactSVG src={'/comparison.svg'} className="header__links-item-icon"/>
        </NavLink>

        <NavLink onClick={CloseMobileMenuHandle} to="/cart" className="header__links-item">
          <ReactSVG src={'/basket.svg'} className="header__links-item-icon"/>
          <div className="header__links-item-amount">{cartLength}</div>
        </NavLink>

      </div>

    </>
  )

}

export default HeaderLinks;