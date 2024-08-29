import { useState } from "react";
import "./App.css";
import useNotification from "./hooks/use-notifcation";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");

  //success
  const handleButtonClickSuccess = () => {
    triggerNotification({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  //Failed
  const handleButtonClickFailed = () => {
    triggerNotification({
      type: "error",
      message: "This is a error message!",
      duration: 3000,
    });
  };
  //Warning
  const handleButtonClicWarning = () => {
    triggerNotification({
      type: "warning",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  //Info
  const handleButtonClickInfo = () => {
    triggerNotification({
      type: "info",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <>
      <div className="App">
        {NotificationComponent}
        <h1>Toast Component</h1>
        <button onClick={handleButtonClickSuccess}> Success</button>
        <button onClick={handleButtonClickFailed}> Failed</button>
        <button onClick={handleButtonClicWarning}> Warning</button>
        <button onClick={handleButtonClickInfo}> Information</button>
      </div>
    </>
  );
}

export default App;
