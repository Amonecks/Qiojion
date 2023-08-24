import { NavLink } from "react-router-dom";

interface IHeaderNavProps {
  setIsActive?: (a: boolean) => void;
}

const HeaderNav: React.FC<IHeaderNavProps> = ({ setIsActive }): JSX.Element => {

  const CloseMobileMenuHandle = () => {
    if(setIsActive) setIsActive(false);
  }

  const navItems = [
    {
      title: 'Категории',
      path: '/categories'
    },
    {
      title: 'Контакты',
      path: '/contacts'
    },
    {
      title: 'О нас',
      path: '/aboutus'
    }
  ]

  return (
    <>
      
      <nav className="header__nav">
        <ul className="header__nav-list">

          {
            navItems.map(({title, path}, index) => {
              return (
                <li key={index} className="header__nav-item">
                  <NavLink onClick={CloseMobileMenuHandle} to={path} className="header__nav-link">{title}</NavLink>
                </li>
              )
            })
          }

        </ul>
      </nav>

    </>
  )

}

export default HeaderNav;