interface IFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element | JSX.Element[];
  className: string;
}

const Form: React.FC<IFormProps> = ({ children, onSubmit, className }): JSX.Element => {

  return (

    <>
      
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>

    </>
    
  )

}

export default Form;