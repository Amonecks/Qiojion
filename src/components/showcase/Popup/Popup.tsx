import { ReactSVG } from "react-svg";

interface IPopupProps {
  title: string;
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const Popup: React.FC<IPopupProps> = ({ title, isActive, setIsActive }): JSX.Element => {

  return (

    <>
      
      <div className={`overlay ${isActive ? 'active' : ''}`}>

        <div className="popup">

          <div onClick={() => setIsActive(false)} className="popup__close">
            <ReactSVG src={'/close.svg'} />
          </div>

          <div className="popup__title">{title}</div>

        </div>

      </div>

    </>
    
  )

}

export default Popup;