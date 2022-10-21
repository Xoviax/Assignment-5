import React, { useState } from "react";

function Cats({ cat }) {
  const [image, setImage] = useState([]);
  (async function () {
    // Fetch API data on world countries.

    const urlImages = `https://api.thecatapi.com/v1/images/${cat.reference_image_id}?api_key=live_KUcbQQOz4KRvrU1D0OvjhbrZuZ5NrUP5k4fd0pRVL7ezmwfpgHQn0xhOsP9VZDtF`;
    const apiResponseImages = await fetch(urlImages, {
      method: "GET",
      headers: {
        "x-api-key":
          "live_KUcbQQOz4KRvrU1D0OvjhbrZuZ5NrUP5k4fd0pRVL7ezmwfpgHQn0xhOsP9VZDtF",
      },
    });

    // Parse response JSON into an array.

    const images = await apiResponseImages.json();
    setImage(images);
 
    // Render the App component to the div#root in markup.
  })();
  return (
    <details>
      <summary>{cat.name}</summary>

      <div>
        {/* <p>{cat.image["id"]}</p> */}
        <img src={image.url} width="500" />
      </div>
    </details>
  );
}

export default Cats;
