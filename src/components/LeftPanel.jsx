import { Container, Typography, Button, Box } from "@mui/material";

function LeftPanel(props) {
  return (
    <Container
      id="left-panel"
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
        Memos
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
          flexGrow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "space-evenly",
          borderStyle: "solid",
          minWidth: "20vw",
        }}
      >
        {props.memos.map((item, index) => (
          <Box sx={{ display: "flex" }}>
            <Typography key={index} sx={{ margin: "1vh", flexGrow: "2" }}>
              {item}
            </Typography>
            <Button>X</Button>
          </Box>
        ))}
      </Box>
      <Button>Compose</Button>
    </Container>
  );
}

export default LeftPanel;
