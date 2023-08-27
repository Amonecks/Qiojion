type HeaderHumburgerProps = {
  isMobileMenuVisible: boolean,
  setMobileMenuVisibility: (a: boolean) => void;
}

const HeaderHumburger: React.FC<HeaderHumburgerProps> = ({ isMobileMenuVisible, setMobileMenuVisibility }): JSX.Element => {

  return (

    <>
    
      <div onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)} className={`header__humburger ${isMobileMenuVisible ? "header__humburger_active" : ""}`} >
        <div className="header__humburger-line"></div>
        <div className="header__humburger-line"></div>
        <div className="header__humburger-line"></div>
      </div>

    </>

  )

}

export default HeaderHumburger;