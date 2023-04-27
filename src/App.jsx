import { useState } from "react";
import "./App.css";
import {
  Container,
  Typography,
  Button,
  CssBaseline,
  AppBar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <Container className="App">
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
      </Container>
    </>
  );
}

export default App;
