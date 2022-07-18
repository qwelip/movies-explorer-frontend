import { useReducer } from "react";
import { createContext } from "react";


export const AppContext = createContext();

const initialState = {
  name: '',
  email: '',
  formError: '',
  formSuccess: '',
  likedMovieDB: []
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
    case 'SET_FORM_SUCCESS': {
      return {
        ...state,
        formSuccess: payload
      }
    }
    case 'ADD_LIKED_MOVIE': {
      return {
        ...state,
        likedMovieDB: payload
      }
    }
    case 'SET_ALL_LIKED_MOVIE': {
      return {
        ...state,
        likedMovieDB: [...initialState.likedMovieDB, ...payload]
      }
    }
    case 'DELETE_LIKED_MOVIE': {
      return {
        ...state,
        likedMovieDB: payload
      }
    }
    case 'RESET_STATE': {
      return {
        name: '',
        email: '',
        formError: '',
        likedMovieDB: []
      }
    }
    default:
      return state
  }
}

export const Context = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setName = (name) => {
    dispatch({type: 'SET_NAME', payload: name});
  }

  value.setEmail = (email) => {
    dispatch({type: 'SET_EMAIL', payload: email});  
  }

  value.setFormError = (formError) => {
    dispatch({type: 'SET_FORM_ERROR', payload: formError});
  }

  value.setFormSuccess = (formSuccess) => {
    dispatch({type: 'SET_FORM_SUCCESS', payload: formSuccess});
  }

  value.setAllLikedMovie = (ids) => {
    dispatch({type: 'SET_ALL_LIKED_MOVIE', payload: ids});
  }

  value.deleteLikedMovie = (id) => {
    dispatch({type: 'DELETE_LIKED_MOVIE', payload: id});
  }

  value.addLikedMovie = (id) => {
    dispatch({type: 'ADD_LIKED_MOVIE', payload: id});
  }

  value.resetState = () => {
    dispatch({type: 'RESET_STATE'});
  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
