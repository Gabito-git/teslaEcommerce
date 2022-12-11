interface Props{
    title: string;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ 
  title, disabled = false, 
  onClick = () => {},
  className, 
  type = "button"
}: Props
  ) => {

  return (
    <button 
        type={ type }
        className={`button ${ className }`}
        style={ disabled ? {backgroundColor:"gray"}: {} }
        disabled={ disabled } 
        onClick={ onClick }
    >
        { title } 
    </button>
  )
}

export default Button