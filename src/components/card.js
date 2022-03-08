import { Link } from "react-router-dom";

import { Toggle } from "../redux/heroesSlice.js";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

export default function Carde({ title, id, img, details }) {
  const dispatch = useDispatch();

  const favClick = () => {
    dispatch(Toggle(id));
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 345, margin: 1 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
          >
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to={`/about/${id}`}>
            Learn More
          </Button>
          <Button size="small" onClick={() => favClick()}>
            Add/Remove to fav
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
