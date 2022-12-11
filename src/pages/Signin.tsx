import { Form, Formik } from "formik"
import { Link} from "react-router-dom"
import { TextInput } from '../components/Form/TextInput';
import Button from '../components/Button';
import * as Yup from 'yup';

import useAuth from "../hooks/useAuth";

export interface Login{
  email: string;
  password: string;
}

const initialValues: Login = {
  email: '',
  password: ''
}

const Signin = () => {
 
  const { onLogin, handleGoogleLogin } = useAuth();

  return (
    <div className="auth">

      <img src="/assets/logo.svg" alt="logo" width={ 125 }/>

      <h2 className="auth__title">Sign in to your account</h2>
      <p className="auth__or">Or</p>
      <Link 
        className="auth__link" 
        to='../auth/register'
      >Create new account</Link>

      <div className="auth__form-field">
        <Formik
          initialValues={ initialValues }
          onSubmit={ onLogin } 
          validationSchema={
            Yup.object({
              email: Yup.string()
                      .email('Please type a valid email address')
                      .required('Required'),
              password: Yup.string()
                      .min(6, 'Password length must be 6 or more')
                      .required('Required')
            })
          }   
        >
          {
            () => (
              <Form className="auth__form">
                <TextInput 
                  className="auth__input-field"
                  label="Email address"  
                  name="email"
                />

                <TextInput 
                  className="auth__input-field"
                  label="Password"  
                  name="password"
                  type="password"
                />

                <div className="auth__check-link-field">
                  <div className="auth__checkbox-field">
                    <input type="checkbox"/>
                    <label>Remember me</label>
                  </div>
                  <Link className="auth__link" to='#'>Forgot your password?</Link>
                </div>

                <div className="auth__button-field">
                  <Button 
                    type="submit"
                    title="Sign in" 
                    className="auth__button"
                  />
                  <p className="auth__floating-p">Or continue with</p>
                </div>
              </Form>
            )       
          }
        </Formik>

        <div 
          className="auth__gmail-button"
          onClick={ handleGoogleLogin }
        >
          <div >
            <img 
              width={ 30 }
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="gmail"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin