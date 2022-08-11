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
        "https://bsptrips.staging.vggdev.com/api/account/validateToken",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          let payload = {
            referencenumber: null,
            bookingreferenceid: "zzzjmi",
            bookingreferencetype: "",
            tickettimelimit: "2022-08-12t18:28:00+01:00",
            airtravellers: [
              {
                passengertypecode: "adt",
                nameprefix: "mr",
                firstname: "moses",
                middlename: "",
                lastname: "ass",
                email: "amos@gmail.com",
                Telephone: "08167226722",
                BirthDate: "1990-02-14T00:00:00+00:00",
                ETicketNumber: null,
                TravellerReferenceId: "1",
                Addresses: [],
              },
            ],
            FlightSets: [
              {
                DirectionInd: null,
                DirectionId: "1",
                FlightEntries: [
                  {
                    FlightNumber: "7122",
                    Aircraft: "ER4",
                    MarketingAirlineCode: "P4",
                    MarketingAirlineName: "Air Peace",
                    OperatingAirlineCode: "P4",
                    OperatingAirlineName: "Air Peace",
                    FlightClass: "ECONOMY",
                    DepartureDate: "2022-08-24T06:15:00",
                    DepartureAirportCode: "LOS",
                    DepartureAirportName:
                      "Murtala Muhammed International Airport",
                    DepartureAirportFullName:
                      "Murtala Muhammed International Airport (LOS)",
                    DepartureTerminal: null,
                    DepartureGate: null,
                    ArrivalDate: "2022-08-24T07:30:00",
                    ArrivalAirportCode: "ABV",
                    ArrivalAirportName: "Nnamdi Azikiwe International Airport",
                    ArrivalAirportFullName:
                      "Nnamdi Azikiwe International Airport (ABV)",
                    ArrivalTerminal: null,
                    ArrivalGate: null,
                  },
                ],
              },
            ],
            FlightRules: [],
            FlightRulePenalties: [],
            Errors: [],
            Warnings: [],
          };
          var stringifiedObj = JSON.stringify(payload);

          // //post message to react native
          // if (window.ReactNativeWebView) {
          //   window.ReactNativeWebView.postMessage(stringifiedObj);
          // }
          //post message to Ionic
          if (window.webkit.messageHandlers) {
            window.webkit.messageHandlers.cordova_iab.postMessage(
              stringifiedObj
            );
          }
          // if (window.flutter_inappwebview) {
          //   window.flutter_inappwebview.callHandler(
          //     "myHandlerName",
          //     stringifiedObj
          //   );
          // }
        })
        .catch((error) => console.log("error", error));
    }
  }, [searchParams]);

  // useEffect(() => {
  //   // post message to Ionic
  //   if (window?.webkit?.messageHandlers) {
  //     console.log("passed");
  //     let obj = {
  //       name: "John Doe",
  //       age: "36",
  //     };
  //     const stringifiedObj = JSON.stringify(obj);

  //     window.webkit.messageHandlers.cordova_iab.postMessage(stringifiedObj);
  //   }
  // }, []);

  return (
    <div className="App">
      <div id="message">
        welcome to react, a message has been posted using postmessage
      </div>
    </div>
  );
};
