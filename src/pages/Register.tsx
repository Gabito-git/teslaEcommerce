import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { TextInput } from '../components/Form/TextInput';
import * as Yup from 'yup';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import useAuth from '../hooks/useAuth';

export interface RegisterValues{
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const initialValues: RegisterValues = {
  name:'',
  email:'',
  password1: '',
  password2: ''
}

const Register = () => {

  const { onSignup } = useAuth();

  return (
    <div className="auth">

      <img src="/assets/logo.svg" alt="logo" width={ 125 }/>

      <h2 className="auth__title">Sign up to your account</h2>
      <p className="auth__or">Or</p>
      <Link className="auth__link" to='../auth/login'>Sign in</Link>

      <div className="auth__form-field">
        <Formik
          initialValues={ initialValues }
          onSubmit={ onSignup }   
          validationSchema={
            Yup.object({
              name: Yup.string()
                      .min(3, 'Must be at least 3 characters long')
                      .required('Required'),
              email: Yup.string()
                      .email('Please type a valid email address')
                      .required('Required'),
              password1: Yup.string()
                      .min(6, 'Password length must be 6 or more')
                      .required('Required'),
              password2: Yup.string()
                      .oneOf([Yup.ref('password1')], 'Passwords must match')
                      .required('Required')
            })
          }      
        >
          {
            () => (
              <Form className="auth__form">

                <TextInput
                  className="auth__input-field"
                  label="Name"  
                  name="name"
                />

                <TextInput
                  className="auth__input-field"
                  label="Email address"  
                  name="email"
                />

                <TextInput 
                  className="auth__input-field"
                  label="Password"  
                  name="password1"
                  type="password"
                />

                <TextInput 
                  className="auth__input-field"
                  label="Password"  
                  name="password2"
                  type="password"
                />

                <div className="auth__check-link-field">
                  <div className="auth__checkbox-field">
                    <input type="checkbox"/>
                    <label>Remember me</label>
                  </div>
                  <Link className="auth__link" to='#'>Forgot your password?</Link>
                </div>

                <Button 
                  type="submit"
                  title="Sign up" 
                  className="auth__button"
                />
              </Form>
            )       
          }
        </Formik>

      </div>
    </div>
  )
}

export default Register