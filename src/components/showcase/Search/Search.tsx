import { useState } from 'react';
import axios from 'axios';
import SearchCards from './SearchCards/SearchCards';

const Search: React.FC = (): JSX.Element => {

  const [searchValue, setSearchValue] = useState<string>('');
  const [isActive, setIsActive] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState();
  const [timer, setTimer] = useState<null | number>(null);

  function searchQuery() {

    setIsActive(true);

    if (searchValue == '') return;
     
    if (timer) clearTimeout(timer);

    const timeout = setTimeout(() => {

      axios({
        method: 'GET',
        url: `http://localhost:3000/search`,
        params: {
          search: searchValue
        }
      }).then(res => {
        setSearchedProducts(res.data);
      });

      setTimer(null);

    }, 700);

    setTimer(timeout);

  }

  function searchHandle(value: string) {

    setSearchValue(value);

    searchQuery();

  }

  return (

    <>
      
      <div className="search">

        <input
          type="text"
          className="search__input"
          placeholder="Поиск по товарам"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchHandle(e.target.value)}
          onBlur={() => {
            setSearchValue('');
            setTimeout(() => setIsActive(false), 300);
          }}
          value={searchValue}
        />

        {searchedProducts && <SearchCards active={isActive} products={searchedProducts} />}

      </div>

    </>
    
  )

}

export default Search;