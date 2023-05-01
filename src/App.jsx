import { useState } from "react";
import LeftPanel from "./components/LeftPanel.jsx";
import RightPanel from "./components/RightPanel.jsx";

import {
  Container,
  Typography,
  Button,
  CssBaseline,
  Box,
  TextField,
} from "@mui/material";
import { Add, Settings, VerticalAlignCenter } from "@mui/icons-material";

function App() {
  const [count, setCount] = useState(0);

  const memos = ["hello World", "goodbye universe", "something else"];

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
          height: "30vh",
        }}
      >
        <Typography variant="h2" align="center" color="white" sx={{}}>
          Simple Memo Task App Mockup (Material UI)
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
        }}
      >
        <LeftPanel memos={memos}></LeftPanel>
        <RightPanel></RightPanel>
      </Container>
    </>
  );
}

export default App;
