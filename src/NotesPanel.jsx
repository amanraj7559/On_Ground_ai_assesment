import { useState } from "react";
import { dispositionOptions } from "./mockData";

// Lets the agent write notes about the current call and pick an outcome,
// then "saves" them (in this prototype, that just means showing them below).
function NotesPanel({ customer }) {
  const [notes, setNotes] = useState("");
  const [disposition, setDisposition] = useState(dispositionOptions[0]);
  const [savedNote, setSavedNote] = useState(null);

  function handleSave() {
    if (!notes.trim()) {
      return;
    }

    setSavedNote({
      customerName: customer ? customer.name : "Unknown caller",
      text: notes,
      disposition,
      savedAt: new Date().toLocaleTimeString(),
    });

    // Clear the text area after saving, ready for the next note.
    setNotes("");
  }

  return (
    <section className="notes-panel">
      <h2>Call Notes & Disposition</h2>

      <textarea
        className="notes-textarea"
        placeholder="Type notes about this call..."
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        rows={5}
      />

      <div className="disposition-row">
        <label htmlFor="disposition-select">Outcome:</label>
        <select
          id="disposition-select"
          value={disposition}
          onChange={(event) => setDisposition(event.target.value)}
        >
          {dispositionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button className="save-button" onClick={handleSave}>
        Save Notes
      </button>

      {savedNote && (
        <div className="saved-note">
          <p>
            <strong>Saved for {savedNote.customerName}</strong> at {savedNote.savedAt}
          </p>
          <p>
            <strong>Outcome:</strong> {savedNote.disposition}
          </p>
          <p>{savedNote.text}</p>
        </div>
      )}
    </section>
  );
}

export default NotesPanel;
