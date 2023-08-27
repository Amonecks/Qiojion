import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "../../../../types/types";
import { ReactSVG } from 'react-svg';

const HeaderLinks: React.FC = (): JSX.Element => {

  const cartLength = useSelector((state: StateType) => state.cartSlice.length);

  return (
    <>
      
      <div className="header__links">

        <NavLink to="/favorites" className="header__links-item">
          <ReactSVG src={'/heart.svg'} className="header__links-item-icon"/>
        </NavLink>

        <NavLink to="/comparison" className="header__links-item">
          <ReactSVG src={'/comparison.svg'} className="header__links-item-icon"/>
        </NavLink>

        <NavLink to="/cart" className="header__links-item">
          <ReactSVG src={'/basket.svg'} className="header__links-item-icon"/>
          <div className="header__links-item-amount">{cartLength}</div>
        </NavLink>

      </div>

    </>
  )

}

export default HeaderLinks;