# Call Centre Staff Application

A simple front-end prototype for a call centre agent's workspace, built with React and Vite. No backend — all data is mock data in `src/mockData.js`.

## Running the app

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Components

- **`App.jsx`** — This is the top-level component that puts the page sections together. It stores the current status, selected customer, and remaining call queue with simple React state.
- **`Header.jsx`** — This component displays the agent's name and the four available status buttons. It also runs the call timer whenever the selected status is "On Call".
- **`CustomerCard.jsx`** — This component displays the selected caller's name, phone, email, account status, and interaction history. If no call has been accepted, it shows a clear message asking the agent to choose one from the queue.
- **`NotesPanel.jsx`** — This component provides the notes text area, outcome dropdown, and Save Notes button. After saving, it shows the note and selected outcome so the user can confirm what was recorded.
- **`mockData.js`** — This file contains the static agent, customer, queue, status, and disposition data used by the prototype. Keeping the data in one file makes it easy to replace or edit for a demo.

## AI Usage Disclosure

Claude (Anthropic) was used to scaffold the starter code for this project, including the component structure, mock data, and styling. The generated code was reviewed and is intended to be understood and modified by the student as part of the assessment.
