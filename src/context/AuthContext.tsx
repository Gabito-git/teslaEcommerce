import { AuthState } from '../interfaces/authInterface';
import { createContext, useReducer, Dispatch, ReactElement } from 'react';
import authReducer, { Action } from '../reducers/authReducer';

const initialState: AuthState ={
  uuid: null
}

export const AuthContext = createContext<{
  state: AuthState,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => {}
})

export const AuthContextProvider = ({ children }: {children: ReactElement}) => {
  const [state, dispatch] = useReducer( authReducer, initialState);

  return(
    <AuthContext.Provider value={{ state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )
}