import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Base from "./comp/Base";

function App() {
  return (
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  );
}

const Div = styled.div``;
export default App;
