import React, { Children } from "react";
import propTypes from "prop-types";
import "./App.css";
const Test = props => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bol ? "bool" : "nobool"}</h1>
      <h1>{props.strOrNum}</h1>
      {props.ary.map(item => {
        return <li key={item}>{item}</li>;
      })}
      {props.ary0fObj.map(item => {
        return <li key={item.age}>{item.name}</li>;
      })}
      <h1>{props.children}</h1>
    </div>
  );
};

Test.propTypes = {
  str: propTypes.string,
  bol: propTypes.bool,
  strOrNum: propTypes.oneOfType([propTypes.string, propTypes.number]),
  ary: propTypes.arrayOf(propTypes.number),
  ary0fObj: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      age: propTypes.number
    })
  ),
  children: propTypes.isRequired
};

function App() {
  return (
    <div className="App">
      <Test
        str="tech"
        bol={true}
        strOrNum={10}
        ary={[1, 2, 3]}
        ary0fObj={[
          { name: "a", age: 10 },
          { name: "f", age: 20 }
        ]}
      >
        <div>Child</div>
        <div>Child</div>
      </Test>
    </div>
  );
}

export default App;
