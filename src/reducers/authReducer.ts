import { AuthState } from "../interfaces/authInterface"

export type Action = 
| {type: 'SET_USER', payload:{ uuid: string }}
| {type: 'UNSET_USER'}

const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'SET_USER':
      return{
        ...state,
        uuid: action.payload.uuid
      }

    case 'UNSET_USER':
      return{
        ...state,
        uuid: null
      }

    default:
      return state;
  }
}

export default authReducer