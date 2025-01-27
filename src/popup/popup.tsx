import React from "react";
import ReactDOM from "react-dom/client";

function Popup() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: 16 }}>
      <h1>Pomodori</h1>
      <p>Simple Pomodoro Timer (Demo)</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
