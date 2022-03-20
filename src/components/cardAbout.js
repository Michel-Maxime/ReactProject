import { Toggle } from "../redux/heroesSlice.js";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Carde({ title, id, img, details }) {
  const dispatch = useDispatch();
  const heroesFav = useSelector((state) => state.heroes?.heroesFav);

  const favClick = () => {
    dispatch(Toggle(id));
  };

  return (
    <>
      <Card sx={{ maxWidth: 500, minWidth: 500, margin: 1 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="500"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            <div style={{ float: "right", marginTop: 4.5 }}>
              {heroesFav?.includes(id) ? (
                <FavoriteIcon onClick={() => favClick()} />
              ) : (
                <FavoriteBorderIcon onClick={() => favClick()} />
              )}
            </div>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
