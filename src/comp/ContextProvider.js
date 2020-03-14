import React, { createContext, useReducer } from "react";
export const ContextBase = createContext();

const initialState = {
  guessList: [],
  comGuess: Math.floor(Math.random() * 100) + 1
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        guessList: [action.payload, ...state.guessList]
      };
    default:
      return state;
  }
};

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextBase.Provider value={{ state, dispatch }}>
      {props.children}
    </ContextBase.Provider>
  );
};

export default ContextProvider;
