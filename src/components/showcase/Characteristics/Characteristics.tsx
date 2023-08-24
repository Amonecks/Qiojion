import { CharacteristicType } from "../../../types/types";

type CharacteristicProps = {
  chars: CharacteristicType[]
}

const Characteristic: React.FC<CharacteristicProps> = ({ chars }): JSX.Element => {

  return (

    <>
      
      <div className="product__characteristics">

        {
          chars.map((item, index) => (

            <div key={index} className="product__characteristics-item">
              <span>{item.title}</span>
              <span>{item.value}</span>
            </div>

          ))
        }
        
      </div>

    </>
    
  )

}

export default Characteristic;