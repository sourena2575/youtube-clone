import React, { createContext, useReducer } from "react";
import YouTube from "./YouTube";

const initialState = {
  video: [],
  selectedVideo: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        video: action.payload,
        selectedVideo: action.payload[0]
      };

    default:
      return state;
  }
};
export const ContextBase = createContext();

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextBase.Provider value={{ dispatch, state }}>
      {props.children}
    </ContextBase.Provider>
  );
};

export default ContextProvider;
