import { useReducer } from "react";
import { createContext } from "react";


export const AppContext = createContext();

const initialState = {
  name: '',
  email: '',
  formError: ''
}

const reducer = (state, {type, payload}) => {
  switch(type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: payload
      }
    }
    case 'SET_EMAIL': {
      return {
        ...state,
        email: payload
      }
    }
    case 'SET_FORM_ERROR': {
      return {
        ...state,
        formError: payload
      }
    }
    default:
      return state
  }
}

export const Context = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setName = (name) => {
    dispatch({type: 'SET_NAME', payload: name})
  }

  value.setEmail = (email) => {
    dispatch({type: 'SET_EMAIL', payload: email})
  }

  value.setFormError = (formError) => {
    dispatch({type: 'SET_FORM_ERROR', payload: formError})
  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
