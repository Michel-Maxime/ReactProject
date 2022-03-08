import { useEffect, useState } from "react";
import CenterInput from "../components/input";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Carde from "../components/card.js";

export default function Feed() {
  const dispatch = useDispatch();

  //pas ouf pck au debut charge l'element juste avant(fait un petit bug visuel)
  const heroes = useSelector((state) => state.heroes.heroes);

  useEffect(() => {
    dispatch({ type: "FETCH_HEROES" });
  }, []);

  const [filter, setFilter] = useState("");
  return (
    <>
      <p style={{ textAlign: "center" }}>FEED</p>
      <CenterInput text={filter} textSet={setFilter} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          flexWrap: "wrap",
        }}
      >
        {heroes
          .filter((dt) => dt.name.match(new RegExp(filter, "i")))
          .map((dt) => {
            return (
              <Carde
                key={dt.id}
                id={dt.id}
                title={dt.name}
                img={dt.images.sm}
                details={dt.connections.relatives}
              />
            );
          })}
      </Box>
    </>
  );
}
