import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import App from "./App";

(async function () {
  // Fetch API data on world countries.
  const urlBreeds = "https://api.thecatapi.com/v1/breeds";
  const apiResponseBreeds = await fetch(urlBreeds, {
    method: "GET",
    headers: {
      "x-api-key":
        "live_KUcbQQOz4KRvrU1D0OvjhbrZuZ5NrUP5k4fd0pRVL7ezmwfpgHQn0xhOsP9VZDtF",
    },
  });

  // Parse response JSON into an array.
  const cats = await apiResponseBreeds.json();
  // const images = await apiResponseImages.json();
  console.log(cats);
  // console.log(images);

  // Render the App component to the div#root in markup.
  const root = document.getElementById("root");
  ReactDOM.render(<App cats={cats} />, root);
})();
