import { useEffect } from "react";

export const Kelvin = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log({ data });
        localStorage.setItem("data", JSON.stringify(data));
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
