import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carde from "../components/card";

export default function About() {
  const id = useParams().id;

  const heroe = useSelector((state) =>
    state.heroes.heroes.find((h) => h.id == id)
  );

  return (
    <>
      <p style={{ textAlign: "center" }}>ABOUT</p>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          flexWrap: "wrap",
        }}
      >
        <Carde
          key={heroe?.id}
          id={heroe?.id}
          title={heroe?.name}
          img={heroe?.images?.sm}
          details={heroe?.connections?.relatives}
        />
      </Box>
    </>
  );
}
