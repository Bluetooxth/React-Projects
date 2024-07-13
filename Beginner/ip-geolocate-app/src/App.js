import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [ip, setIp] = useState("1.1.1.1");
  const [ipInfo, setIpInfo] = useState("");

  const fetchIpInfo = async (ip) => {
    try {
      console.log("Fetching data");
      const result = await axios.get(`https://ipapi.co/${ip}/json/`);
      if (result.status === 200) {
        setIpInfo(result.data);
      }
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    if (ip) {
      fetchIpInfo(ip);
    }
  }, [ip]);

  return (
    <section className="container">
      <input className="input" type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
      {ipInfo && (
        <div className="ipInfo">
          <p>IP: {ipInfo.ip}</p>
          <p>Country: {ipInfo.country_name}</p>
          <p>City: {ipInfo.city}</p>
          <p>Region: {ipInfo.region}</p>
          <p>Postal: {ipInfo.postal}</p>
          <p>Latitude: {ipInfo.latitude}</p>
          <p>Longitude: {ipInfo.longitude}</p>
          <p>ISP: {ipInfo.org}</p>
          <a
            href={`https://earth.google.com/web/@${ipInfo.latitude},${ipInfo.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="atag"
          >
            View on Google Earth
          </a>
        </div>
      )}
    </section>
  );
};

export default App;