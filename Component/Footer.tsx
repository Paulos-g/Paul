import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Copyright ©Paul. 2026</p>
        <p className="time-display">
          {currentTime.toLocaleDateString()} ||{" "}
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </footer>
  );
}
