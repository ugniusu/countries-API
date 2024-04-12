import React, { useState, useEffect } from "react";

const WhereAmI = ({ className }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
              .then((res) => {
                if (!res.ok) throw new Error(`${res.status}`);
                return res.json();
              })
              .then((data) => {
                const city = data.city || "Unknown City";
                const country = data.country || "Unknown Country";
                setLocation(`${city}, ${country}`);
                setError(null);
              })
              .catch((err) => {
                setError(err.message);
                setLocation(null);
              });
          },
          (error) => {
            setError(error.message);
            setLocation(null);
          }
        );
      } else {
        setError("Error");
      }
    };

    getLocation();
  }, []);

  return <div className={className}>{location && <p>{location}</p>}</div>;
};

export default WhereAmI;
