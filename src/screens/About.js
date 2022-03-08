import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carde from "../components/card";

export default function About() {
  const dispatch = useDispatch();
  const heroeAbout = useSelector((state) => state.heroes.heroeAbout);

  const id = useParams().id;

  useEffect(() => {
    dispatch({ type: "FETCH_HEROES_ABOUT", payload: { id } });
  }, []);

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
          key={heroeAbout.id}
          id={heroeAbout.id}
          title={heroeAbout.name}
          img={heroeAbout.images.sm}
          details={heroeAbout.connections.relatives}
        />
      </Box>
    </>
  );
}
