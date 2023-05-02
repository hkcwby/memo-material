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
            <Typography key={item.id} sx={{ margin: "1vh", flexGrow: "2" }}>
              {item.title}
            </Typography>

            <Edit
              onClick={() => props.onMemoClick(item.id)}
              sx={{
                borderStyle: "solid",
                borderRadius: "20%",
                margin: "1vh",
                "&:hover": {
                  border: "1px solid black",
                  color: "darkgray",
                  backgroundColor: "grey",
                },
              }}
            />

            <Clear
              onClick={() => props.onDeleteClick(item.id)}
              sx={{
                borderStyle: "solid",
                borderRadius: "20%",
                margin: "1vh",
                "&:hover": {
                  border: "1px solid black",
                  color: "darkgray",
                  backgroundColor: "grey",
                },
              }}
            />
          </Box>
        ))}
      </Box>
      <Add
        onClick={props.onComposeClick}
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
      />
    </Container>
  );
}

export default LeftPanel;
