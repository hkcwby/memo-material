import { useState, useEffect } from "react";
import LeftPanel from "./components/LeftPanel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import firebase from "./firebase.js";

import { Container, Typography, CssBaseline, Box } from "@mui/material";

function App() {
  const ref = firebase.firestore().collection("memos");
  //the memo data as stored in the database, in this case we are just using a dummy file to represent our database
  const [memos, setMemos] = useState([
    { id: 1, title: "hello" },
    { id: 2, title: "world" },
    { id: 3, title: "now" },
  ]);
  //useState variable for both the title and detail of our present memo shown on the right panel
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  // a counter for creating new unique memo id
  const [counter, setCounter] = useState(0);
  //a tracking variable to keep track of the current memo based on its unique id
  const [tracking, setTracking] = useState(0);
  //set a validation variable to catch errors and provide user feedback
  const [validation, setValidation] = useState("");

  function getMemosDB() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMemos(items);
      setCounter(items[items.length - 1].id + 1);
      setTracking(items[items.length - 1].id + 1);
    });
  }

  //load the data once after mounting

  useEffect(() => {
    getMemosDB();
  }, []);

  // const memos = ["hello World", "goodbye universe", "something else"];

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
