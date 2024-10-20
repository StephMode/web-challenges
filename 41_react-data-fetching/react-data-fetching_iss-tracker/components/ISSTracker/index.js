// import { useEffect, useState } from "react";
// 💡 Mit dem SWR hook benötige ich keinen state mehr und die fetch fn muss ihre ge-fetch-ten Daten nicht mehr in eine state schreiben

import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // Step 1: declare "fetcher" fn that serves as a wrapper/shorthand version of the native fetch and store it in the const "fetcher"

  // Version with the classic notiation
  // const fetcher = (...args) => fetch(...args).then((response) => response.json());

  // Version with the up-to-date notation
  async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
  }

  // Step 2 implement the useSWR hook to store the results of the fetch and make it usable
  // we want to import:
  // data, because we want to make use of the data
  // error
  // isLoading
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    { refreshInterval: 5000 }
  );

  // Step 3
  // impelement error and isLoading cases

  if (error) return <p>🛑 failed</p>;
  if (isLoading) return <p>⏳ is loading</p>;

  // Step 4
  // Passing data onto the rest of the app

  // now I should be able to pass data onto the ❌ doesn't work
  // I want to make the longt and lati available as separate props
  // Approach 1: destructure it directly in the SWR hook like [...data] ❌
  // Approach 2: states for the longt and latit ❌ no, just destrucuture the data
  // Approach 3: just store the destructured data in a separate data const ✅

  // const longitude = function getLongtitude() {
  //   const { data } = useSWR("https://api.wheretheiss.at/v1/satellites/25544");

  // }

  const { longitude, latitude } = data;

  return (
    <main>
      {/* <h2>
        The current longtitude is{longitude} and {latitude}
      </h2> */}
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
