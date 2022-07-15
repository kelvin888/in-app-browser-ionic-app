import { useEffect } from "react";

export const Kelvin = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log({ data });

        var messageObj = { react_message2: "Hello Cordova" };
        var stringifiedMessageObj = JSON.stringify(messageObj);
        //@ts-ignore
        webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);
      });
  }, []);
  return (
    <div className="App">
      <div id="message">
        welcome to react, a message has been posted using postmessage
      </div>
    </div>
  );
};
