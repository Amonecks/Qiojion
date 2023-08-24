interface ITextareaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const Textarea: React.FC<ITextareaProps> = ({ onChange, value, placeholder, onInput, required = false, className }): JSX.Element => {

  return (

    <>
      
      <textarea
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        value={value}
        required={required}
        className={className}
      />

    </>
    
  )

}

export default Textarea;