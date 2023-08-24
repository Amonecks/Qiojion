type HeaderHumburgerProps = {
  isActive: boolean,
  setIsActive: (a: boolean) => void
}

const HeaderHumburger: React.FC<HeaderHumburgerProps> = ({ isActive, setIsActive }): JSX.Element => {

  return (

    <>
    
      <div onClick={() => setIsActive(!isActive)} className={`header__humburger ${isActive ? "header__humburger_active" : ""}`} >
        <div className="header__humburger-line"></div>
        <div className="header__humburger-line"></div>
        <div className="header__humburger-line"></div>
      </div>

    </>

  )

}

export default HeaderHumburger;