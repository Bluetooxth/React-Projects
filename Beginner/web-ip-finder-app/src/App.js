import React from "react";
import { useState } from "react";

const App = () => {
  const [webURL, setWebURL] = useState("");
  const [webData, setWebData] = useState([]);

  const fetchData = async () => {
    try {
      console.log("Fetching Data");
      const response = await fetch(
        `http://ip-api.com/json/${webURL}`
      );
      const data = await response.json();
      console.log(data);
      if(response.status === 200){
        setWebData(data);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  }

  return (
    <section className="wrapper">
      <h1>IP Address Info</h1>
      <input
        type="url"
        placeholder="Enter IP or Domain"
        value={webURL}
        onChange={(e) => setWebURL(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={fetchData}>Get Data</button>
      {webData && (
        <div className="data">
          <p>IP: {webData.query}</p>
          <p>Status: {webData.status}</p>
          <p>TimeZone: {webData.timezone}</p>
          <p>Country: {webData.country}</p>
          <p>Region: {webData.regionName}</p>
          <p>Postal Code: {webData.zip}</p>
          <p>Latitude: {webData.lat}</p>
          <p>Longitude: {webData.lon}</p>
          <p>ISP: {webData.isp}</p>
          <p>ORG: {webData.org}</p>
          <p>AS: {webData.as}</p>
          <a href={`https://www.google.com/maps/place/${webData.lat},${webData.lon}`} target="_blank">View on Map</a>
        </div>
      )}
    </section>
  );
};

export default App;