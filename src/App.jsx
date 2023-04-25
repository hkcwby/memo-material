import { useState } from "react";
import "./App.css";
import { Typography, Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Typography variant="h1">Material UI Memo</Typography>
      <div className="card">
        <Button
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
