import { ErrorMessage, useField } from "formik";

interface Props{
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password'
  placeholder?: string;
  className?: string;
  [x: string]: any;
}

export const TextInput = ({label, className, ...props}: Props) => {

  const [field] = useField( props );

  return (
    <div className={ className }>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input  {...field}{...props}/>
      <ErrorMessage name={ props.name } component="span" className="error"/>
    </div>
  )
}
