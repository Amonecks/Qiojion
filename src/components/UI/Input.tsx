interface IInputProps {
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onFocus? : (e: React.FocusEvent) => void;
  onBlur? : (e: React.FocusEvent) => void;
}

const Input: React.FC<IInputProps> = ({ type, onChange, value, placeholder, onInput, required = false, disabled = false, onFocus, onBlur }): JSX.Element => {

  return (

    <>
      
      <input
        type={type}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />

    </>
    
  )

}

export default Input;