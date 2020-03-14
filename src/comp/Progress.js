import React, { useContext } from "react";
import { ContextBase } from "./ContextProvider";

const Progress = () => {
  const { state, dispatch } = useContext(ContextBase);
  return (
    <div>
      <h2 className="">
        تعداد حدس های شما :
        {state.guessList.length ? state.guessList.length : null}
      </h2>
      <div>
        <ul className="nav">
          {state.guessList.length
            ? state.guessList.map((item, index) => {
                return (
                  <li key={index} className=" nav-item mr-2">
                    {item}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Progress;
