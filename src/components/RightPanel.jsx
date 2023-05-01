import { Container, Typography, Box, TextField } from "@mui/material";

function RightPanel() {
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
      <Box>
        <Typography>Title</Typography>
        <TextField></TextField>
      </Box>
      <Box
        sx={{
          flexGrow: "2",
        }}
      >
        <Typography>Detail</Typography>
        <TextField multiline={true} rows="8"></TextField>
      </Box>
    </Container>
  );
}

export default RightPanel;
