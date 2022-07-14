import { useEffect } from "react";

export const Kelvin = () => {
  useEffect(() => {
    fetch("https://afrifex-backend.vercel.app/api/flights")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log({ data });
        localStorage.setItem("data", JSON.stringify(data[0]));
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
