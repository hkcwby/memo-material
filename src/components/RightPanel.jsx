import { Container, Typography, Box, TextField } from "@mui/material";
import { Save } from "@mui/icons-material";

function RightPanel(props) {
  return (
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
          margin: "8vh",
        }}
      >
        Memo Detail
      </Typography>
      <Box sx={{ margin: "2vh" }}>
        <Typography>Title</Typography>
        <TextField
          value={props.title ? props.title : ""}
          onChange={props.onChangeTitle}
        ></TextField>
      </Box>
      <Box
        sx={{
          flexGrow: "2",
        }}
      >
        <Typography>Detail</Typography>
        <TextField
          value={props.detail ? props.detail : ""}
          multiline={true}
          rows="8"
          onChange={props.onChangeDetail}
        ></TextField>
      </Box>
      <Save
        onClick={props.onSubmit}
        sx={{
          margin: "4vh",
          borderStyle: "solid",
          borderRadius: "20%",
          "&:hover": {
            border: "1px solid black",
            color: "darkgray",
            backgroundColor: "grey",
          },
        }}
      ></Save>
    </Container>
  );
}

export default RightPanel;
