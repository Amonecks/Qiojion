interface IButtonProps {
  version: string;
  onClick?: React.MouseEventHandler;
  children: JSX.Element | string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button: React.FC<IButtonProps> = ({version, onClick, children, type}): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${version}`}
    >
      {children}
    </button>
  )
}

export default Button;