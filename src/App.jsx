import { useState } from "react";
import "./App.css";
import {
  Container,
  Typography,
  Button,
  CssBaseline,
  AppBar,
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
          borderStyle: "solid",
        }}
      >
        <Container
          id="left-panel"
          sx={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Memos
          </Typography>
          <Container
            sx={{
              alignSelf: "center",
            }}
          >
            {memos.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  flexGrow: "2",
                }}
              >
                {item}
              </Typography>
            ))}
          </Container>
          <Button>Compose</Button>
        </Container>
        <Container
          id="right-panel"
          sx={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Memo Detail
          </Typography>
          <Box>
            <Typography>Title</Typography>
            <TextField size="small"></TextField>
          </Box>
          <Box>
            <Typography>Detail</Typography>
            <TextField size="large" sx={{ height: "30vh" }}></TextField>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default App;
