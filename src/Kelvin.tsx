import { useEffect } from "react";

export const Kelvin = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log({ data });

        var messageObj = {
          name: "James Croft",
          occupation: "Civil Engineer",
          address: "10 Darwin Street, Nortberg, Australia",
          maritalStatus: "single",
          netWorth: "100000USD",
          hobbies: "Singing, Dancing",
          height: "6.0ft",
        };
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
