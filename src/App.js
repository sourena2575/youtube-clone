import React from "react";
import styled from "styled-components";
import Form from "./comp/Form";
import Progress from "./comp/Progress";
import ContextProvider from "./comp/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Div>
        <div className="row">
          <div className="col-sm-10">
            <Form />
          </div>
          <div className="col-sm-10">
            <Progress />
          </div>
        </div>
      </Div>
    </ContextProvider>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  .row {
    width: 50%;
    height: 500px;
    background-color: #f2f2f2;
    border-radius: 20px;
    border: 1px solid #f2f2f2;
    padding-top: 50px;
  }
  .col-sm-10 {
    display: flex;
    justify-content: center;
    margin: 30px auto;
  }
`;
export default App;
