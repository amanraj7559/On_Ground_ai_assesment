import { useState, useEffect } from "react";
import { agentStatuses } from "./mockData";

// Turns a number of seconds into a MM:SS string for the call timer display.
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function Header({ agentName, status, onStatusChange }) {
  const [callSeconds, setCallSeconds] = useState(0);

  // Whenever the status becomes "On Call", start a timer that ticks every
  // second. The button handler resets the timer when the call ends.
  useEffect(() => {
    if (status !== "On Call") {
      return;
    }

    const intervalId = setInterval(() => {
      setCallSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the status changes or component unmounts.
    return () => clearInterval(intervalId);
  }, [status]);

  function handleStatusChange(nextStatus) {
    if (nextStatus !== "On Call") {
      setCallSeconds(0);
    }
    onStatusChange(nextStatus);
  }

  return (
    <header className="agent-status-bar">
      <div className="agent-info">
        <span className="agent-name">{agentName}</span>
        {status === "On Call" && (
          <span className="call-timer">Call time: {formatTime(callSeconds)}</span>
        )}
      </div>

      <div className="status-buttons">
        {agentStatuses.map((statusOption) => (
          <button
            key={statusOption}
            className={`status-button ${status === statusOption ? "active" : ""} status-${statusOption
              .toLowerCase()
              .replace(" ", "-")}`}
            onClick={() => handleStatusChange(statusOption)}
          >
            {statusOption}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
