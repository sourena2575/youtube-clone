import React, { useState, useContext } from "react";
import { ContextBase } from "./ContextProvider";
import styled from "styled-components";

const Form = () => {
  const [num, setnum] = useState("");
  const { state, dispatch } = useContext(ContextBase);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", payload: num });
          setnum("");
        }}
      >
        <div className="form-group">
          <DivLabel>
            <label htmlFor="number "> حدس بزنید</label>
          </DivLabel>
          <input
            type="number"
            className="form-control"
            placeholder="بین یک تا صد    "
            name="guess"
            id="number"
            onChange={e => setnum(e.target.value)}
            value={num}
          />
          <button
            className="btn btn-outline-dark form-control mt-2"
            type="submit"
          >
            Gusee
          </button>
          <Div>
            {state.guessList.length ? (
              Math.abs(state.guessList[0] - state.comGuess) === 0 ? (
                <h4 className=" btn btn-success">You Win</h4>
              ) : state.comGuess > state.guessList[0] ? (
                <p className=" btn-outline-primary">
                  عدد بزرگتری را امتحان کنید
                </p>
              ) : (
                <p className=" btn-outline-danger">
                  عدد کوچکتری را امتحان کنید
                </p>
              )
            ) : null}
          </Div>
        </div>
      </form>
    </div>
  );
};
const Div = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  .btn-outline-danger {
    padding: 8px;
    border-radius: 8px;
  }
  .btn-outline-primary {
    padding: 8px;
    border-radius: 8px;
  }
  .btn-outline-success {
    padding: 8px;
    border-radius: 8px;
  }
`;
const DivLabel = styled.div`
  display: flex;
  justify-content: center;
`;
export default Form;
