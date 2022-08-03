import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Kelvin = () => {
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const AppName = searchParams.get("AppName");
    const MerchantCode = searchParams.get("MerchantCode");
    const MerchantHash = searchParams.get("MerchantHash");

    console.log("values", AppName);

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     console.log({ data });

    //     var messageObj = {
    //       name: "James Croft",
    //       occupation: "Civil Engineer",
    //       address: "10 Darwin Street, Nortberg, Australia",
    //       maritalStatus: "single",
    //       netWorth: "100000USD",
    //       hobbies: "Singing, Dancing",
    //       height: "6.0ft",
    //     };
    //     var stringifiedMessageObj = JSON.stringify(messageObj);
    //     //@ts-ignore
    //     webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);
    //   });

    if (AppName && MerchantCode && MerchantHash) {
      var myHeaders = new Headers();
      myHeaders.append("MerchantCode", MerchantCode);
      myHeaders.append("MerchantHash", MerchantHash);
      myHeaders.append("AppName", AppName);
      myHeaders.append(
        "Authorization",
        `Bearer 57ba5e98fd9e6d8503e31639a60b1b44eb2167fec34d4081ee81a1ba6e019fc313b2bb9cb16adf13a03a55fde3f0789c4eb600a0fcce5d7034ce8aa532e7d64a`
      );
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      fetch(
        "https://bsptrips.test.vggdev.com/api/account/validateToken",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          var stringifiedObj = JSON.stringify(result);

          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(stringifiedObj, "GTB");
          }
          if (window.webkit.messageHandlers) {
            window.webkit.messageHandlers.cordova_iab.postMessage(
              stringifiedObj,
              "UBA"
            );
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, [searchParams]);
  return (
    <div className="App">
      <div id="message">
        welcome to react, a message has been posted using postmessage
      </div>
    </div>
  );
};
