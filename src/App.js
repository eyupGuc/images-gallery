import data from "./data";
import "./App.css";
import Card from "./component/Card";
import React from "react";

function App() {
  console.log(data);

  return (
    <>
      <div className="App">
        <h1>Hello</h1>
        <Card />
        <div>{data.map((card) => <Card src={card.src.large} name={card.photographer}/>)}</div>
      </div>
    </>
  );
}

export default App;
