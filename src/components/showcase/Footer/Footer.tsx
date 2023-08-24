import { NavLink } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {

  return (
    <>
      
      <footer className="footer">
        <div className="container">

          <div className="footer__main">

            <NavLink className="footer__logo" to="/">
              Q<span>I</span>OJ<span>I</span>ON
            </NavLink>

          </div>

          <div className="footer__bottom">
            <span className="footer__bottom-title">ⓒ Остапчук Роман | 2023</span>
          </div>

        </div>
      </footer>

    </>
  )

}

export default Footer;