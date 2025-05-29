import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import UpDownCounter from "./components/UpDownCounter";
import AddUsers from "./components/AddUsers";
import { Provider } from "react-redux";
import store from "./store/store";
import DisplayUsers from "./components/DisplayUsers";

const Timer = () => {
  let Time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(Time);

  const UpdateTime = () => {
    Time = new Date().toLocaleTimeString();
    setCtime(Time);
  };
  
  setInterval(UpdateTime);
  // useEffect(() => {
  // },[])

  return (
    <>
      <h1 className="heading">DIGITAL CLOCK</h1>
      <div className="main">
        <h1 className="clock">{cTime}</h1>
      </div>
    </>
  );
};

const App = () => {

  return (
    <div className="first">
      <Timer />
      {/* for reducer function */}
      {/* <UpDownCounter /> */}
      <Provider store={store}>
        <AddUsers />
        <DisplayUsers />
      </Provider>
    </div>
  );
};

export default App;
