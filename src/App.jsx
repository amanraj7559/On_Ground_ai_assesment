import { useState } from "react";
import Header from "./Header";
import CustomerCard from "./CustomerCard";
import NotesPanel from "./NotesPanel";
import { agentName, callQueue } from "./mockData";
import "./App.css";

function App() {
  // The agent's current status: Available, On Call, Break, or Offline.
  const [status, setStatus] = useState("Available");

  // The customer currently loaded into the main card (null = no active call).
  const [activeCustomer, setActiveCustomer] = useState(null);

  // Track which callers are still waiting (removed once accepted).
  const [waitingCallers, setWaitingCallers] = useState(callQueue);

  // Called when the agent clicks "Accept Call" on a waiting caller.
  function handleAcceptCall(customer) {
    setActiveCustomer(customer);
    setStatus("On Call");
    setWaitingCallers((prev) => prev.filter((caller) => caller.id !== customer.id));
  }

  return (
    <div className="app">
      <Header agentName={agentName} status={status} onStatusChange={setStatus} />

      <main className="main-content">
        <div className="left-column">
          <CustomerCard customer={activeCustomer} />
          <NotesPanel customer={activeCustomer} />
        </div>

        <aside className="call-queue">
          <h2>Call Queue</h2>
          {waitingCallers.length === 0 && <p>No callers waiting.</p>}
          <ul className="queue-list">
            {waitingCallers.map((caller) => (
              <li key={caller.id} className="queue-item">
                <div>
                  <p className="queue-caller-name">{caller.name}</p>
                  <p className="queue-caller-phone">{caller.phone}</p>
                </div>
                <button onClick={() => handleAcceptCall(caller)}>Accept Call</button>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default App;
