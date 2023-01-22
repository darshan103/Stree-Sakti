import React, { createContext, useContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = {dispatch, state};

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext);