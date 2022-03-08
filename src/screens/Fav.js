import { useSelector } from "react-redux";
import Carde from "../components/card";
import { Box } from "@mui/system";

export default function Fav() {
  const heroes = useSelector((state) => state.heroes.heroes);
  const heroesFav = useSelector((state) => state.heroes.heroesFav);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "background.paper",
        flexWrap: "wrap",
      }}
    >
      {heroes
        .filter((dt) => heroesFav.includes(dt.id))
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
  );
}
