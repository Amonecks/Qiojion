import SearchCard from "../SearchCard/SearchCard";
import { ProductCardType } from "../../../../types/types";

interface ISearchCardsProps {
  products: ProductCardType[],
  active: boolean
}

const SearchCards: React.FC<ISearchCardsProps> = ({ products, active }): JSX.Element => {

  return (

    <>
      
      <div className={`search__items ${active ? 'search__items_active' : ''}`}>

        {products.length != 0 ? (

          products.map(({_id, title, price, imgs}, index) => (
            <SearchCard
              id={_id}
              title={title}
              imgs={imgs}
              price={price}
              key={index}
            />
          ))

        ) : (
          <div className="subtitle">Ничего не найдено</div>
        )}

      </div>

    </>
    
  )

}

export default SearchCards;