import "./mapstyle.css";
import Map from "./Map";
// import Map from "./Map/Map";
import { useEffect, useState } from "react";
export default function Mapp() {
  const [coords, setCorrds] = useState({
    latitude: 6.59560,
    longitude: 3.3581
    // latitude: 6.5953987,
    // longitude: 3.3560892
  });
  const [display_name, setName] = useState("Our Office");

  const [address, setAddress] = useState({});

  function error() {
    alert('Sorry, no position available.');
  }
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  function getCurrentCityName( ){
    
   let url="https://nominatim.openstreetmap.org/reverse?format=jsonv2"+
   "&lat="+coords.latitude+"&lon="+coords.longitude;

    fetch(url, {
      method: "GET",   
      mode: 'cors', 
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => response.json())
      .then((data) => setName( data.display_name));
  }

  useEffect(() => {
    
  }, []);

  return (
    // <div className="App">
      
      <Map coords={coords} display_name={display_name} />
    // </div>
  );
}