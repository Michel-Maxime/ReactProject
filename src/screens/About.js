import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carde from "../components/cardAbout";
import SpecTable from "../components/specTable";

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
          bgcolor: "background.paper",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Carde
          key={heroe?.id}
          id={heroe?.id}
          title={heroe?.name}
          img={heroe?.images?.lg}
          details={heroe?.connections?.relatives}
        />
        <div>
          <SpecTable data={heroe?.powerstats} />
        </div>
      </Box>
    </>
  );
}
