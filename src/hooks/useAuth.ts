import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { RegisterValues } from "../pages/Register";
import { Login } from "../pages/Signin";
import { signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const useAuth = () => {
 
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const onLogin = async(values: Login) => {
    const { email, password } = values;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type:'SET_USER',
        payload: {uuid: user.user.uid}
      })

      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const onSignup = async (values: RegisterValues) => {
    const { email, password1 } = values
   
    await createUserWithEmailAndPassword(auth, email, password1)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
  }

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch({
          type: 'SET_USER',
          payload: { uuid: user.uid }
        })
        navigate('/');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
  }

  const onSignout = async() => {  
    
    try {
      await signOut(auth)
      dispatch({type:'UNSET_USER'})
    } catch (error) {
      console.log(error)
    }

  }

  return{
    onLogin,
    handleGoogleLogin,
    onSignup,
    onSignout
  }
}

export default useAuth