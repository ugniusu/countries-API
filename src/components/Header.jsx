import React, { useEffect, useState } from "react";
import WhereAmI from "./WhereAmI";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = ("0" + time.getSeconds()).slice(-2);

  return (
    <div className="header">
      <div>
        <WhereAmI className="your-location" />
        <p className="time">{`${hours}:${min}:${sec}`}</p>
      </div>
      <h1>Search countries from API</h1>
    </div>
  );
}

export default Header;
