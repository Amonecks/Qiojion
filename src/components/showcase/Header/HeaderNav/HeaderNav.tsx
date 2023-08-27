import { NavLink } from "react-router-dom";

const HeaderNav: React.FC = (): JSX.Element => {

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
                  <NavLink to={path} className="header__nav-link">{title}</NavLink>
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