import { NavLink } from "react-router-dom";

interface ISearchCardProps {
  id: string;
  setIsActive?: (a: boolean) => void;
  title: string;
  price: number;
  imgs: string[];
}

const SearchCard: React.FC<ISearchCardProps> = ({ id, title, price, imgs, setIsActive }): JSX.Element => {

  const CloseMobileMenuHandle = () => {
    if(setIsActive) setIsActive(false);
  }

  return (

    <>
      
      <div className="search__item">

        <div className="search__item-preview">
          <img src={imgs[0]} alt="" />
        </div>

        <div className="search__item-wrapper">

          <NavLink onClick={CloseMobileMenuHandle} className="search__item-title" to={`product?id=${id}`}>{title}</NavLink>

          <div className="search__item-price">{price}</div>

        </div>

      </div>

    </>
    
  )

}

export default SearchCard;