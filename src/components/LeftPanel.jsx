import { Container, Typography, Button, Box } from "@mui/material";
import { Add, Clear, Edit } from "@mui/icons-material";

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

          minWidth: "20vw",
        }}
      >
        {props.memos.map((item, index) => (
          <Box sx={{ display: "flex" }}>
            <Typography key={index} sx={{ margin: "1vh", flexGrow: "2" }}>
              {item}
            </Typography>
            {/* <Edit
              sx={{
                borderStyle: "solid",
                borderRadius: "20%",
                margin: "1vh",
                "&:hover": {
                  border: "1px solid #00FF00",
                  color: "gray",
                  backgroundColor: "lightblue",
                },
              }}
            />
            <Clear
              sx={{
                borderStyle: "solid",
                borderRadius: "20%",
                margin: "1vh",
                "&:hover": {
                  border: "red",
                  color: "gray",
                  backgroundColor: "red",
                },
              }}
            /> */}
          </Box>
        ))}
      </Box>
      {/* <Button variant="outlined" sx={{ margin: "4vh" }}>
        Compose
      </Button> */}
      <Add sx={{ margin: "4vh" }} />
    </Container>
  );
}

export default LeftPanel;
