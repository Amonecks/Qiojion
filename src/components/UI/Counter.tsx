import Input from "./Input";

interface ICounterProps {
  increment: () => void;
  decrement: () => void;
  value: string | number | undefined;
}

const Counter: React.FC<ICounterProps> = ({ increment, decrement, value }): JSX.Element => {

  return (

    <>
      
      <div className="counter">
        
        <div onClick={decrement} className="counter__handle">-</div>

        <Input
          value={value}
          type="text"
          disabled={true}
        />

        <div onClick={increment} className="counter__handle">+</div>

      </div>

    </>
    
  )

}

export default Counter;